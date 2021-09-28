import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";

export default function ({children}){
    return(
        <Container maxWidth={"xl"} disableGutters={false}>
            <Box>
                <style type="text/css">{`
                    .carousel-control-next, .carousel-control-prev {
                    width: auto;
                    }
                `}
                </style>
                <Carousel indicators={false}>
                    <Carousel.Item className={"px-5 py-2"}>
                        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                            <Box mr={2}>
                                <Fab disabled size="small">
                                    02
                                </Fab>
                            </Box>
                            <Box>
                                <Box>
                                    <Link href="#" color="inherit" underline={"none"}>
                                        {'This pandemic is our World War II.\' An up-close look at how a Florida hospital fights to save Covid-19 patients'}
                                    </Link>
                                    <IconButton aria-label="delete" size="small" color="primary">
                                        <CallMadeIcon fontSize="inherit"/>
                                    </IconButton>
                                </Box>
                                <Box display={"flex"} alignItems={"center"}>
                                    <Chip label="World" size="small" color="primary"
                                          sx={{fontSize: ".5rem", height: "18px"}}/>
                                    <Box display={"inline-flex"} fontSize={12} color={"text.disabled"} ml={1}>
                                        Updated 6:50 AM ET, Sat September 11, 2021
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Carousel.Item>
                    <Carousel.Item className={"px-5 py-2"}>
                        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                            <Box mr={2}>
                                <Fab disabled size="small">
                                    02
                                </Fab>
                            </Box>
                            <Box>
                                <Box>
                                    <Link href="#" color="inherit" underline={"none"}>
                                        {'This pandemic is our World War II.\' An up-close look at how a Florida hospital fights to save Covid-19 patients'}
                                    </Link>
                                    <IconButton aria-label="delete" size="small" color="primary">
                                        <CallMadeIcon fontSize="inherit"/>
                                    </IconButton>
                                </Box>
                                <Box display={"flex"} alignItems={"center"}>
                                    <Chip label="World" size="small" color="primary"
                                          sx={{fontSize: ".5rem", height: "18px"}}/>
                                    <Box display={"inline-flex"} fontSize={12} color={"text.disabled"} ml={1}>
                                        Updated 6:50 AM ET, Sat September 11, 2021
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Carousel.Item>
                    <Carousel.Item className={"px-5 py-2"}>
                        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                            <Box mr={2}>
                                <Fab disabled size="small">
                                    02
                                </Fab>
                            </Box>
                            <Box>
                                <Box>
                                    <Link href="#" color="inherit" underline={"none"}>
                                        {'This pandemic is our World War II.\' An up-close look at how a Florida hospital fights to save Covid-19 patients'}
                                    </Link>
                                    <IconButton aria-label="delete" size="small" color="primary">
                                        <CallMadeIcon fontSize="inherit"/>
                                    </IconButton>
                                </Box>
                                <Box display={"flex"} alignItems={"center"}>
                                    <Chip label="World" size="small" color="primary"
                                          sx={{fontSize: ".5rem", height: "18px"}}/>
                                    <Box display={"inline-flex"} fontSize={12} color={"text.disabled"} ml={1}>
                                        Updated 6:50 AM ET, Sat September 11, 2021
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Carousel.Item>
                </Carousel>
            </Box>
        </Container>
    )
}