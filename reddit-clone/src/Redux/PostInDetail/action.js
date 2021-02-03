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

export const getComments = () => (dispatch) => {
  dispatch(commentsRequest());
  axios
    .get("https://reddit-mock-server.herokuapp.com/sports/1")
    .then((res) => dispatch(commentsSuccess(res.data)))
    .catch((err) => dispatch(commentsFail()));
};

export const updateComments = (updatedData) => (dispatch) => {
  console.log(updatedData);

  axios
    .patch("https://reddit-mock-server.herokuapp.com/sports/1", {
      comments: updatedData,
    })
    .then(() => dispatch(getComments()));
};
