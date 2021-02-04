import React from "react";
import { Comments2 } from "./Comments2";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../Redux/PostInDetail/action";
import { v4 as uuid } from "uuid";
import { updateComments } from "../../Redux/PostInDetail/action";
import { Posts } from "./Post/Posts";
import { useParams } from "react-router-dom";

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

  return (
    <div style={{ margin: "10px auto", width: "45vw", minWidth: "500px" }}>
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
  );
};

export { Comments1 };
