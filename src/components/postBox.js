import React from 'react';
import './postBoxStylesheet.css';
import PublishedTweet from './publishedTweet.js'

class PostBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            postData: [],
            text: "",
        };
        this.tweetText = this.tweetText.bind(this);
        this.makePublishableTweet = this.makePublishableTweet.bind(this);
    }
   
    componentDidMount(){
        let JSONstr = JSON.parse(localStorage.getItem('1'));
        console.log('json');
        console.log(JSONstr);
        {JSONstr != null && 
            this.setState({postData: JSONstr})
        };
    }

    async sendToServer(e) {        
        localStorage.removeItem('1');
        let newDate = new Date().toISOString();
        let newText = this.state.text;
        let prevStatePostData = this.state.postData;
        await this.setState({
            postData: [ 
                {date: newDate, text: newText},
                ...prevStatePostData, 
            ],
        });
        await localStorage.setItem(1, JSON.stringify(this.state.postData));
        await this.setState({
            text:'',
        });
    }

    makePublishableTweet= (obj) => {
        return(<PublishedTweet insideText={obj.text} date={obj.date}/>)            
    };


    tweetText=(e)=>{
        this.setState({text: e.target.value});
    }

    render(){
        console.log("postdata");
        console.log(this.state.postData);
        console.log('posts')
        console.log(this.setState.posts)
        return(
            <div className="container">
                <div className="fullPostBox">
                    <textarea className="postBox" value={this.state.text} onChange={this.tweetText} placeholder= "What's on your mind..."/>
                    <button className="tweetButton" onClick={() => {this.state.text.length<140 && this.sendToServer()}}>Tweet</button>
                </div>
                <div>
                    {this.state.postData.map((post)=>this.makePublishableTweet(post))}
                </div>
            </div>
        )
    }
}

export default PostBox
