import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import SignUpUserComponent from "./SignUpUser";
import {useUserContext} from "../../contexts/UserContext";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default ()=>{
	const {singInUser } = useUserContext();
	const [valueSignInUserInput, setValueSignInUserInput] = React.useState({userEmail:"info@ga.com",userPlanPassword:"123456789"})
	const [valuePasswordVisibility, setValuePasswordVisibility] = React.useState(false);
	const handleInputChangeValueSignInUserInput = (event) => setValueSignInUserInput({
		...valueSignInUserInput,
		[event.target.name]: event.target.value
	});
	const handleSubmitSignInUser = (event) => {
		event.preventDefault()
		singInUser({...valueSignInUserInput})
	};
	return(
		<>
			<Box fontSize={30} fontWeight="fontWeightBold" fontFamily={"Roboto"}>
				Sign in to your account
			</Box>
			<Box py={2}>
				E-MAIL*
			</Box>
			<Box>
				<TextField
					label="Enter your email address"
					variant="outlined"
					fullWidth
					value={"info@ga.com"}
					name={"userEmail"}
					onChange={handleInputChangeValueSignInUserInput}
				/>
			</Box>
			<Box py={2}>
				PASSWORD*
			</Box>
			<Box>
				<TextField
					label="Enter your password"
					variant="outlined"
					type={valuePasswordVisibility ? "text" :"password"}
					InputProps={{
						endAdornment: valuePasswordVisibility ? <InputAdornment position="end"><IconButton onClick={(e)=>{setValuePasswordVisibility(false)}}><Visibility/></IconButton></InputAdornment> : <InputAdornment position="end"><IconButton onClick={(e)=>{setValuePasswordVisibility(true)}}><VisibilityOffIcon/></IconButton></InputAdornment>
					}}
					fullWidth
					value={"123456789"}
					name={"userPlanPassword"}
					onChange={handleInputChangeValueSignInUserInput}
				/>
			</Box>
			<Box display={"flex"} alignItems={"center"}>
				<Box flexGrow={1}>
					<FormControlLabel control={<Checkbox defaultChecked/>}
					                  label="keep me signed in"/>
				</Box>
				<Box display={"inline-flex"}>
					<Link href="/user/password/forgot" color="primary" underline="none">
						{'Forget Password?'}
					</Link>
				</Box>
			</Box>
			<Box py={2}>
				<Button fullWidth variant="contained" onClick={handleSubmitSignInUser}>Sign IN</Button>
			</Box>
			<Box>
				{`Don't Have an Account? `}
				<Box display={"inline-flex"}>
					<Link href="#" color="primary" underline="none">
						<SignUpUserComponent>
							{'Sign UP'}
						</SignUpUserComponent>
					</Link>
				</Box>
			</Box>
		</>
	)
}