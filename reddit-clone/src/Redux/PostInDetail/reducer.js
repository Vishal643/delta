import {
  GET_COMMENTS_FAIL,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: [],
};

export const commentsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_COMMENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };

    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: payload,
      };

    case GET_COMMENTS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    default:
      return state;
  }
};
