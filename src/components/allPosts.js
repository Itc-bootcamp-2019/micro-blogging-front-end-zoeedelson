import React from "react";
import "./allPostsStylesheet.css";
import PostBox from "./PostBox";
import MyContext from "./MyContext.js";
import { getTweets, sendTweets } from "../lib/api.js";
import PastPosts from "./pastPosts.js";

class AllPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: []
      //   adding: () => {},
    };
  }
  componentDidMount() {
    let tweetArray = getTweets();
    tweetArray.then(response =>
      response.data.tweets.map(entry => this.mountingAll(entry))
    );
    setInterval(() => {
      tweetArray = getTweets();
      tweetArray.then(response =>
        this.setState({ postData: response.data.tweets })
      );
    }, 1000);
  }
  mountingAll(item) {
    let prev = this.state.postData;
    this.setState({
      postData: [...prev, item]
    });
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        <div className="allContainer">
          <PostBox />
          <PastPosts />
        </div>
      </MyContext.Provider>
    );
  }
}

export default AllPosts;
