import {
	GET_DATA_FAILURE,
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
} from './actionTypes';

const initState = {
	isLoading: false,
	isError: false,
	data: [],
	isProfileDataFetched: false,
};

const reducer = (state = initState, { type, payload }) => {
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
				data: [...state.data, payload],
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
		default: {
			return state;
		}
	}
};

export { reducer };
