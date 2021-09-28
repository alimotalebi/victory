import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";

export default function Footer(){
    return(
        <Box flexShrink={0} py={5}>
            <Container maxWidth={"xl"} disableGutters={false}>
                <Box display={"flex"} alignItems={"center"}>
                    <Box flexGrow={1} sx={{'& > :not(style)': {mr: 1},}}>
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
                    <Box fontSize={12}>
                        © 2021 VictoryPlatform, LLC. All rights reserved.
                    </Box>
                    <Box display={"inline-flex"}>
                        <Box fontSize={12} ml={2}>
                            <Link href="#" color="primary" underline="none">
                                {'Manage Cookies+'}
                            </Link>
                        </Box>
                        <Box fontSize={12} ml={2}>
                            <Link href="#" color="primary" underline="none">
                                {'Newsletters'}
                            </Link>
                        </Box>


                    </Box>
                </Box>
            </Container>
        </Box>
    )
}