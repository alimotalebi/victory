import React from "react";
import {useUserContext} from "../../contexts/UserContext";
import {withRouter} from "react-router-dom";


export default withRouter((props)=>{
	const {getUser,user:{current:{userEmailVerify}={}}} = useUserContext();
	React.useEffect(() => {
		getUser({})
	}, [getUser])
	React.useEffect(() => {
		!userEmailVerify  && props.history.push("/token/email/verify");
	}, [userEmailVerify])
	return(
		<>
		</>
	)
})