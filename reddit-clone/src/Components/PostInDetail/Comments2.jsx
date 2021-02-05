import React from "react";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { updateComments } from "../../Redux/PostInDetail/action";

import { Comment, Tooltip, Avatar } from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

const Comments2 = ({
  children,
  title,
  id,
  upvote,
  upvote_status,
  subredditName,
  postId,
}) => {
  // appending comments  // START
  const [newComment, setNewComment] = React.useState("");

  const commentsData = useSelector(
    (state) => state.commentsReducer.data.comments
  );

  const findComment = (commentObj, payload) => {
    if (commentObj.id === id) {
      commentObj.reply.push(payload);
      return commentObj;
    } else {
      let res = { ...commentObj };
      let reply = [];
      for (let i = 0; i < commentObj.reply.length; i++) {
        reply.push(findComment(commentObj.reply[i], payload));
      }
      res.reply = reply;
      return res;
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    var payload = {
      id: uuid(),
      title: newComment,
      upvote: 0,
      upvote_status: null,
      reply: [],
    };
    var tempData = commentsData;

    var updatedData = [];
    for (let k = 0; k < tempData.length; k++) {
      updatedData.push(findComment(tempData[k], payload));
    }

    dispatch(updateComments({ comments: updatedData }, subredditName, postId));
  };

  // Appending Comments end

  // Upvotes and downvotes..... start...

  const [action, setAction] = React.useState(null);
  const [activateReply, setActivateReply] = React.useState(false);

  const like = () => {
    setAction("liked");
    if (upvote_status === null || upvote_status === false) {
      toggleUpvotes("add");
    }
  };

  const dislike = () => {
    setAction("disliked");
    if (upvote_status === null || upvote_status === true) {
      toggleUpvotes("sub");
    }
  };

  const findCommentUpvote = (commentObj, operation) => {
    if (commentObj.id === id) {
      let res2 = { ...commentObj };
      if (operation === "add") {
        res2.upvote += 1;
        res2.upvote_status = true;
      } else if (operation === "sub") {
        res2.upvote -= 1;
        res2.upvote_status = false;
      }
      return res2;
    } else {
      let res = { ...commentObj };
      let reply = [];
      for (let i = 0; i < commentObj.reply.length; i++) {
        reply.push(findCommentUpvote(commentObj.reply[i], operation));
      }
      res.reply = reply;
      return res;
    }
  };

  const toggleUpvotes = (operation) => {
    var tempData = commentsData;

    var updatedData = [];
    for (let k = 0; k < tempData.length; k++) {
      updatedData.push(findCommentUpvote(tempData[k], operation));
    }

    dispatch(updateComments({ comments: updatedData }, subredditName, postId));
  };

  // Upvotes and downvotes..... end...

  //reply Box...status..appear and disappear
  const handleReplyBox = () => {
    setActivateReply((state) => !state);
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {React.createElement(
          action === "liked" || upvote_status === true
            ? LikeFilled
            : LikeOutlined
        )}
        <span className="comment-action"> &nbsp;&nbsp;{upvote}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" || upvote_status === false
            ? DislikeFilled
            : DislikeOutlined
        )}
        <span className="comment-action"> </span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to" onClick={handleReplyBox}>
      Reply to
    </span>,
    <div>
      {activateReply && (
        <>
          <input
            placeholder="Enter Reply"
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            style={{ display: "inline-block" }}
          />
          <button
            onClick={handleSubmit}
            style={{
              display: "inline-block",
              color: "#fff",
              backgroundColor: "#1890ff",
              borderColor: "#1890ff",
              textShadow: "0 -1px 0 rgba(0, 0, 0, 0.12)",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </>
      )}
    </div>,
  ];

  // Arranging and designing the items end...

  return (
    <div
      style={{
        borderLeft: "1px solid grey",
        margin: "20px 0px",
        borderRadius: "15px",
      }}
      key={id}
    >
      <Comment
        actions={actions}
        author={<span>Uditanshu Kumar</span>}
        avatar={
          <Avatar
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            alt="Han Solo"
          />
        }
        content={<p>{title}</p>}
      >
        {children}
      </Comment>
    </div>
  );
};

export { Comments2 };
