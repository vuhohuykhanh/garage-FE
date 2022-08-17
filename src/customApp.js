import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { Outlet } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
//import { Copyright } from './component/Admin/AdminFrame';
import AdminFrame from './components/Admin/AdminFrame';
import { getUserInfoV2 } from './services/index';

import React, { useEffect, useState } from 'react';

export function CustomerApp() {
  const [userInfo, setUserInfo] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getUserInfo() {
      const response = await getUserInfoV2();
      if (response.status === 200) {
        setUserInfo(response.data);
        setCount(count + 1);
      }
    }
    if (count === 0) {
      getUserInfo();
    }
  }, []);

  return (
    <div>
      <HeaderComponent />
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
      <Box sx={{ display: 'flex' }}>
        {/*<AdminFrame />*/}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* MAIN CONTENT */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
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
