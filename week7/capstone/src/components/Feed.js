import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import data from "./data.json";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState(data.TweetData);

  const addNewTweet = TweetBox => {
    setPosts([TweetBox, ...posts]);
  };

  const tweets = posts.map((post) => (
    <Post
      displayName={post.displayName}
      username={post.username}
      verified={post.verified}
      text={post.text}
      avatar={post.avatar}
      image={post.image}
    />
  ));

  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
      </div>
      <TweetBox tweetData={posts} setTweetData={setPosts} />
      <FlipMove>{tweets}</FlipMove>
    </div>
  );
};

export default Feed;
