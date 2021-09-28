import {
	SET_DRAFT_WRITE
} from '../constants/actionTypesConstant'

const initialState = {current: {}}
export default (state = initialState, action) => {
	switch (action.type) {
		case SET_DRAFT_WRITE:
			return {
				...state,
				current: {...state.current, ...action.payload},
				userActionType: SET_DRAFT_WRITE
			}
		default:
			return {
				...state
			}
	}
}