import React from 'react';
import  { Redirect } from 'react-router-dom'
import {useUserContext} from "../../contexts/UserContext";

export default ()=>{
    const {user: {current: {userCredential}},logOutUser} = useUserContext();
    if (userCredential) {logOutUser({})}
    if (!userCredential) return <Redirect to='/'  />;
    return <React.Fragment></React.Fragment>
}
