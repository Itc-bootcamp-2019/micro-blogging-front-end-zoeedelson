import React from 'react';
import './postBoxStylesheet.css';
// import { render } from '@testing-library/react';
import PublishedTweet from './publishedTweet.js'

class PostBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            text: "",
        };
        this.tweetText = this.tweetText.bind(this)
    }
   
    publishTweet = (e) => {        
        let prevState = this.state.posts;
        {this.state.text.length<140 && this.setState({
            posts: [...prevState, 
                <PublishedTweet insideText={this.state.text}/>
            ],
            text:''
        })};
    }
    tweetText(e){
        this.setState({text: e.target.value});
        console.log(this.state.text)
    }

    render(){
        return(
            <div className="container">
                <div className="fullPostBox">
                    <textarea className="postBox" value={this.state.text} onChange={this.tweetText} placeholder='What you have in mind...'/>
                    <button className="tweetButton" onClick={this.publishTweet}>Tweet</button>
                </div>
                <div>
                    {this.state.posts.map((post)=>post)}
                </div>
            </div>
        )
    }
}

export default PostBox
