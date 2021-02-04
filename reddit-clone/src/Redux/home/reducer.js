import { HOME_FAILURE, HOME_REQUEST, HOME_SUCCESS } from "./actionTypes";

const initState = {
  isLoading: false,
  data: [],
  isError: false,
};

const homeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case HOME_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case HOME_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
        isError: false,
      };
    }
    case HOME_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    default:
      return state;
  }
};

export { homeReducer };
