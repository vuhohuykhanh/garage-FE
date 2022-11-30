import { useState, useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import LoadingButton from '@mui/lab/LoadingButton';
import FormHelperText from '@mui/material/FormHelperText';
import AppToast from '../../../myTool/AppToast';
import { Box, Typography } from '@mui/material';
import { signUpAPI } from '../../../services/index';
import {
	validateEmail,
	validatePhoneNumber,
	validateIdCardNumber,
} from '../../../assets/constants';

function Register() {
	const [account, setAccount] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [idCardNumber, setIdCardNumber] = useState('');
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [avatar, setAvatar] = useState('');

	const [message, setMessage] = useState('');
	const [contentToast, setContentToast] = useState('');
	const [openToast, setOpenToast] = useState(false);
	const [severity, setSeverity] = useState('');

	useEffect(() => {
		localStorage.removeItem('token');
	}, []);

	const handleChangeAccount = (event: any) => {
		setAccount(event.target.value);
	};
	const handleChangePassword = (event: any) => {
		setPassword(event.target.value);
	};
	const handleChangeConfirmPass = (event: any) => {
		setConfirmPass(event.target.value);
	};

	const handleChangeIdCardNumber = (event: any) => {
		setIdCardNumber(event.target.value);
	};

	useEffect(() => {
		if (
			!account ||
			!password ||
			!confirmPass ||
			!idCardNumber ||
			!name ||
			!address ||
			!email ||
			!phoneNumber
		) {
			setMessage('Vui lòng nhập đầy đủ thông tin');
		} else if (confirmPass !== password) {
			setMessage('Mật khẩu nhập lại không khớp');
		} else if (
			!validateEmail(email) ||
			!validateIdCardNumber(idCardNumber) ||
			!validatePhoneNumber(phoneNumber)
		) {
			setMessage('Vui lòng nhập đúng định dạng thông tin!');
		} else setMessage('');
	}, [
		account,
		password,
		confirmPass,
		idCardNumber,
		name,
		address,
		email,
		phoneNumber,
	]);

	async function signUp(body: any) {
		const res = await signUpAPI(body);
		if (res?.status === 200) {
			console.log('res', res);
			setContentToast(res?.data);
			setSeverity('success');
			setOpenToast(true);
			setAccount('');
			setPassword('');
			setConfirmPass('');
			setIdCardNumber('');
			setName('');
			setAddress('');
			setEmail('');
			setAvatar('');
		} else {
			setContentToast(res);
			setSeverity('error');
			setOpenToast(true);
		}
	}

	const handleRegister = () => {
		if (!message) {
			var data = {
				username: account,
				password: password,
				idCardNumber: idCardNumber,
				name,
				address,
				email,
				phoneNumber,
				avatar,
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
					height: '700px',
				}}
			>
				<div
					style={{
						border: '1px solid #CCCCCC',
						display: 'flex',
						flexDirection: 'column',
						//alignItems: 'center',
						//justifyContent: 'center',
						background: '#FFFF',
					}}
				>
					<Box
						sx={{
							marginBottom: '20px',
							width: '700px',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Typography
							sx={{ fontSize: '30px', fontWeight: '700' }}
						>
							ĐĂNG KÝ
						</Typography>
					</Box>
					<FormControl
						sx={{ m: 1, width: '80ch' }}
						variant="outlined"
					>
						<InputLabel htmlFor="account">Username</InputLabel>
						<OutlinedInput
							id="account"
							type="text"
							value={account}
							onChange={handleChangeAccount}
							label="Username"
						/>
					</FormControl>
					<br />

					<div>
						<FormControl
							sx={{ m: 1, width: '40ch' }}
							variant="outlined"
						>
							<InputLabel htmlFor="password">Password</InputLabel>
							<OutlinedInput
								id="password"
								type={'password'}
								value={password}
								onChange={handleChangePassword}
								label="Password"
							/>
						</FormControl>

						<FormControl
							sx={{ m: 1, width: '40ch' }}
							variant="outlined"
						>
							<InputLabel htmlFor="confirmPassword">
								ConfirmPassword
							</InputLabel>
							<OutlinedInput
								id="confirmPassword"
								type={'password'}
								value={confirmPass}
								onChange={handleChangeConfirmPass}
								label="confirmPassword"
							/>
						</FormControl>
					</div>
					<br />
					<br />

					<div>
						<FormControl
							sx={{ m: 1, width: '40ch' }}
							variant="outlined"
						>
							<InputLabel htmlFor="idCardNumber">
								IdCardNumber
							</InputLabel>
							<OutlinedInput
								id="idCardNumber"
								type={'number'}
								value={idCardNumber}
								onChange={handleChangeIdCardNumber}
								label="IdCardNumber"
							/>
							{idCardNumber &&
								!validateIdCardNumber(idCardNumber) && (
									<FormHelperText error id="accountId-error">
										Mã CMND chỉ gồm 9 chữ số
									</FormHelperText>
								)}
						</FormControl>
						<FormControl
							sx={{ m: 1, width: '40ch' }}
							variant="outlined"
						>
							<InputLabel htmlFor="name">Name</InputLabel>
							<OutlinedInput
								id="name"
								type={'text'}
								value={name}
								onChange={(e) => setName(e.target.value)}
								label="name"
							/>
						</FormControl>
					</div>
					<br />

					<div>
						<FormControl
							sx={{ m: 1, width: '40ch' }}
							variant="outlined"
						>
							<InputLabel htmlFor="address">Address</InputLabel>
							<OutlinedInput
								id="address"
								type={'text'}
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								label="address"
							/>
						</FormControl>

						<FormControl
							sx={{ m: 1, width: '40ch' }}
							variant="outlined"
						>
							<InputLabel htmlFor="email">Email</InputLabel>
							<OutlinedInput
								id="email"
								type={'text'}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								label="Email"
							/>
							{email && !validateEmail(email) && (
								<FormHelperText error id="accountId-error">
									Vui lòng nhập đúng định dạng Email
								</FormHelperText>
							)}
						</FormControl>
					</div>

					<br />

					<div>
						<FormControl
							sx={{ m: 1, width: '80ch' }}
							variant="outlined"
						>
							<InputLabel htmlFor="phoneNumber">
								PhoneNumber
							</InputLabel>
							<OutlinedInput
								id="phoneNumber"
								type={'number'}
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
								label="PhoneNumber"
							/>
							{phoneNumber && !validatePhoneNumber(phoneNumber) && (
								<FormHelperText error id="accountId-error">
									Số điện thoại bao gồm 10 chữ số và bắt đầu
									bằng 0
								</FormHelperText>
							)}
						</FormControl>
					</div>
					<br />
					{message && (
						<p
							style={{
								color: 'red',
								fontWeight: 'bold',
								textAlign: 'center',
							}}
						>
							{message}
						</p>
					)}
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
					{/*<p
                        style={{
                            color: 'red',
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            display: isError ? 'block' : 'none',
                        }}
                    >
                        Vui lòng không để trống thông tin
                    </p>*/}
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
