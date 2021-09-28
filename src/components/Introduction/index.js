import React from "react";
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Carousel from 'react-bootstrap/Carousel'
import Chip from '@mui/material/Chip';
import SensorsIcon from '@mui/icons-material/Sensors';
import SignInUserComponent from "../User/SignInUser";
import HeaderComponent from '../Common/Header'
import LanguageComponent from '../Language'
import Footer from "../Common/Footer";
import {useUserContext} from "../../contexts/UserContext";
import {withRouter} from "react-router-dom";

export default withRouter((props) => {
	const {user: {current: {userCredential}}} = useUserContext();
	React.useEffect(() => {
		userCredential && props.history.push("/user/stories");
	}, [userCredential])
	return (
		<React.Fragment>
			<Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
				<HeaderComponent
					secondaryMenu={<>
						<Box px={2} color={"text.primary"}>
							<Link href="/story/short/list" color="primary" underline={"none"}>
								<SensorsIcon/>{'Live news stream'}
							</Link>
						</Box>
						<LanguageComponent/>
					</>}
				/>
				<Divider/>
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
				<Divider/>
				<Box flex={"1 0 auto"} display={"flex"} alignItems={"center"} py={5}>
					<Container maxWidth={"xl"}>
						<Grid container spacing={3}>
							<Grid item xs={9}>
								<Box fontSize={60} fontWeight="fontWeightBold" fontFamily={"Roboto"}>
									<Box>
										A platform to empower
									</Box>
									<ArrowForwardIcon color="primary" fontSize={"30px"}/> your voice
								</Box>
								<Box fontSize={24} color={"text.disabled"} pb={3}>
									Dear friends, by registering on this platform, you can send any kind of content,
									including video, image, text, etc ...
								</Box>
								<Box>
									<Fab variant="extended" color="primary" size="medium">
										About us
									</Fab>
									<Box display={"inline"} mx={5}>
										<Link href="#" color="inherit">
											{'Privacy policy'}
										</Link>
										<IconButton aria-label="delete" size="small" color="primary">
											<CallMadeIcon fontSize="inherit"/>
										</IconButton>
									</Box>
								</Box>
							</Grid>
							<Grid item xs={3}>
								<SignInUserComponent/>
							</Grid>
						</Grid>
					</Container>
				</Box>
				<Footer/>
			</Box>
		</React.Fragment>
	)
})