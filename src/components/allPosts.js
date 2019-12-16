import React from 'react';
import './allPostsStylesheet.css';
import PostBox from './postBox';
import PublishedTweet from './publishedTweet';

class AllPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div className="allContainer">
                <PostBox/>
                
            </div>
        )
    }

}

export default AllPosts;