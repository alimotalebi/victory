import axios from 'axios'
import {Deserializer} from "jsonapi-serializer";
import {
	SET_USER_SIGN_UP,
	SET_USER_SIGN_IN,
	SET_ERRORS_MESSAGE,
	END_USER_CREDENTIAL,
	SET_USER_CURRENT
} from '../constants/actionTypesConstant'
import API_CONSTANTS from '../constants/apiConstants'
export const logOutUser = () => dispatch => {
	localStorage.removeItem("credential");
	dispatch({type: END_USER_CREDENTIAL});
};
export const singUpUser = ({userEmail, userPlainPassword, userFirstName, userLastName}, onCallback) => dispatch => {
	axios({
		method: 'post',
		url: '/user/signup',
		data: {userEmail, userPlainPassword, userFirstName, userLastName},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(
		({data}) => {
			new Deserializer({keyForAttribute: "camelCase"}).deserialize(data, (error, [{userId,userCredential,userEmail}]) => {
				localStorage.setItem('credential', userCredential);
				dispatch({
					type: SET_USER_SIGN_UP,
					payload: {userId,userCredential,userEmail}
				});
				typeof onCallback === 'function' && onCallback()
			});
		}
	).catch(
		error => (error.response) ? ([500, 501, 502, 503, 504, 404].includes(error.response.status)) ? console.log(error.response.data) :
			dispatch({
				type: SET_ERRORS_MESSAGE,
				payload: error.response.data.errors
			}) : error.request ? console.log(error.request) : console.log("Error", error.message)
	)
}
export const singInUser = ({userEmail, userPlainPassword}, onCallback) => dispatch => {
	axios({
		method: 'post',
		url: '/user/signin',
		data: {userEmail, userPlainPassword},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(
		({data}) => {
			new Deserializer({keyForAttribute: "camelCase"}).deserialize(data, (error, [{userId,userCredential}]) => {
				localStorage.setItem('credential', userCredential);
				dispatch({
					type: SET_USER_SIGN_IN,
					payload: {userId,userCredential}
				});
				typeof onCallback === 'function' && onCallback()
			});
		}
	).catch(
		error => {
			(error.response) ? ([500, 501, 502, 503, 504, 404,431].includes(error.response.status)) ? console.log(error.response.data,error.response.statusText) :
				dispatch({
					type: SET_ERRORS_MESSAGE,
					payload: error.response.data.errors
				}) : error.request ? console.log(error.request) : console.log("Error", error.message)
		}
	)
}
export const getUser= ({}, onCallback) => dispatch => {
	axios({
		method: 'post',
		url: '/user/get',
		data: {},
		headers: {'credential': localStorage.credential},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(
		({data}) => {
			new Deserializer({keyForAttribute: "camelCase"}).deserialize(data, (error, [userDocument]) => {
				dispatch({
					type: SET_USER_CURRENT,
					payload: userDocument
				});
				typeof onCallback === 'function' && onCallback()
			});
		}
	).catch(
		error => {
			(error.response) ? ([500, 501, 502, 503, 504, 404,431].includes(error.response.status)) ? console.log(error.response.data,error.response.statusText) :
				dispatch({
					type: SET_ERRORS_MESSAGE,
					payload: error.response.data.errors
				}) : error.request ? console.log(error.request) : console.log("Error", error.message)
		}
	)
}
export const getStoriesUser=({},onSuccess,onError)=> dispatch =>{
	axios({
		method: 'post',
		url: '/user/stories/get',
		data: {

		},
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
		({data}) => onSuccess && onSuccess(data)
	).catch(
		error => {
			(error.response) ? ([500, 501, 502, 503, 504, 404,431].includes(error.response.status)) ? console.log(error.response.data,error.response.statusText) :
				dispatch({
					type: SET_ERRORS_MESSAGE,
					payload: error.response.data.data
				}) : error.request ? console.log("error.request") : console.log("Error", error.message)
			onError && onError(error);
		}
	)
}
export const forgotPasswordUser=({userEmail},onSuccess,onError)=> dispatch =>{
	axios({
		method: 'post',
		url: '/user/password/forgot',
		data: {
			userEmail
		},
		headers:{
			"Access-Control-Allow-Headers":"*",
			"Strict-Origin-Cross-Origin":"*"
		},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(
		({data}) => onSuccess && onSuccess(data)
	).catch(
		error => {
			(error.response) ? ([500, 501, 502, 503, 504, 404,431].includes(error.response.status)) ? console.log(error.response.data,error.response.statusText) :
				dispatch({
					type: SET_ERRORS_MESSAGE,
					payload: error.response.data.data
				}) : error.request ? console.log("error.request") : console.log("Error", error.message)
			onError && onError(error);
		}
	)
}
export const resetPasswordUser=({userToken , userPlainPassword},onSuccess , onError)=> dispatch =>{
	axios({
		method: 'post',
		url: '/user/password/reset',
		data: {
			userPlainPassword
		},
		params:{
			token:userToken
		},
		headers:{
			"Access-Control-Allow-Headers":"*",
			"Strict-Origin-Cross-Origin":"*"
		},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(
		({data}) => onSuccess && onSuccess(data)
	).catch(

		error => {
			console.log(error.response.data);
			(error.response) ? ([500, 501, 502, 503, 504, 404,431].includes(error.response.status)) ? console.log(error.response.data,error.response.statusText) :
				dispatch({
					type: SET_ERRORS_MESSAGE,
					payload: error.response.data.data
				}) : error.request ? console.log("error.request") : console.log("Error", error.message)
			onError && onError(error);
		}
	)

}
export const changePasswordUser=({userOldPassword , userNewPassword},onSuccess,onError)=> dispatch =>{
	axios({
		method: 'post',
		url: '/user/password/forgot',
		data: {
			userOldPassword,
			userNewPassword
		},
		headers:{
			"Access-Control-Allow-Headers":"*",
			"Strict-Origin-Cross-Origin":"*"
		},
		proxy: {
			host: API_CONSTANTS.HOSTNAME,
			port: API_CONSTANTS.PORT
		},
	}).then(
		({data}) => onSuccess && onSuccess(data)
	).catch(
		error => {
			(error.response) ? ([500, 501, 502, 503, 504, 404,431].includes(error.response.status)) ? console.log(error.response.data,error.response.statusText) :
				dispatch({
					type: SET_ERRORS_MESSAGE,
					payload: error.response.data.data
				}) : error.request ? console.log("error.request") : console.log("Error", error.message)
			onError && onError(error);
		}
	)
}
export const verifyEmailUser=({userToken},onSuccess,onError)=> dispatch =>{
	axios({
		method: 'post',
		url: '/user/email/verify',
		data: {

		},
		params:{
			token:userToken
		},
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
		({data}) => onSuccess && onSuccess(data)
	).catch(
		error => {
			(error.response) ? ([500, 501, 502, 503, 504, 404,431].includes(error.response.status)) ? console.log(error.response.data,error.response.statusText) :
				dispatch({
					type: SET_ERRORS_MESSAGE,
					payload: error.response.data.data
				}) : error.request ? console.log("error.request") : console.log("Error", error.message)
			onError && onError(error);
		}
	)
}