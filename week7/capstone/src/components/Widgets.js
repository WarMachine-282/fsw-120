import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchIcon className="widgets-searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets-widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Christi36065557"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.linkedin.com/in/christian-van-loon-6b47731ab/"}
          options={{ text: "#reactjs is awesome!", via: "Christi36065557" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
