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
            isLoading: false,
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
        await sendTweets({ content: newText, date: newDate, userName: 'name' })
            .then(() => 
                this.setState({
                    postData: [
                        { content: newText, date: newDate, userName: 'name' },
                        ...prevStatePostData,
                    ],
                    isLoading: true,
                }))
            .catch(() => alert("Issue sending to server :("),this.setState({isLoading:false}));
        await this.setState({
            text: '',
            isLoading: false,
        });
    }

    makePublishableTweet = (obj) => {
        return (<PublishedTweet insideText={obj.content} date={obj.date} userName={obj.userName} />)
    };


    tweetText = (e) => {
        this.setState({ text: e.target.value });
    }
    clickable(){
        if (this.state.isLoading == true && this.state.text.length <140){
            return(true)
        } else {
            return(false)
        }
    }

    render() {

        return (
            <div className="container">
                <div className="fullPostBox">

                {this.state.isLoading == true ?  (<textarea className="postBox postBoxWait" placeholder="Loading, please wait..." />) : (<textarea className="postBox" value={this.state.text} onChange={this.tweetText} placeholder="What's on your mind..." />)}
                {this.state.isLoading == false && this.state.text.length < 140 ? (<button className="tweetButton" onClick={() => { this.sendToServer() }}>Tweet</button>) : (<button className="tweetButtonDisabled" >Tweet</button> )    }
                {/* this.state.isLoading == true or this.state.text.length >=140<button className="tweetButtonDisabled" >Tweet</button>    */}
                    {/* { ? (<textarea className="postBox postBoxWait" placeholder="Loading, please wait..." />): (<textarea className="postBox" value={this.state.text} onChange={this.tweetText} placeholder="What's on your mind..." />)}

                    { ? (<button className="tweetButton" onClick={() => { this.sendToServer() }}>Tweet</button>) : (<button className="tweetButtonDisabled" >Tweet</button>} */}

                </div>
                <div>
                    {this.state.postData.map((post) => this.makePublishableTweet(post))}
                </div>
            </div>
        )
    }
}

export default PostBox
