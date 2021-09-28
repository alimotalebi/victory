import {
	SET_USER_SIGN_UP,
	SET_USER_SIGN_IN,
	SET_USER_CURRENT,
	END_USER_CREDENTIAL,
	SET_USER_CREDENTIAL,
	SET_USER_STORIES_GET
} from '../constants/actionTypesConstant'

const initialState = {current: {}}
export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_STORIES_GET:
			return {
				...state,
				current: {...state.current, ...action.payload},
				userActionType: SET_USER_STORIES_GET
			}
		case SET_USER_CURRENT:
			return {
				...state,
				current: {...state.current, ...action.payload},
				userActionType: SET_USER_CURRENT

			}
		case SET_USER_CREDENTIAL:
			return {
				...state,
				current: {...state.current, ...action.payload},
				userActionType: SET_USER_CREDENTIAL
			}
		case END_USER_CREDENTIAL:
			return {
				current: {},
				userActionType: END_USER_CREDENTIAL
			}
		case SET_USER_SIGN_IN:
			return {
				...state,
				current: {...action.payload},
				userActionType: SET_USER_SIGN_IN
			}
		case SET_USER_SIGN_UP:
			return {
				...state,
				current: {...action.payload},
				userActionType: SET_USER_SIGN_UP
			}
		default:
			return {
				...state
			}
	}
}