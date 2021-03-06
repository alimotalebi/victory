import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers'

export default (initialStore) => createStore(rootReducer, initialStore, composeWithDevTools(applyMiddleware(thunk)), window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION({trace: true}))
