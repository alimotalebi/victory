import {connect} from 'react-redux';
import {
   writeDraft
} from '../actions/draftAction';

import DraftProvider from '../providers/DraftProvider'

export default connect(({errorReducer, draftReducer}) => ({
	error: errorReducer,
	draft: draftReducer
}), {
	writeDraft
})(DraftProvider);
