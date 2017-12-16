import axios from 'axios';

export default function(){
	const axiosPromise = axios.get(`${window.apiHost}/get`)

	return{
		type: "ADD_ACTION",
		payload: axiosPromise
	}
}