import React from "react";
import PublishedTweet from "./publishedTweet.js";
import MyContext from "./MyContext.js";

class PastPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  makePublishableTweet = obj => {
    return (
      <PublishedTweet
        insideText={obj.content}
        date={obj.date}
        userName={obj.userName}
      />
    );
  };
  render() {
    return (
      <MyContext.Consumer>
        {({ postData }) => (
          <div>{postData.map(post => this.makePublishableTweet(post))}</div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default PastPosts;
