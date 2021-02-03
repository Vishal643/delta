import React from "react";
import "antd/dist/antd.css";
import { Comment, Avatar } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { updateComments } from "../../Redux/PostInDetail/action";

const Comments2 = ({ children, title, id }) => {
  const [newComment, setNewComment] = React.useState("");

  const commentsData = useSelector(
    (state) => state.commentsReducer.data.comments
  );

  const findComment = (commentObj, payload) => {
    if (commentObj.id === id) {
      console.log(commentObj.id);
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
      reply_count: 0,
      reply: [],
    };
    var tempData = commentsData;

    var updatedData = [];
    for (let k = 0; k < tempData.length; k++) {
      updatedData.push(findComment(tempData[k], payload));
    }

    dispatch(updateComments(updatedData));
  };

  return (
    <div style={{ borderLeft: "1px solid grey", margin: "20px 0px" }} key={id}>
      <Comment
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
      <div>
        <input
          placeholder="Enter Reply"
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export { Comments2 };
