import axios from 'axios'
import {Deserializer} from "jsonapi-serializer";
import {SET_ERRORS_MESSAGE, SET_DRAFT_WRITE} from '../constants/actionTypesConstant'
import API_CONSTANTS from '../constants/apiConstants'
export const writeDraft =  ({data},onCallback)=> dispatch => {
	axios({
		method: 'post',
		url: '/draft/write',
		data: {credential:localStorage.credential,...data},
		headers:{
			'credential': localStorage.credential,
			"Access-Control-Allow-Headers":"*",
			"Strict-Origin-Cross-Origin":"*"
		},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(
		({data}) => {
			onCallback && onCallback()
			// new Deserializer({keyForAttribute: "camelCase"}).deserialize(data, (error, []) => {
			// 	dispatch({
			// 		type: SET_DRAFT_WRITE,
			// 		payload: {}
			// 	});
			// });
		}
	).catch(
		error => (error.response) ? ([500, 501, 502, 503, 504, 404].includes(error.response.status)) ? console.log(error.response.data) :
			dispatch({
				type: SET_ERRORS_MESSAGE,
				payload: error.response.data.errors
			}) : error.request ? console.log(error.request) : console.log("Error", error.message)
	)
}
