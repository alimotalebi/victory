import React from "react";
import {useUserContext} from '../../contexts/UserContext';
import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {Checkbox, FormControl, InputLabel, LinearProgress, OutlinedInput, Tooltip} from "@mui/material";
import Link from "@mui/material/Link";
import faker from 'faker'
import { useHistory } from "react-router-dom";
import DoneAllIcon from '@mui/icons-material/DoneAll';

export default ({children}) => {
	let history = useHistory();
	const [randomMail,setRandomMail]=React.useState("");
	const [showRandomMail,setShowRandomMail]=React.useState(true);

	function makeRandomString(length) {
		let result           = '';
		let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let charactersLength = characters.length;
		for ( let i = 0; i < length; i++ ) {
			result += characters.charAt(Math.floor(Math.random() *
				charactersLength));
		}
		return result;
	}
	const makeRandomEmail=()=>{
		return makeRandomString(6)+"@"+makeRandomString(4)+"."+makeRandomString(3);
	}
	// React.useEffect(()=>{
	// 	setInterval(()=>{setRandomMail(faker.internet.email())},1000)
	// },[])

	const {singUpUser, errors} = useUserContext();
	const [openSignUpUserDialog, setOpenSignUpUserDialog] = React.useState(false);
	const [valueSignUpUserInput, setValueSignUpUserInput] = React.useState({userMatchPassword: null})
	const [valueUserMatchPass, setValueUserMatchPass] = React.useState(false);
	const [passwordVisibility, setPasswordVisibility] = React.useState(false);
	const [userAgree,setUserAgree]=React.useState(false);
	const [isLoading,setIsLoading]=React.useState(false);

	const handleClickOpenSignUpUserDialog = (event) => {
		event.stopPropagation();
		setOpenSignUpUserDialog(true);
	};
	const handleClickCloseSignUpUserDialog = () => {
		setValueUserMatchPass(false)
		setOpenSignUpUserDialog(false);
	};
	const handleSubmitSignUpUserDepartment = (event) => {
		valueUserMatchPass && singUpUser({...valueSignUpUserInput}, () => {
			handleClickCloseSignUpUserDialog()
			// history.replace("/token/verify")
		})
	};
	const handleInputChangeValueNewServiceInput = (event) => setValueSignUpUserInput({
		...valueSignUpUserInput,
		[event.target.name]: event.target.value
	});
	React.useEffect(() => {
		setValueUserMatchPass(valueSignUpUserInput.userMatchPassword === valueSignUpUserInput.userPlainPassword)
	}, [valueSignUpUserInput])
	return (
		<React.Fragment>
			<Box onClick={handleClickOpenSignUpUserDialog}>
				{children}
			</Box>
			<Dialog open={openSignUpUserDialog} onClose={handleClickCloseSignUpUserDialog} maxWidth={"xs"} fullWidth
			        scroll={'paper'}>
				<DialogContent>
					<Box fontSize={30} fontWeight="fontWeightBold" fontFamily={"Roboto"} textAlign={"center"}>
						Sign UP
					</Box>
					<Box pt={2} display={"flex"}>
						<Box>First Name</Box> <Box color={"red"}>*</Box>
					</Box>
					<Box>
						<TextField
							autoFocus
							label="Enter your first name"
							variant="outlined"
							fullWidth
							name={'userFirstName'}
							onChange={handleInputChangeValueNewServiceInput}
						/>
					</Box>

					<Box pt={2} display={"flex"}>
						<Box>Last Name</Box> <Box color={"red"}>*</Box>
					</Box>
					<Box>
						<TextField
							label="Enter your last name"
							variant="outlined"
							name={'userLastName'}
							fullWidth
							onChange={handleInputChangeValueNewServiceInput}
						/>
					</Box>

					<Box pt={2} display={"flex"}>
						<Box>Password</Box> <Box color={"red"}>*</Box>
					</Box>
					<Box>
						<FormControl fullWidth variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
							<Tooltip  title={"Password should be more than 8 characters"} placement={"top"} arrow>
								<OutlinedInput
									inputProps={passwordVisibility ? {type: "text"} : {type: "password"}}
									endAdornment={
										<>
											<IconButton onClick={(e) => {
												setPasswordVisibility(prevState => !prevState)
											}}>
												{passwordVisibility ? <Visibility/> : <VisibilityOffIcon/>}
											</IconButton>
										</>
									}
									name={'userPlainPassword'}
									label="password"
									variant="outlined"
									fullWidth
									onChange={handleInputChangeValueNewServiceInput}

								/>
							</Tooltip>
						</FormControl>
					</Box>
					<Box pt={2} display={"flex"}>
						<Box>Retype Password</Box> <Box color={"red"}>*</Box>
					</Box>
					<Box>
						<FormControl fullWidth variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">Enter your password again</InputLabel>
							<OutlinedInput
								inputProps={passwordVisibility ? {type: "text"} : {type: "password"}}
								endAdornment={
									<>
										<Tooltip title={ valueUserMatchPass ? "Passwords are matched!" : ""} color={"success"} placement={"top"} arrow>
											<DoneAllIcon
												style={valueUserMatchPass ? {color: "green" , cursor:"pointer"} : {color: "transparent"}}/>
										</Tooltip>
										<IconButton onClick={(e) => {
											setPasswordVisibility(prevState => !prevState)
										}}>
											{passwordVisibility ? <Visibility/> : <VisibilityOffIcon/>}
										</IconButton>
									</>
								}
								name={'userMatchPassword'}
								label="Enter your password again"
								variant="outlined"
								fullWidth
								onChange={handleInputChangeValueNewServiceInput}


							/>
						</FormControl>

					</Box>

					<Box pt={2} display={"flex"}>
						<Box>E-mail</Box> <Box color={"red"}>*</Box>
					</Box>
					<Box>
						<TextField
							label={ showRandomMail ? randomMail : "Enter your email"}
							variant="outlined"
							name={'userEmail'}
							fullWidth
							onChange={handleInputChangeValueNewServiceInput}
							inputProps={{type: "email" ,onFocus:(e)=>setShowRandomMail(false) ,onBlur:(e)=>setShowRandomMail(true)}}
						/>
					</Box>
					<Box
						pt={2}
						display={"flex"}
						alignItems={"center"}
						// justifyContent={"center"}
					>
						<Checkbox sx={{paddingLeft:0}} onChange={(e)=>setUserAgree(e.target.checked)}/>
						<p style={{marginBottom:0}}>
							{"I Agree with the "}
							{/*<u style={{cursor:"pointer" ,color:}}>*/}
							{/*	User Terms Of Service*/}
							{/*</u>*/}
							<Link href="#" color="primary">
								User Terms Of Service
							</Link>
						</p>
					</Box>
					<Box pt={2}>
						{isLoading ?
							<LinearProgress fullwidth/>
							:
							<Tooltip  title={userAgree ?"": "Please accept the User Terms Of Service"}>
								<span>
									<Button disabled={!userAgree} fullWidth variant="contained" onClick={handleSubmitSignUpUserDepartment}>Send</Button>
								</span>
							</Tooltip>
						}

					</Box>
				</DialogContent>
				<DialogActions>

				</DialogActions>
			</Dialog>
		</React.Fragment>
	)
}