import React from 'react';
import HeaderComponenet from "../Common/Header";
import LanguageComponent from "../Language";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Link from "@mui/material/Link";
import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';
import {useLocation} from "react-router-dom";
import { useHistory } from "react-router-dom";


export default () => {
    let history = useHistory();
    console.log(history)
    return (
        <>
            <HeaderComponenet
                secondaryMenu={<>
                    <LanguageComponent/>
                </>}
            />
            <Container fluid sx={{display:"flex" , alignItems:"center" , justifyContent:"center" , flexDirection:"column",height:"80vh"}}>
                <Box marginBottom={"0px"}>
                    <SentimentDissatisfiedRoundedIcon sx={{fontSize:"150px"}}/>
                </Box>
                <Box component={"h1"} marginBottom={"0px"} fontSize={"90px"} >404</Box>
                <Box textAlign={"center"} component={"p"} color="#B1B1B1" width={"50%"} marginBottom="20px" fontSize={"30px"}>page not found</Box>
                <Box textAlign={"center"} component={"p"} fontSize="1.1rem" color="#888888" width={"50%"} marginBottom="0px">The page you are looking for doesn't exist or another error occurred.</Box>

                <Box display="flex" alignItems={"center"} justifyContent={"center"} flexDirection="row">
                    <Link fontSize="1.1rem" sx={{cursor:"pointer"}} onClick={(e)=>{history.goBack()}}>Go back</Link>
                    <Box whiteSpace="nowrap" marginBottom={0}  textAlign={"center"} component={"p"} fontSize="1.1rem" color="#888888" >, or head over to  &nbsp;</Box>
                    <Link href="/" fontSize="1.1rem" sx={{cursor:"pointer"}}>Main Page</Link>
                    <Box whiteSpace="nowrap" marginBottom={0}  textAlign={"center"} component={"p"} fontSize="1.1rem" color="#888888" >&nbsp; to choose a new direction.</Box>
                </Box>

            </Container>
        </>
    );
}
