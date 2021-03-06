import React from "react";
import "./postBoxStylesheet.css";
import PublishedTweet from "./publishedTweet.js";
import { getTweets, sendTweets } from "../lib/api.js";
import PastPosts from "./pastPosts.js";
import MyContext from "./MyContext.js";

class PostBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      text: "",
      isLoading: false
    };
    this.tweetText = this.tweetText.bind(this);
  }

  addTweet = (newText, newDate, username) => {
    let prevStatePostData = this.state.postData;
    this.setState({
      postData: [
        { content: newText, date: newDate, userName: username },
        ...prevStatePostData
      ],
      isLoading: true
    });
  };

  async sendToServer(e) {
    let newDate = new Date().toISOString();
    let newText = this.state.text;
    let username = JSON.parse(localStorage.getItem("1"));
    await sendTweets({ content: newText, date: newDate, userName: username })
      .then(this.addTweet())
      .catch(
        () => alert("Issue sending to server :("),
        this.setState({ isLoading: false })
      );
    await this.setState({
      text: "",
      isLoading: false
    });
  }

  tweetText = e => {
    if (JSON.parse(localStorage.getItem("1")) == null) {
      alert(
        "In order to write a Tweet, you must submit a username on the Username tab."
      );
    } else {
      this.setState({ text: e.target.value });
    }
  };
  clickable() {
    if (this.state.isLoading == true && this.state.text.length < 140) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="fullPostBox">
          {this.state.isLoading == true &&
          JSON.parse(localStorage.getItem("1")) == null ? (
            <textarea
              className="postBox postBoxWait"
              placeholder="Loading, please wait..."
            />
          ) : (
            <textarea
              className="postBox"
              value={this.state.text}
              onChange={this.tweetText}
              placeholder="What's on your mind..."
            />
          )}
          {JSON.parse(localStorage.getItem("1")) != null &&
          this.state.isLoading == false &&
          this.state.text.length < 140 ? (
            <button
              className="tweetButton"
              onClick={() => {
                this.sendToServer();
              }}
            >
              Tweet
            </button>
          ) : (
            <button className="tweetButtonDisabled">Tweet</button>
          )}
        </div>
      </div>
    );
  }
}

export default PostBox;
