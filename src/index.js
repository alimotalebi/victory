import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import storeConfig from './configurations/storeConfig'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SET_USER_CREDENTIAL} from './constants/actionTypesConstant';
const store =storeConfig();
(localStorage.credential) && store.dispatch({
    type: SET_USER_CREDENTIAL,
    payload: {userCredential: localStorage.credential}
});
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

