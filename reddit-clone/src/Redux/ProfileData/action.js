import {
	GET_DATA_FAILURE,
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
	GET_REDDIT_USER_FAILURE,
	GET_REDDIT_USER_REQUEST,
	GET_REDDIT_USER_SUCCESS,
} from './actionTypes';

import axios from 'axios';

const profileDetailsRequest = () => ({
	type: GET_DATA_REQUEST,
});

const profileDetailsSuccess = (payload) => ({
	type: GET_DATA_SUCCESS,
	payload,
});

const profileDetailsFailure = (error) => ({
	type: GET_DATA_FAILURE,
	payload: error,
});

const getProfileDetails = () => (dispatch) => {
	dispatch(profileDetailsRequest());
	axios
		.get('https://fast-lake-64955.herokuapp.com/rightCard')
		.then((res) => {
			dispatch(profileDetailsSuccess(res.data));
		})
		.catch((err) => {
			console.log(err);
			profileDetailsFailure(err);
		});
};

const redditUserRequest = () => ({
	type: GET_REDDIT_USER_REQUEST,
});

const redditUserSuccess = (payload) => ({
	type: GET_REDDIT_USER_SUCCESS,
	payload,
});

const redditUserFailure = (error) => ({
	type: GET_REDDIT_USER_FAILURE,
	payload: error,
});

const getSubReddit = (name) => (dispatch) => {
	dispatch(redditUserRequest());
	return axios
		.get('http://localhost:3004/name', {
			params: {
				name,
			},
		})
		.then((res) => {
			dispatch(redditUserSuccess(res.data));
			return {
				res: res.data,
			};
		})
		.catch((err) => {
			console.log(err);
			dispatch(redditUserFailure(err));
		});
};

export {
	profileDetailsFailure,
	profileDetailsSuccess,
	profileDetailsRequest,
	getProfileDetails,
	redditUserSuccess,
	redditUserFailure,
	redditUserRequest,
	getSubReddit,
};
