import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import LoadingButton from '@mui/lab/LoadingButton';
import { NavLink } from 'react-router-dom';
import AppToast from '../../../myTool/AppToast';
import { Box, Typography, Input, Avatar, Button, Popper } from '@mui/material';
import { signUpAPI } from '../../../services/index';

function Register() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [idCardNumber, setIdCardNumber] = useState('');
  const [isError, setIsError] = useState();
  const [message, setMessage] = useState('');
  const [contentToast, setContentToast] = useState('');
  const [openToast, setOpenToast] = useState(false);
  const [severity, setSeverity] = useState('');

  let navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
  }, []);

  const handleChangeAccount = (event) => {
    setAccount(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangeConfirmPass = (event) => {
    setConfirmPass(event.target.value);
  };

  const handleChangeIdCardNumber = (event) => {
    setIdCardNumber(event.target.value);
  };

  useEffect(() => {
    if (confirmPass !== password) {
      setMessage('Mật khẩu nhập lại không khớp');
      setIsError(true);
    } else {
      setMessage('');
    }
  }, [confirmPass]);

  useEffect(() => {
    if (!account || !password || !confirmPass || !idCardNumber) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [account, password, confirmPass, idCardNumber]);

  async function signUp(body) {
    const res = await signUpAPI(body);
    if (res?.status === 200) {
      setContentToast(res.data);
      setSeverity('success');
      setOpenToast(true);
      setAccount('');
      setPassword('');
      setConfirmPass('');
      setIdCardNumber('');
    } else {
      setContentToast(res);
      setSeverity('error');
      setOpenToast(true);
    }
  }

  const handleRegister = () => {
    if (!isError) {
      var data = {
        username: account,
        password: password,
        idCardNumber: idCardNumber,
      };
      signUp(data);
    }
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          marginTop: '80px',
          marginBottom: '80px',
          justifyContent: 'center',
          height: '600px',
        }}
      >
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
              ĐĂNG KÝ
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
              type={'password'}
              value={password}
              onChange={handleChangePassword}
              label="Password"
            />
          </FormControl>
          <br />

          <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              ConfirmPassword
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={'password'}
              value={confirmPass}
              onChange={handleChangeConfirmPass}
              label="confirmPassword"
            />
          </FormControl>
          <br />
          <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              IdCardNumber
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={'text'}
              value={idCardNumber}
              onChange={handleChangeIdCardNumber}
              label="idCardNumber"
            />
          </FormControl>
          <p style={{ color: 'red', fontWeight: 'bold' }}>{message}</p>
          <br />
          <LoadingButton
            variant="contained"
            style={{ marginTop: '10px' }}
            size="large"
            type="submit"
            //loading={loading}
            onClick={handleRegister}
          >
            Đăng ký
          </LoadingButton>
          <p
            style={{
              color: 'red',
              fontWeight: 'bold',
              marginBottom: '10px',
              display: isError ? 'block' : 'none',
            }}
          >
            Vui lòng không để trống thông tin
          </p>
        </div>
      </div>
      <AppToast
        content={contentToast}
        type={0}
        isOpen={openToast}
        severity={severity}
        callback={() => {
          setOpenToast(false);
        }}
      />
    </div>
  );
}

export default Register;
