import {connect} from 'react-redux';
import {
	logOutUser,
	singUpUser,
	singInUser,
	getUser,
	forgotPasswordUser,
	resetPasswordUser,
	changePasswordUser,
	getStoriesUser,
	verifyEmailUser
} from '../actions/userAction';

import UserProvider from '../providers/UserProvider'

export default connect(({errorReducer, userReducer}) => ({
	error: errorReducer,
	user: userReducer
}), {
	logOutUser,
	singUpUser,
	singInUser,
	getUser,
	forgotPasswordUser,
	resetPasswordUser,
	changePasswordUser,
	getStoriesUser,
	verifyEmailUser
})(UserProvider);
