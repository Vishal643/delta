import React from "react";

import "./Posts.css";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import ModeCommentIcon from "@material-ui/icons/ModeComment";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

export function Posts({
  upvotes,
  subreddit,
  username,
  title,
  image_src,
  description,
  comment_count,
}) {
  console.log(comment_count);
  return (
    <div className="posts-wrapper">
      <div className="post">
        <div className="post-sidebar">
          <ArrowUpwardIcon className="upvote" />
          <span>{upvotes}</span>
          <ArrowDownwardIcon className="downvote" />
        </div>
        <div className="post-title">
          <img src="assets/images/subreddit.jpg" alt="" />
          <span className="subreddit-name">r/{subreddit}</span>
          <span className="post-user">Posted by</span>
          <span className="post-user underline">u/{username}</span>
          <div className="spacer"></div>
          {/* <Button label="+ JOIN" /> */}
          <Button className="button-font" color="primary">
            +JOIN
          </Button>
        </div>
        <div className="post-body">
          <span className="title">{title}</span>
          {image_src && <img src={image_src} alt="" />}
          {description && <span className="description">{description}</span>}
        </div>
        <div className="post-footer">
          <div className="comments footer-action">
            <ModeCommentIcon className="comment-icon" />
            <span>{comment_count} Comments</span>
          </div>
          <div className="share footer-action">
            <ShareIcon />
            <span>Share</span>
          </div>
          <div className="save footer-action">
            <BookmarkIcon />
            <span>Save</span>
          </div>
          <MoreHorizIcon className="more-icon footer-action" />
        </div>
      </div>
    </div>
  );
}
