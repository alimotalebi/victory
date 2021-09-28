import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import Box from "@mui/material/Box"
import Chip from '@mui/material/Chip';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import {IconButton} from "@mui/material";
import VisibilitySensor from 'react-visibility-sensor'

export default function (props){
    const [seen,setSeen]=React.useState(false);
    const [isNew , setIsNew]=React.useState(isNaN(props.new) ? false : props.new);
    const [componenetIsVisible , setComponenetIsVisible]=React.useState();

    const onVisibilityChange=(isVisible)=>{
        setComponenetIsVisible(isVisible);
        if(isVisible && !seen && isNew){
            setSeen(true);
        }
    }

    React.useEffect(()=>{
        if(seen){
            setTimeout(()=> {
                setIsNew(false);
                console.log("not new anymore")
            } , 2000);
        }

    },[seen])

    return(
        <>
            <VisibilitySensor onChange={onVisibilityChange}>
                <Paper elevation={3} style={{maxWidth:"100%" , width:"100%"}}>
                    <Box flexDirection={"row"} width="100%" display="flex" minHeight={"80px"} style={isNew ? {borderColor:"rgb(22 178 255)" , transition:"all 250ms"}:{borderColor:"#1633FF" , transition:"all 250ms"}} border={"2px solid"} borderRadius={"10px"} p={"10px"} flexShrink={2} alignItems={"center"}>
                        <Box maxHeight="60px" flexShrink={0} minWidth={"60px"}  width={"60px"} height={"60px"} maxWidth="60px" display="flex" alignItems="center" justifyContent={"center"} mr={"10px"}>
                            {props.img ?
                                <Avatar src={props.img} alt={""}/>
                                :
                                <Box width="100%" height='100%' borderRadius={"10px"} display={"flex"} alignItems={"center"} justifyContent={"center"} bgcolor={"#555555"}>
                                    <Box textAlign={"center"} opacity={"0.7"} >N/A</Box>
                                </Box>
                            }
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justifyContent="center" gap={"5px"} flexWrap={"wrap"} flexGrow={1}>
                            <Box display={"flex"} flexDirection={"row"} justifyContent="space-between" gap={"5px"}  >
                                <Box display={"flex"} alignItems={"center"} flexDirection={"row"} overflow={"hidden"} >
                                    {
                                        isNew ?
                                            <CircleRoundedIcon fontSize={"10px"} color={"primary"} pb={"0px"}/>
                                            :
                                            props.isBreaking ?
                                                <CircleRoundedIcon fontSize={"10px"} color={"error"} pb={"0px"}/>
                                                :
                                                <CircleRoundedIcon fontSize={"10px"} pb={"0px"}/>
                                    }
                                    {props.isBreaking && <Chip variant="outlined" size={"small"} color={"error"} label={"Breaking"}/>}
                                    <Box display="flex" minWidth="0" maxWidth="500px"  overflow="hidden">
                                        <h4 style={{textOverflow:"ellipsis" , marginBottom:"0px" , whiteSpace:"nowrap" , overflow:"hidden" , cursor:"pointer" }}  >
                                            {props.title}
                                        </h4>
                                    </Box>
                                </Box>
                                <Box display={"flex"} flexDirection={"row"} justifyContent={"flex-end"} alignItems={"center"} flexShrink={0} flexGrow={1}>
                                    <IconButton size="small" mb={0}>
                                        <ImageOutlinedIcon/>
                                    </IconButton>
                                    <IconButton size="small" mb={0}>
                                        <VideocamOutlinedIcon/>
                                    </IconButton>
                                    <IconButton size="small" mb={0}>
                                        <InsertDriveFileOutlinedIcon/>
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box  display={"flex"} flexDirection={"row"} alignItems="center" gap={"5px"} overflow="hidden">
                                <Box flexShrink={0} color={"white"} bgcolor={"#555555"} fontSize={"10px"} borderRadius={"2px"} width={"fit-content"} px={"3px"} style={{opacity:"0.7"}}>
                                    {props.time}
                                </Box>
                                <Box display="flex" minWidth="0" maxWidth="500px"  overflow="hidden">
                                    <Box component={"span"} color="#AAAAAA"  whiteSpace="nowrap" style={{ marginBottom:"0px"}} maxHeight={"1.5rem"} textOverflow={"ellipsis"} overflow={"hidden"}>
                                        {props.summary}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </VisibilitySensor>
        </>
    )
}

// NewsComponent.propTypes={
//     img:PropTypes.string,
//     title:PropTypes.string.isRequired,
//     isBreaking:PropTypes.bool,
//     time:PropTypes.string.isRequired,
//     summary:PropTypes.string,
//     new:PropTypes.bool,
//
// }