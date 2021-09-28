import React from "react";

import {useUserContext} from "../../contexts/UserContext";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import HeaderComponenet from "../Common/Header";
import LanguageComponent from "../Language";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";
import {ClickAwayListener, TextField} from "@mui/material";
import propTypes from "prop-types"

import Button from "@mui/material/Button";
import LoadingButton from '@mui/lab/LoadingButton';
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {useTokenContext} from "../../contexts/TokenContext";
import {useHistory, useLocation} from "react-router-dom";

export default (props)=>{
	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	let query = useQuery();
	const history=useHistory();
	const { forgotPasswordUser} = useUserContext();
	const {sendToken} = useTokenContext();
	const [valueUserEmail , setValueUserEmail]=React.useState("")
	const [state,setState]= React.useState("forgot") ///  forgot , emailSent , emailFailed , checking?
	const [loading , setLoading]=React.useState(false);


	React.useEffect(()=>{

	},[])
	const handleForgotEmailSubmit=(e)=>{
		setLoading(true);
		// setTimeout(()=>{setState("emailSent") },2000)
		// forgotPasswordUser({userEmail:forgottenPassEmail},()=>{setLoading(false);setState("emailSent")},()=>{setLoading(false);setState("emailFailed")})
		sendToken({tokenUserEmail:valueUserEmail ,tokenType:"",tokenService:"ELECTRONIC_MAIL" ,tokenAgent:"PASSWORD"},()=>{console.log("sagggggggggggg");setState("emailSent")})
	}
	return(
		<>
			<HeaderComponenet
				secondaryMenu={<>
					<LanguageComponent/>
				</>}
			/>
			<Container fluid sx={{display:"flex" , alignItems:"center" , justifyContent:"center" , flexDirection:"column",height:"80vh"}}>
				{state==="forgot"?
					<>
						<Box marginBottom={"20px"}>
							<LockOutlinedIcon sx={{fontSize:"150px"}}/>
						</Box>
						<Box component={"h4"} marginBottom={"20px"} >Forgot your password?</Box>
						<Box textAlign={"center"} component={"p"} color="#888888" width={"50%"} marginBottom="30px">Don't worry! Just fill in your email and we'll send you a link to reset your password.</Box>

						<Box marginBottom={"20px"} width={"400px"}>
							<TextField

								type={"email"}
								InputProps={{style:{borderRadius:"25px"}}}
								fullWidth  variant="outlined"
								label={"Enter your email address"}
								onChange={(e)=>{setValueUserEmail(e.target.value)}}/>
						</Box>
						<Box marginBottom={"20px"} width={"300px"}>
							{
								loading ?
									<LoadingButton sx={{borderRadius:"25px"}} fullWidth loading variant="outlined">next</LoadingButton>
									:
									<Button sx={{borderRadius:"25px"}} fullWidth variant={"contained"}  onClick={(e)=>{handleForgotEmailSubmit(e)}}>Next</Button>
							}
						</Box>
						<Box marginBottom="60px">
							<Link href="/">Back to sign in</Link>
						</Box>

						<Box fontSize={12} marginBottom={"20px"}>
							© 2021 VictoryPlatform, LLC. All rights reserved.
						</Box>
						<Box sx={{'& > :not(style)': {mr: 1},}}>
							<Link href="#" color="inherit" underline="none">
								<InstagramIcon color="disabled"/>
							</Link>
							<Link href="#" color="inherit" underline="none">
								<TwitterIcon color="disabled"/>
							</Link>
							<Link href="#" color="inherit" underline="none">
								<FacebookIcon color="disabled"/>
							</Link>
							<Link href="#" color="inherit" underline="none">
								<RedditIcon color="disabled"/>
							</Link>
						</Box>
					</>
					:state==="emailSent"?
					<>
						<Box marginBottom={"20px"}>
							<MailOutlineOutlinedIcon sx={{fontSize:"150px"}}/>
						</Box>
						<Box component={"h4"} marginBottom={"20px"} >Verify your email address</Box>
						<Box textAlign={"center"} component={"p"} color="#888888" width={"50%"} marginBottom="20px">we've sent an email to [foo@bar.com] to reset your password. The link in the email will expire in 24 hours.</Box>
						<Box textAlign={"center"} component={"p"} fontSize="1.1rem" color="#888888" width={"50%"} marginBottom="15px">Didn't receive the email?</Box>
						<Box textAlign={"center"} component={"p"} fontSize="0.7rem" color="#888888" width={"50%"}>please check your spam folder.</Box>

						<Box display="flex" alignItems={"center"} justifyContent={"center"} flexDirection="row">
							<Box whiteSpace="nowrap" marginBottom={0}  textAlign={"center"} component={"p"} fontSize="0.7rem" color="#888888" >Wrong email? &nbsp; </Box>
							<Link href={"/user/password/forgot"} fontSize="0.7rem" sx={{cursor:"pointer"}}>Enter another one</Link>
						</Box>
						<Box display="flex" alignItems={"center"} justifyContent={"center"} flexDirection="row">
							<Box whiteSpace="nowrap" marginBottom={0}  textAlign={"center"} component={"p"} fontSize="0.7rem" color="#888888" >Add info@victory.com to your contacts and &nbsp;</Box>
							<Link fontSize="0.7rem" sx={{cursor:"pointer"}}>resend the email.</Link>
						</Box>
						<Box display="flex" alignItems={"center"} justifyContent={"center"} flexDirection="row">
							<Box whiteSpace="nowrap" marginBottom={0}  textAlign={"center"} component={"p"} fontSize="0.7rem" color="#888888" >still having trouble? Contact at &nbsp; </Box>
							<Link fontSize="0.7rem" sx={{cursor:"pointer"}}>info@victory.com</Link>
						</Box>

					</>
					:state==="emailFailed" ?
					<>
						<Box marginBottom={"20px"}>
							<SentimentDissatisfiedOutlinedIcon sx={{fontSize:"150px"}}/>
						</Box>
						<Box component={"h4"} marginBottom={"20px"} >This username does not exist in our database</Box>
						{/*<Box textAlign={"center"} component={"p"} fontSize="0.7rem" color="#888888" width={"50%"} marginBottom={"20px"}></Box>*/}
						<Link href="/user/password/forgot" fontSize="0.7rem" sx={{cursor:"pointer"}} onClick={(e)=>{setState("forgot")}}>Enter another email</Link>
					</>
					:null
				}

			</Container>
		</>
	)
}
