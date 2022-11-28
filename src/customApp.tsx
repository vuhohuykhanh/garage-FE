import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { Outlet } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
//import AdminFrame from "./components/Admin/AdminFrame";
import { getUserInfo } from "./services/index";

import { useCallback, useEffect, useState } from "react";

export function CustomerApp() {
	const [userInfo, setUserInfo] = useState();

	const onGetUserInfo = useCallback(async () => {
		const response = await getUserInfo();
		if (response?.status === 200) {
			setUserInfo(response?.data);
		} else {
			setUserInfo(null as any);
		}
	}, []);

	useEffect(() => {
		onGetUserInfo();
	}, [onGetUserInfo]);

	return (
		<div style={{ height: "100vh" }}>
			<HeaderComponent
				userInfo={userInfo}
				setUserInfo={setUserInfo}
				getUserInfo={getUserInfo}
			/>
			<div>
				<Outlet />
			</div>
			<FooterComponent />
		</div>
	);
}

export function AdminApp() {
	const mdTheme = createTheme();
	return (
		<ThemeProvider theme={mdTheme}>
			<Box sx={{ display: "flex" }}>
				{/*<AdminFrame />*/}
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === "light"
								? theme.palette.grey[100]
								: theme.palette.grey[900],
						flexGrow: 1,
						height: "100vh",
						overflow: "auto",
					}}
				>
					<Toolbar />
					<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
						<Grid container spacing={3}>
							{/* MAIN CONTENT */}
							<Grid item xs={12}>
								<Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
									<Outlet />
								</Paper>
							</Grid>
						</Grid>
						{/*<Copyright sx={{ pt: 4 }} />*/}
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
