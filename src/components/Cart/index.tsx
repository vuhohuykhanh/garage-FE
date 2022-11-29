import React, { useCallback, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

import Grid from '@mui/material/Grid';

import ProductInCart from './ProductInCart';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormDatePicker from './FormDatePicker';

import { getUserInfo, createCartDescriptionAPI } from '../../services/index';

import formatMoneyWithDot from '../../assets/constants/until';
import { CartType } from '../../assets/constants/all-enum';
import styles from '../style.module.css';

export default function Cart() {
	const storageItems = JSON.parse(localStorage.getItem('items') as any);
	const [itemsInCart, setItemsInCart] = useState(storageItems || []);
	const [change, setChange] = useState(false);
	const [open, setOpen] = useState(false);
	const [services, setServices] = useState([]);
	const [didEmail, setDidEmail] = React.useState(false);

	const [totalPrice, setTotalPrice] = useState(
		itemsInCart?.reduce((a: any, b: any) => a + b?.price * b?.quantity, 0)
	);

	const navigate = useNavigate();
	useEffect(() => {
		setTotalPrice(itemsInCart?.reduce((a: any, b: any) => a + b?.price * b?.quantity, 0));
	}, [change, itemsInCart]);

	const checkLogin = useCallback(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			navigate('/login');
		}
	}, [navigate]);

	const [idUser, setIdUser] = useState();

	const onGetUserInformation = useCallback(async () => {
		const response = await getUserInfo();
		if (response?.status === 200) {
			setIdUser(response?.data?.id);
		} else {
			setIdUser(null as any);
		}
	}, []);

	useEffect(() => {
		checkLogin();
		onGetUserInformation();
	}, [checkLogin, onGetUserInformation]);

	const createCartAction = async (body: any) => {
		const res = await createCartDescriptionAPI(body);
		if (res?.status === 200) {
			localStorage.removeItem('items');
			navigate('/');
		} else {
			console.log(res?.data);
		}
	};

	const createCartMain = () => {
		const products = itemsInCart
			.map((value: any) => ({
				id: value?.id,
				quantity: value?.quantity,
				price: value?.price,
			}));

		if (products?.length === 0) {
			return;
		}

		if (services?.length && !didEmail) {
			setServices(services);
			setOpen(true);
		} else {
			setOpen(false);
			const body = {
				customer: idUser,
				totalPrice: totalPrice,
				product: products,
			};

			createCartAction(body);
		}
	};

	return (
		<Box>
			<Box>
				<Typography
					style={{
						fontSize: '40px',
						fontWeight: '700',
						marginBottom: '55px',
						marginTop: '102px',
						width: '100%',
						textAlign: 'center',
					}}
				>
					GIỎ HÀNG
				</Typography>
			</Box>
			<Box
				width="80.4%"
				m="auto"
				sx={{ display: 'flex', justifyContent: 'space-evenly' }}
			>
				<Box
					width="20%"
					sx={{
						border: '1px solid #DEDEDE',
						height: '81px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
						Sản phẩm
					</Typography>
				</Box>
				<Box
					width="40%"
					sx={{
						border: '1px solid #DEDEDE',
						height: '81px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
						Tên sản phẩm
					</Typography>
				</Box>
				<Box
					width="15%"
					sx={{
						border: '1px solid #DEDEDE',
						height: '81px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
						Số lượng
					</Typography>
				</Box>
				<Box
					width="15%"
					sx={{
						border: '1px solid #DEDEDE',
						height: '81px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
						Giá tiền
					</Typography>
				</Box>
				<Box
					width="10%"
					sx={{
						border: '1px solid #DEDEDE',
						height: '81px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
						Xóa
					</Typography>
				</Box>
			</Box>
			{itemsInCart?.map((item: any) => (
				<ProductInCart
					item={item}
					setItems={setItemsInCart}
					items={itemsInCart}
					setChange={setChange}
					change={change}
				/>
			))}

			<Box
				width="80.4%"
				m="auto"
				sx={{ display: 'flex', justifyContent: 'space-evenly' }}
			>
				<Box
					width="75%"
					sx={{
						border: '1px solid #DEDEDE',
						height: '81px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
						Tổng tiền:
					</Typography>
				</Box>
				<Box
					width="15%"
					sx={{
						border: '1px solid #DEDEDE',
						height: '81px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
						{formatMoneyWithDot(totalPrice)}
					</Typography>
				</Box>
				<Box
					width="10%"
					sx={{
						border: '1px solid #DEDEDE',
						height: '81px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography
						sx={{ fontSize: '20px', fontWeight: '700' }}
					></Typography>
				</Box>
			</Box>
			<Box
				width="80.4%"
				m="auto"
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					marginTop: '50px',
				}}
			>
				<Button
					className={styles.btnPay}
					sx={{
						width: '200px',
						height: '49px',
						backgroundColor: '#EC2424',
						borderRadius: '11px',
					}}
					onClick={createCartMain}
				>
					<Typography
						sx={{
							fontSize: '20px',
							fontWeight: '500',
							color: '#FFFFFF',
						}}
					>
						Thanh toán
					</Typography>
				</Button>
			</Box>
			<Grid item={true} md={12}></Grid>
			<FormDatePicker
				open={open}
				setOpen={setOpen}
				services={services}
				setDidEmail={setDidEmail}
			/>
		</Box>
	);
}
