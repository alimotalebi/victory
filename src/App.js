import React from 'react';
import Routes from "./Routes";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import './App.scss';

export default () => {
	return (
		<ThemeProvider theme={createTheme({
			palette: {primary: {main: "#1633FF"}, mode: "dark", divider: "rgb(18 18 18 / 82%)"}
		})}>
            <CssBaseline/>
            <Routes/>
		</ThemeProvider>
	);
}
