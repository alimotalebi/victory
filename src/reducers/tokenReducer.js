import {SET_TOKEN_CONFIRM, SET_TOKEN_SENT} from '../constants/actionTypesConstant'
const initialState={tokenStatus:false}
export default (state= initialState,action)=>{
	switch (action.type){
		case SET_TOKEN_CONFIRM:
			return{
				...state,
				...action.payload,
				tokenActionType: SET_TOKEN_SENT
			}
		case SET_TOKEN_SENT:
			return{
				...state,
				tokenStatus:action.payload,
				tokenActionType: SET_TOKEN_SENT
			}
		default:
			return {
				...state
			}
	}
}