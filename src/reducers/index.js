import {combineReducers} from 'redux'
import userReducer from "./userReducer";
import tokenReducer from "./tokenReducer";
import errorReducer from "./errorReducer";
export default combineReducers({userReducer,errorReducer,tokenReducer})