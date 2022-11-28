import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { sendEmailAPI } from '../../services/index';
import AppToast from '../../myTool/AppToast';
import { validateEmail } from '../../assets/constants';

export default function MaxWidthDialog({
	open,
	setOpen,
	services,
	setDidEmail,
}: any) {
	const [value, setValue] = React.useState(new Date());
	const [email, setEmail] = React.useState('');
	const [isError, setIsError] = React.useState(false);
	const [openToast, setOpenToast] = React.useState(false);
	const [contentToast, setContentToast] = React.useState('');
	const [severity, setSeverity] = React.useState('');

	const getDateTime = (string: any) => {
		const date = `${string.getDate()}/${string.getMonth()}/${string.getFullYear()}`;
		return date;
	};

	const sendEmail = async (body: any) => {
		const response = await sendEmailAPI(body);
		if (response.status === 200) {
			setOpenToast(true);
			setContentToast('Hệ thống đã gởi email xác nhận đặt lịch');
			setSeverity('success');
			setOpen(false);
			setDidEmail(true);
		} else {
			setOpenToast(true);
			setContentToast('Gửi email thất bại');
			setSeverity('error');
			setDidEmail(false);
			console.log(response);
		}
	};

	const handleClose = () => {
		setOpen(false);
		setValue(new Date());
		setEmail('');
		setIsError(false);
	};

	const handleOK = async () => {
		if (!email || !value) {
			setIsError(true);
		} else {
			setIsError(false);
			let d = new Date(value);

			const body = {
				email,
				dateTime: getDateTime(d),
				services,
			};

			await sendEmail(body);
		}
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Chọn thời gian</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Hãy nhập Email và chọn thời gian bạn có thể đưa xe tới
						garage
					</DialogContentText>
					<Box
						noValidate
						component="form"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							m: '40px 20px',
						}}
					>
						<DatePicker
							label="Basic example"
							value={value}
							onChange={(newValue: any) => {
								setValue(newValue);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
						<TextField
							sx={{ mt: '20px' }}
							label="Email"
							color="primary"
							fullWidth={true}
							value={email}
							onChange={(e) => {
								setEmail(e?.target?.value);
							}}
							error={!!email && !validateEmail(!!email)}
							helperText={
								email &&
								!validateEmail(email) &&
								'Vui lòng nhập đúng định dạng Email'
							}
						/>
					</Box>
				</DialogContent>
				<p
					style={{
						margin: '10px',
						color: 'red',
						fontWeight: 'Bold',
						justifyContent: 'flex-end',
						display: isError ? 'flex' : 'none',
					}}
				>
					Vui lòng nhập đầy đủ thông tin
				</p>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
					<Button onClick={handleOK}>Accept</Button>
				</DialogActions>
			</Dialog>
			<AppToast
				content={contentToast}
				type={0}
				isOpen={openToast}
				severity={severity}
				callback={() => {
					setOpenToast(false);
				}}
			/>
		</LocalizationProvider>
	);
}
