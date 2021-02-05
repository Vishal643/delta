import axios from "axios";
import {
  GET_COMMENTS_FAIL,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
} from "./actionTypes";

const commentsRequest = () => {
  return {
    type: GET_COMMENTS_REQUEST,
  };
};

const commentsSuccess = (payload) => {
  return {
    type: GET_COMMENTS_SUCCESS,
    payload,
  };
};

const commentsFail = () => {
  return {
    type: GET_COMMENTS_FAIL,
  };
};

export const getComments = (subredditName, postId) => (dispatch) => {
  // dispatch(commentsRequest());
  axios
    .get(`https://reddit-mock-server.herokuapp.com/${subredditName}/${postId}`)
    .then((res) => dispatch(commentsSuccess(res.data)))
    .catch((err) => dispatch(commentsFail()));
};

export const updateComments = (updatedData, subredditName, postId) => (
  dispatch
) => {
  // dispatch(commentsRequest());
  axios
    .patch(
      `https://reddit-mock-server.herokuapp.com/${subredditName}/${postId}`,
      updatedData
    )
    .then(() => dispatch(getComments(subredditName, postId)));
};
