import React from "react";
import { Comments2 } from "./Comments2";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../Redux/PostInDetail/action";

const Comments1 = () => {
  const isLoading = useSelector((state) => state.commentsReducer.isLoading);
  const isError = useSelector((state) => state.commentsReducer.isError);
  const isSuccess = useSelector((state) => state.commentsReducer.isSuccess);
  const commentsData = useSelector(
    (state) => state.commentsReducer.data.comments
  );

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  const arrangeData = (data) => {
    if (data.length === 0) {
      return null;
    }
    let res = [];
    for (let i = 0; i < data.reply.length; i++) {
      res.push(arrangeData(data.reply[i]));
    }
    return [
      <Comments2 title={data.title} id={data.id}>
        {res}
      </Comments2>,
    ];
  };

  return (
    <div style={{ margin: "10px auto", width: "80vw" }}>
      {isLoading && <div>Loading Comments</div>}
      {isSuccess && commentsData.map((item) => arrangeData(item))}
      {isError && <div>Something Went wrong...</div>}
    </div>
  );
};

export { Comments1 };
