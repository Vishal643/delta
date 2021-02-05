import { HOME_FAILURE, HOME_REQUEST, HOME_SUCCESS } from "./actionTypes";
import axios from "axios";

const getHome = () => {
  return {
    type: HOME_REQUEST,
  };
};

const homeSuccess = (payload) => {
  return {
    type: HOME_SUCCESS,
    payload,
  };
};
const homeFailure = () => {
  return {
    type: HOME_FAILURE,
  };
};

const getPost = () => (dispatch) => {
  dispatch(getHome());
  axios
    .get("https://reddit-mock-server.herokuapp.com/hot")
    .then((res) => {
      let arr = res.data;
      let arr_2 = [];
      for (var i = 0; i < arr.length; i++) {
        const { post_id, subreddit } = arr[i];
        arr_2.push(
          axios.get(
            `https://reddit-mock-server.herokuapp.com/${subreddit}/${post_id}`
          )
        );
      }
      Promise.all(arr_2)
        .then((res) => {
          let arr = [];
          for (var i = 0; i < res.length; i++) {
            arr.push(res[i].data);
          }
          dispatch(homeSuccess(arr));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
      dispatch(homeFailure());
    });
};

const upvotePost = ({ subreddit, id, upvotes }) => (dispatch) => {
  axios
    .get(`https://reddit-mock-server.herokuapp.com/${subreddit}/${id}`)
    .then((res) => {
      if (res.data.upvote_status === null || res.data.upvote_status === false) {
        axios
          .patch(
            `https://reddit-mock-server.herokuapp.com/${subreddit}/${id}`,
            {
              upvotes: upvotes,
              upvote_status: true,
            }
          )
          .then((res) => {
            dispatch(getPost());
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};
const downvotePost = ({ subreddit, id, upvotes }) => (dispatch) => {
  axios
    .get(`https://reddit-mock-server.herokuapp.com/${subreddit}/${id}`)
    .then((res) => {
      if (res.data.upvote_status === null || res.data.upvote_status === true) {
        axios
          .patch(
            `https://reddit-mock-server.herokuapp.com/${subreddit}/${id}`,
            {
              upvotes: upvotes,
              upvote_status: false,
            }
          )
          .then((res) => {
            dispatch(getPost());
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};

export { getPost, upvotePost, downvotePost };
