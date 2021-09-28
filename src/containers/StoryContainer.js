import {connect} from 'react-redux';
import {
	writeStory,
	getStories,
} from '../actions/storyAction';

import StoryProvider from '../providers/StoryProvider'

export default connect(({errorReducer, storyReducer}) => ({
	error: errorReducer,
	story: storyReducer
}), {
	writeStory,
	getStories,
})(StoryProvider);
