import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionTypes";
import axios from "axios";

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};
const signRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};
const signSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};
const signFailure = () => {
  return {
    type: SIGNUP_FAILURE,
  };
};

const signData = ({ id, username, password, email, name }) => (dispatch) => {
  dispatch(signRequest());
  axios
    .post("https://reddit-mock-server.herokuapp.com/user", {
      id,
      username,
      password,
      email,
      name,
      posts: [],
      community: [],
      save_post: [],
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

const loginData = ({ username, password }) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .get("https://reddit-mock-server.herokuapp.com/user")
    .then((res) => {
      //   console.log(res);
      let arr = res.data;
      let flag = false;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].username == username && arr[i].password == password) {
          dispatch(loginSuccess(arr[i]));
          flag = true;
        }
      }
      if (!flag) {
        dispatch(loginFailure());
      }
    })
    .catch((err) => dispatch(signFailure()));
};
export { signData, loginData };
