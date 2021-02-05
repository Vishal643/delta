import axios from 'axios';
function getAllCommunities() {
	return axios.get('https://fast-lake-64955.herokuapp.com/reddit');
}

export { getAllCommunities };
