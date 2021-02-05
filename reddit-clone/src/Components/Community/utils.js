import axios from 'axios';
function getAllCommunities() {
	return axios.get('https://reddit-mock-server.herokuapp.com/reddit');
}

function getNearYou() {}

function getSports() {}

function getGaming() {}
export { getAllCommunities, getNearYou, getSports, getGaming };
