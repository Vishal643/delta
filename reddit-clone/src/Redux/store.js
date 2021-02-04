import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer } from './home/reducer';
import { getRedditReducer } from '../Redux/ProfileData/reducer';

const rootReducer = combineReducers({
	home: homeReducer,
	reddit: getRedditReducer,
});
let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export { store };
