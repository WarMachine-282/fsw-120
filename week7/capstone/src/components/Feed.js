import React, { useState } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import data from "./data.json";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState(data.TweetData);

  const createTweet = (data) => {
    console.log(posts);
    setPosts([...posts, data]);
    console.log(posts);
  };

  const deleteTweet = (post) => {
    setPosts(posts.filter((postItem) => {
      console.log(postItem)
      console.log("delete", post);
      return postItem.text !== post.props.text})); //hey logan you were right. (look at me) you needed to add props.
  };
  const editTweet = (post) => {
    setPosts(posts.map((postItem) => {
      console.log(postItem)
      console.log("editing", post); 
      if (postItem.text === post.props.text){
        postItem.liked ? postItem.liked = false :  postItem.liked = true
      return postItem
      }
      return postItem
    }))
  };


  const tweets = posts.map((post) => (
    <Post
      displayName={post.displayName}
      username={post.username}
      verified={post.verified}
      text={post.text}
      avatar={post.avatar}
      image={post.image}
      liked={post.liked}
      deleteTweet={deleteTweet}
      editTweet={editTweet}
    />
  ));

  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
      </div>
      <TweetBox tweetData={posts} setTweetData={createTweet} />
      <FlipMove>{tweets}</FlipMove>
    </div>
  );
};

export default Feed;
