import {
	GET_DATA_FAILURE,
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
	// GET_REDDIT_USER_FAILURE,
	// GET_REDDIT_USER_REQUEST,
	// GET_REDDIT_USER_SUCCESS,
} from './actionTypes';

const initState = {
	isLoading: false,
	isError: false,
	data: [],
	subRedditTitle: '',
	isProfileDataFetched: false,
	isRedditFound: false,
};

const getRedditReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case GET_DATA_REQUEST: {
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		}
		case GET_DATA_SUCCESS: {
			return {
				...state,
				isLoading: false,
				data: [payload],
				isProfileDataFetched: true,
			};
		}
		case GET_DATA_FAILURE: {
			return {
				...state,
				isLoading: false,
				isError: true,
				isProfileDataFetched: false,
			};
		}

		// case GET_REDDIT_USER_REQUEST: {
		// 	return {
		// 		...state,
		// 		isLoading: true,
		// 		isError: false,
		// 	};
		// }
		// case GET_REDDIT_USER_SUCCESS: {
		// 	return {
		// 		...state,
		// 		subRedditTitle: payload,
		// 		isLoading: false,
		// 		isRedditFound: true,
		// 	};
		// }
		// case GET_REDDIT_USER_FAILURE: {
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		isError: true,
		// 		isRedditFound: false,
		// 	};
		// }
		default: {
			return state;
		}
	}
};

export { getRedditReducer };
