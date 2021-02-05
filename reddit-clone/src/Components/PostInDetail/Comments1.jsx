import React from "react";
import { Comments2 } from "./Comments2";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../Redux/PostInDetail/action";
import { v4 as uuid } from "uuid";
import { updateComments } from "../../Redux/PostInDetail/action";
import { Posts } from "./Post/Posts";
import { useHistory, useParams } from "react-router-dom";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import CancelIcon from "@material-ui/icons/Cancel";

const Comments1 = () => {
  const { subredditName, postId } = useParams();

  // function to fetch comments on load
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getComments(subredditName, postId));
  }, [dispatch]);

  const isLoading = useSelector((state) => state.commentsReducer.isLoading);
  const isError = useSelector((state) => state.commentsReducer.isError);
  const isSuccess = useSelector((state) => state.commentsReducer.isSuccess);
  const commentsData = useSelector(
    (state) => state.commentsReducer.data.comments
  );
  const upvotes = useSelector((state) => state.commentsReducer.data.upvotes);
  const upvote_status = useSelector(
    (state) => state.commentsReducer.data.upvote_status
  );

  const { image_src, subreddit, username, title, description } = useSelector(
    (state) => state.commentsReducer.data
  );
  const comment_count = useSelector(
    (state) => state.commentsReducer.data.comment_count
  );

  // function for retrieve the recursed ladder of comments2 component.
  const arrangeData = (data) => {
    if (data.length === 0) {
      return null;
    }
    let res = [];
    for (let i = 0; i < data.reply.length; i++) {
      res.push(arrangeData(data.reply[i]));
    }
    return [
      <Comments2
        title={data.title}
        id={data.id}
        upvote={data.upvote}
        upvote_status={data.upvote_status}
        key={data.id}
        subredditName={subredditName}
        postId={postId}
      >
        {res}
      </Comments2>,
    ];
  };

  //Adding a comment to the main post

  const [commentTitle, setCommentTitle] = React.useState("");

  const handleAddMainComment = (e) => {
    e.preventDefault();
    var newComment = {
      id: uuid(),
      title: commentTitle,
      upvote: 0,
      upvote_status: null,
      reply: [],
    };

    var updatedData = [...commentsData, newComment];

    dispatch(
      updateComments(
        { comments: updatedData, comment_count: comment_count + 1 },
        subredditName,
        postId
      )
    );
  };

  // handling close button

  const history = useHistory();

  const handleCloseButton = () => {
    history.push("/");
  };

  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: "rgb(46,47,48)",
        minHeight: "96vh",
        marginTop: "25px",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          width: "70vw",
          margin: "auto",
          backgroundColor: "rgb(218,224,230)",
          minHeight: "96vh",
        }}
      >
        <div
          style={{
            height: "50px",
            // border: "1px solid black",
            backgroundColor: "#030303",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "10%",
              }}
            >
              <span style={{ color: "grey" }}>|</span>
              <ArrowUpwardIcon style={{ color: "grey" }} />
              <span style={{ color: "grey" }}>{upvotes}</span>
              <ArrowDownwardIcon style={{ color: "grey" }} />
              <span style={{ color: "grey" }}>|</span>
            </div>
            <div style={{ overflow: "hidden", color: "gray", width: "60%" }}>
              {title}
            </div>
          </div>
          <div
            onClick={handleCloseButton}
            style={{
              color: "grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <span>Close </span>&nbsp;
            <CancelIcon />
          </div>
        </div>
        <div
          style={{
            margin: "10px auto",
            width: "45vw",
            minWidth: "800px",
            backgroundColor: "white",
            minHeight: "96vh",
          }}
        >
          <div
            style={{
              width: "100%",
              margin: "20px auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {isLoading && (
              <div>
                <img
                  src="https://media4.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif?cid=ecf05e47uy09nkjz7ji2lbq2g18hakzxa64b2to8t9qfvlh8&rid=giphy.gif"
                  alt="loading"
                />
              </div>
            )}
            {isSuccess && (
              <div>
                <Posts
                  upvotes={upvotes}
                  subreddit={subreddit}
                  username={username}
                  title={title}
                  image_src={image_src}
                  description={description}
                  comment_count={comment_count}
                  upvote_status={upvote_status}
                  subredditName={subredditName}
                  postId={postId}
                />
                <div>
                  <div>
                    <form
                      onSubmit={handleAddMainComment}
                      style={{ display: "flex" }}
                    >
                      <input
                        placeholder="Add a Comment"
                        value={commentTitle}
                        onChange={(e) => setCommentTitle(e.target.value)}
                      />
                      <input type="submit" />
                    </form>
                  </div>
                </div>
                {commentsData.map((item) => arrangeData(item))}
              </div>
            )}
            {isError && <div>Something Went wrong...</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Comments1 };
