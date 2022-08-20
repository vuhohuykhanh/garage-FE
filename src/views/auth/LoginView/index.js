import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { setInfor, setLogin } from '../../actions/action';
// import Footer from '../../component/Footer/Footer';
// import Banner from '../../component/Header/banner'
// import background from '../../assets/image/background-login.png'

// import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import { NavLink } from 'react-router-dom';
import { Box, Typography, Input, Avatar, Button, Popper } from '@mui/material';
import { loginAPI } from '../../../services/index';

function Login() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isValid, setValid] = useState('none');

  let navigate = useNavigate();

  const handleChangeAccount = (event) => {
    setAccount(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  async function login(body) {
    const res = await loginAPI(body);
    if (res?.status === 200) {
      localStorage.setItem('token', res?.data?.accessToken);
      navigate('/');
      window.location.reload();
    }
  }

  const handleLogin = () => {
    setLoading(true);

    var data = {
      username: account,
      password: password,
    };
    login(data);
  };

  // const handleClickShowPassword = () => {
  //     setShowPassword(!showPassword);
  // };

  // const handleMouseDownPassword = (event) => {
  //     event.preventDefault();
  // };

  return (
    <div>
      {/* <Banner /> */}
      <div
        style={{
          display: 'flex',
          marginTop: '80px',
          marginBottom: '80px',
          justifyContent: 'center',
          height: '400px',
        }}
      >
        {/* <img src={background} alt="Login" style={{ width: '30%', height: 'auto' }} /> */}

        <div
          style={{
            border: '1px solid #CCCCCC',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#FFFF',
          }}
        >
          <Box sx={{ marginBottom: '20px' }}>
            <Typography sx={{ fontSize: '30px', fontWeight: '700' }}>
              ĐĂNG NHẬP
            </Typography>
          </Box>
          <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Username
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-text"
              type="text"
              value={account}
              onChange={handleChangeAccount}
              label="Username"
            />
          </FormControl>
          <br />

          <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handleChangePassword}
              endAdornment={
                <InputAdornment position="end">
                  {/* <IconButton
                                        aria-label="toggle password visibility"
                                        // onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton> */}
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <strong style={{ color: 'red', display: `${isValid}` }}>
            Tài khoản hoặc mật khẩu không hợp lệ !!
          </strong>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <NavLink to="/verify-forgot-password">
              <p>Quên mật khẩu?</p>
            </NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink to="/register-signup">
              <p>Đăng ký ?</p>
            </NavLink>
          </div>
          <LoadingButton
            variant="contained"
            style={{ marginTop: '10px' }}
            size="large"
            type="submit"
            // loading={loading}
            onClick={handleLogin}
          >
            Đăng nhập
          </LoadingButton>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Login;
