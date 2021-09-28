import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Logout from "@mui/icons-material/Logout";
import Box from '@mui/material/Box';
import Fab from "@mui/material/Fab";
import PersonIcon from "@mui/icons-material/Person";


export default ({children})=>{
	const [valueAnchorElement, setValueAnchorElement] = React.useState(null);

	const handleClickOpenMenuUser = (event) => {
		event.stopPropagation()
		console.log(event.currentTarget);
		setValueAnchorElement(event.currentTarget);
	};
	const handleClickCloseMenuUser = (event) => {
		event.stopPropagation()
		setValueAnchorElement(null);
	};
	return(
		<>
			<Box onClick={handleClickOpenMenuUser}>
				<Fab  sx={{ml:2}} size="small" color="primary" aria-label="add">
					<PersonIcon />
				</Fab>
			</Box>
			<Menu
				anchorEl={valueAnchorElement}
				open={Boolean(valueAnchorElement)}
				onClose={handleClickCloseMenuUser}
				onClick={handleClickOpenMenuUser}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem onClick={(event)=>event.stopPropagation()} href={"/user/stories"} component="a">
					<Avatar><DescriptionOutlinedIcon /></Avatar>
					Stories
				</MenuItem>
				<MenuItem onClick={(event)=>event.stopPropagation()}>
					<Avatar><AnalyticsOutlinedIcon /></Avatar>
					stats
				</MenuItem>
				<Divider />
				<MenuItem onClick={(event)=>event.stopPropagation()}>
					<ListItemIcon>
						<SettingsOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Account Settings
				</MenuItem>
				<MenuItem onClick={(event)=>event.stopPropagation()} href={"/user/logout"} component="a">
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	)
}