import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
// import data from "./data.json";

const TweetBox = (props) => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    const newTweet = {
      avatar:
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/101798755_10213338663739364_9137961428148289536_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=J8tDjra3cCcAX9GTMV9&_nc_ht=scontent-sjc3-1.xx&oh=e33eca0e0f9c203efd02e80ba69d2d6a&oe=5FCCAE7A",
      displayName: "Christian Van Loon",
      username: "Christi36065557",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
    };
    props.setTweetData(newTweet);
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <Avatar src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/101798755_10213338663739364_9137961428148289536_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=J8tDjra3cCcAX9GTMV9&_nc_ht=scontent-sjc3-1.xx&oh=e33eca0e0f9c203efd02e80ba69d2d6a&oe=5FCCAE7A" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox-inputIMG"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox-tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
