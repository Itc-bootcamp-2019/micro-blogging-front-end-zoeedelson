import React from 'react';
import './publishedTweetStylesheet.css';

class PublishedTweet extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div className='publishedTweet'>
                <div className='nameDateContainer'>
                    <div className='name'>yonatan</div>
                    <div className='date'>{this.props.date}</div>
                </div>
                <div className='publishedText'>{this.props.insideText}</div>
            </div>
        )
    }

}

export default PublishedTweet