import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { commentsReducer } from "./PostInDetail/reducer";
import { authReducer } from "./auth/reducer";
import { homeReducer } from "./home/reducer";

const mainReducer = combineReducers({
  commentsReducer: commentsReducer,
  home: homeReducer,
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(mainReducer, enhancer);
