import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormHelperText from '@mui/material/FormHelperText';

import LoadingButton from '@mui/lab/LoadingButton';
import { NavLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { loginAPI, forgotPasswordAPI } from '../../../services/index';
import AppToast from '../../../myTool/AppToast';
import { validateIdCardNumber } from '../../../constants';

function Login() {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [open, setOpen] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const [verifyAccount, setVerifyAccount] = useState('');
    const [idCardNumber, setIdCardNumber] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorVerify, setErrorVerify] = useState('');

    const [openToast, setOpenToast] = useState(false);
    const [contentToast, setContentToast] = useState('');
    const [severity, setSeverity] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');
    }, []);

    const handleChangeAccount = (event: any) => {
        setAccount(event.target.value);
    };
    const handleChangePassword = (event: any) => {
        setPassword(event.target.value);
    };

    const handleForgotPassword = () => {
        setOpen(true);
        setErrorVerify('');
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function changPassword(data: any) {
        const res = await forgotPasswordAPI(data);
        if (res?.status === 200) {
            setOpenToast(true);
            setContentToast(res?.data);
            setSeverity('success');
            setOpen(false);
        } else {
            setOpenToast(true);
            setContentToast(res);
            setSeverity('error');
        }
    }

    const handleCheckAccount = () => {
        if (!verifyAccount || !idCardNumber || !newPassword) {
            setErrorVerify('Vui lòng nhập đầy đủ thông tin');
        } else if (!validateIdCardNumber(idCardNumber)) {
            setErrorVerify('Vui lòng nhập đúng định dạng thông tin');
        } else {
            const data = {
                username: verifyAccount,
                idCardNumber,
                newPassword,
            };

            changPassword(data);
        }
    };

    async function login(body: any) {
        const res = await loginAPI(body);
        if (res?.status === 200) {
            setErrorMsg('');
            localStorage.setItem('token', res?.data?.accessToken);
            navigate('/');
            window.location.reload();
        } else {
            setErrorMsg(res);
        }
    }

    const handleLogin = () => {
        console.log(account);
        if (!account || !password) {
            setErrorMsg('Lỗi: Vui lòng nhập đầy đủ thông tin');
        } else {
            var data = {
                username: account,
                password: password,
            };
            login(data);
        }
    };

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
                        <Typography
                            sx={{ fontSize: '30px', fontWeight: '700' }}
                        >
                            ĐĂNG NHẬP
                        </Typography>
                    </Box>
                    <FormControl
                        sx={{ m: 1, width: '50ch' }}
                        variant="outlined"
                    >
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

                    <FormControl
                        sx={{ m: 1, width: '50ch' }}
                        variant="outlined"
                    >
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
                    <p style={{ color: 'red', fontWeight: 'bold' }}>
                        {errorMsg}
                    </p>
                    <br />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <p
                            style={{
                                textDecoration: 'underline',
                                color: '#551A8B',
                            }}
                            className="btnForgot"
                            onClick={handleForgotPassword}
                        >
                            Quên mật khẩu
                        </p>
                        &nbsp;&nbsp;&nbsp;
                        <NavLink to="/register">
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
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Quên mật khẩu?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Vui lòng nhập tài khoản và số CMND của bạn để chúng tôi
                        xác thực!!
                    </DialogContentText>
                    <TextField
                        sx={{ mt: 4 }}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Tài khoản"
                        type="username"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setVerifyAccount(e.target.value)}
                    />
                    <TextField
                        sx={{ mt: 4 }}
                        autoFocus
                        margin="dense"
                        id="idCardNumber"
                        label="Số CMND"
                        type="number"
                        fullWidth
                        variant="outlined"
                        error={
                            !!idCardNumber && !validateIdCardNumber(idCardNumber)
                        }
                        helperText={
                            idCardNumber &&
                            !validateIdCardNumber(idCardNumber) &&
                            'Số CMND bao gồm 9 chữ số'
                        }
                        onChange={(e) => setIdCardNumber(e.target.value)}
                    />
                    <TextField
                        sx={{ mt: 4 }}
                        autoFocus
                        margin="dense"
                        id="newPassword"
                        label="Mật khẩu mới"
                        type="password"
                        fullWidth
                        variant="outlined"
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    {errorVerify && (
                        <p style={{ color: 'red', fontWeight: 'bold' }}>
                            {errorVerify}
                        </p>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy</Button>
                    <Button onClick={handleCheckAccount}>Xác nhận</Button>
                </DialogActions>
            </Dialog>
            {/* <Footer /> */}
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

export default Login;
