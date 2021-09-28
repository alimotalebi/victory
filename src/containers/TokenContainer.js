import {connect} from 'react-redux';
import {
    verifyToken,
    sendToken,
} from '../actions/tokenAction';

import TokenProvider from '../providers/TokenProvider'
export default connect(({errorReducer, tokenReducer}) => ({
    error: errorReducer,
    token: tokenReducer
}), {
    verifyToken,
    sendToken,
})(TokenProvider);
