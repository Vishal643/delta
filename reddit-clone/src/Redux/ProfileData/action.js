import {
	GET_DATA_FAILURE,
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
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
		.get('http://localhost:3004/sidebar_card_data')
		.then((res) => {
			dispatch(profileDetailsSuccess(res.data));
			// console.log(res.data);
			// return {
			// 	res: res.data,
			// };
		})
		.catch((err) => {
			console.log(err);
			profileDetailsFailure(err);
		});
};

export {
	profileDetailsFailure,
	profileDetailsSuccess,
	profileDetailsRequest,
	getProfileDetails,
};
