import React from "react";
import "./Post.css";
// import Feed from "./Feed"
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { render } from "react-dom";

class Post extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const {
      displayName,
      username,
      verified,
      text,
      image,
      liked,
      avatar,
      deleteTweet,
      editTweet,
    } = this.props;
    return (
      <div id="parent">
        <div className="post" id="delete">
          <div className="post-avatar">
            <Avatar src={avatar} />
          </div>
          <div className="post-body">
            <div className="post-header">
              <div className="post-header-text">
                <h3>
                  {displayName}{" "}
                  <span className="post-headerSpecial">
                    {verified && <VerifiedUserIcon className="post-badge" />}@
                    {username}
                  </span>
                </h3>
                <div className="post-header-description">
                  <p>{text}</p>
                </div>
              </div>
              <img src={image} alt="" />
              <div className="post-footer">
                {liked ? (
                  <FavoriteBorderIcon
                    onClick={() => {
                      editTweet(this);
                      console.log(this);
                    }}
                    className="heart-icon-liked"
                    fontSize="small"
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={() => {
                      editTweet(this);
                      console.log(this);
                    }}
                    className="heart-icon-not-liked"
                    fontSize="small"
                  />
                )}
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <PublishIcon fontSize="small" />
                <EditIcon fontSize="small" />
                <DeleteIcon
                  onClick={() => deleteTweet(this)}
                  fontSize="small"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Post;
