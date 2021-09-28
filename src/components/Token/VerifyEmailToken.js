import React, {useEffect} from "react";
import Container from "@mui/material/Container";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import HeaderComponent from "../Common/Header";
import LanguageComponent from "../Language";

import {
    useHistory,
    useLocation
} from "react-router-dom";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";
import MenuUserComponent from "../User/MenuUser";
import Fab from "@mui/material/Fab";
import PersonIcon from "@mui/icons-material/Person";
import {useTokenContext} from "../../contexts/TokenContext";
import {useUserContext} from "../../contexts/UserContext";
import {CircularProgress} from "@mui/material";
export default function(){


const history=useHistory();
    const {user:{current:{userEmail}={}} ,verifyEmailUser} = useUserContext()
    const {verifyToken,sendToken , token:{tokenStatus}}=useTokenContext()
    const [isLoading,setIsLoading] = React.useState(false);
    console.log("userEmail:"+userEmail);
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const token=query.get("token");
    const [validateState,setValidateState]=React.useState(token ? "checkToken" : "checkEmail");// checkEmail checkToken  valid  notValid
    const resendToken=()=>{
        setIsLoading(true)
        sendToken({tokenUserEmail:userEmail,tokenType:"",tokenService:"ELECTRONIC_MAIL",tokenAgent:"EMAIL"} , ()=>{setValidateState("checkToken");setIsLoading(false)})

    }

    useEffect(()=>{
        if(validateState==="checkToken"){
            verifyEmailUser({userToken:token} , ()=>{setValidateState("valid")}, (e)=>{setValidateState("notValid")})
        }
        else if(validateState==="checkEmail" && !tokenStatus){
            // console.log("alksjdlakjsdlaksjdlaskjdalskdjalskdjalsd");
            sendToken({tokenUserEmail:userEmail,tokenType:"",tokenService:"ELECTRONIC_MAIL",tokenAgent:"EMAIL"} , ()=>{setValidateState("checkToken")})
        }
    },[]);

    return(
        <>
            <HeaderComponent
                secondaryMenu={<>
                    <LanguageComponent/>
                    <MenuUserComponent/>
                </>}
            />
            <Container  sx={{display:"flex" , alignItems:"center" , justifyContent:"center" , flexDirection:"column",height:"80vh"}}>
                {
                    validateState ==="checkEmail" || validateState==="checkToken"?
                        <>
                            <Box marginBottom={"20px"}>
                                <MailOutlineOutlinedIcon sx={{fontSize:"150px"}}/>
                            </Box>
                            <Box component={"h4"} marginBottom={"20px"} >Verify your email address</Box>
                            <Box textAlign={"center"} component={"p"} color="#888888" width={"50%"} marginBottom="20px">we've sent an email to [foo@bar.com] to verify your email address and activate your account. The link in the email will expire in 24 hours.</Box>
                            <Box textAlign={"center"} component={"p"} fontSize="1.1rem" color="#888888" width={"50%"} marginBottom="15px">Didn't receive the email?</Box>
                            <Box textAlign={"center"} component={"p"} fontSize="0.7rem" color="#888888" width={"50%"}>please check your spam folder.</Box>

                            <Box display="flex" alignItems={"center"} justifyContent={"center"} flexDirection="row">
                                <Box whiteSpace="nowrap" marginBottom={0}  textAlign={"center"} component={"p"} fontSize="0.7rem" color="#888888" >Add info@victory.com to your contacts and &nbsp;</Box>
                                <Link fontSize="0.7rem" sx={{cursor:"pointer"}} onClick={()=>{resendToken()}}>resend the email.</Link>
                            </Box>
                            <Box display="flex" alignItems={"center"} justifyContent={"center"} flexDirection="row" marginBottom={"20px"}>
                                <Box whiteSpace="nowrap" marginBottom={0}  textAlign={"center"} component={"p"} fontSize="0.7rem" color="#888888" >still having trouble? Contact at &nbsp; </Box>
                                <Link fontSize="0.7rem" sx={{cursor:"pointer"}}>info@victory.com</Link>
                            </Box>
                            {isLoading?
                                <CircularProgress color="primary" />
                                :null
                            }
                        </>
                        :
                        validateState==="valid"?
                        <>
                            <Box marginBottom={"20px"}>
                                <MarkEmailReadOutlinedIcon color="primary" sx={{fontSize:"70px" }}/>
                            </Box>
                            <Box display="flex" justifyContent={"center"} flexDirection="row">
                                <Box>THanks</Box>
                                <Box color="#888888">Your email address has been verified. Your account Is now active.</Box>
                            </Box>
                            <Box marginBottom="40px">Please use the link below to your account. </Box>
                            <Box width={"15%"} marginBottom={"20px"}>
                                <Button sx={{borderRadius:"50px"}} fullWidth variant="contained" onClick={(e)=>{history.goBack()}}>CONTINUE</Button>
                            </Box>
                            <Box color="#888888" fontSize={"0.8rem"} marginBottom={"50px"}>Thank you for choosing Victory Platform.</Box>
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

                        </>:
                        validateState==="notValid" ?
                        <>
                            <Box marginBottom={"20px"}>
                                <SentimentDissatisfiedOutlinedIcon sx={{fontSize:"150px"}}/>
                            </Box>
                            <Box component={"h4"} marginBottom={"20px"} >Email Verification failed</Box>
                            <Box textAlign={"center"} component={"p"} fontSize="0.7rem" color="#888888" width={"50%"} marginBottom={"20px"}>Either the link had already expired or you did not copy the URL property.</Box>
                            <Link fontSize="0.7rem" sx={{cursor:"pointer"}}>Sign In & resend verification link </Link>
                        </>
                        :
                        null
                }

            </Container>
        </>
    )
}