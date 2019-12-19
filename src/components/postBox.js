import React from 'react';
import './postBoxStylesheet.css';
import PublishedTweet from './publishedTweet.js'
import { getTweets, sendTweets } from './lib/api.js'

class PostBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postData:[],
            text: "",
        };
        this.tweetText = this.tweetText.bind(this);
        this.makePublishableTweet = this.makePublishableTweet.bind(this);
    }

    componentDidMount() {
        let tweetArray = getTweets();
        tweetArray.then((response) => response.data.tweets.map((entry) =>
            this.mountingAll(entry)
        ))
    }

    mountingAll(item) {
        let prev = this.state.postData;
        this.setState({
            postData:
                [item,
                    ...prev
                ]
        })
    }

    async sendToServer(e) {
        let newDate = new Date().toISOString();
        let newText = this.state.text;
        let prevStatePostData = this.state.postData;
        await this.setState({
            postData: [
                { content: newText, date: newDate, userName: 'name' },
                ...prevStatePostData,
            ],
        });
        await sendTweets({ content: newText, date: newDate, userName: 'name' });
        await this.setState({
            text: '',
        });
    }

    makePublishableTweet = (obj) => {
        return (<PublishedTweet insideText={obj.content} date={obj.date} userName={obj.userName} />)
    };


    tweetText = (e) => {
        this.setState({ text: e.target.value });
    }

    render() {
        console.log('this is this.state.postData')
        console.log(this.state.postData)
        return (
            <div className="container">
                <div className="fullPostBox">
                    <textarea className="postBox" value={this.state.text} onChange={this.tweetText} placeholder="What's on your mind..." />
                    {this.state.text.length < 140 && <button className="tweetButton" onClick={() => { this.state.text.length < 140 && this.sendToServer() }}>Tweet</button>}
                    {this.state.text.length >= 140 && <button className="tweetButtonDisabled" >Tweet</button>}
                </div>
                <div>
                    {this.state.postData.map((post) => this.makePublishableTweet(post))}
                </div>
            </div>
        )
    }
}

export default PostBox
