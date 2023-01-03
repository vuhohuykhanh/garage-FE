import { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Button } from '@mui/material';
import AppToast from '../../myTool/AppToast';
import { useNavigate } from 'react-router-dom';
import formatMoneyWithDot from '../../assets/constants/until';
import { CartType } from '../../assets/constants/all-enum';
import styles from '../style.module.css'

export default function TitleService({ services }: any) {
	const storageItems = JSON.parse(localStorage.getItem('items') as any);
	const [openToast, setOpenToast] = useState(false);
	const [contentToast, setContentToast] = useState('');
	const [severity, setSeverity] = useState('');
	const navigate = useNavigate();

	const checkLogin = useCallback(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			setContentToast('bạn cần login để sử dụng tính năng này');
			setSeverity('error');
			setOpenToast(true);
			navigate('/login');
		}
	}, [navigate]);

	const salePrice = () => {
		return (
			services?.[0]?.price -
			(services?.[0]?.price *
				services?.[0]?.saleDescriptions?.[services[0]?.saleDescriptions.length - 1]?.salePercent) /
			100
		);
	};

	useEffect(() => {
		checkLogin();
	}, [checkLogin]);

	const handleOrder = () => {
		if (
			storageItems?.find(
				(e: any) => e?.id === services?.[0]?.id
			)
		) {
			setContentToast('Sản phẩm đã có trong giỏ hàng');
			setSeverity('error');
			setOpenToast(true);
		} else {
			const productDetail = {
				id: services?.[0]?.id,
				img: services?.[0]?.image,
				name: services?.[0]?.name,
				price: services[0]?.saleDescriptions.length
					? salePrice()
					: services?.[0]?.price,
				quantity: 1,
				type: CartType.SERVICE,
				typeProduct: 'confirm',
			};

			const listProduct = [...(storageItems || [])];
			if (productDetail) {
				listProduct.push(productDetail);
				localStorage.setItem('items', JSON.stringify(listProduct));
				setContentToast('Thêm sản phẩm vào giỏ hàng thành công');
				setSeverity('success');
				setOpenToast(true);
			}
		}
	};

	return (
		<Box
			width="80%"
			m="auto"
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				marginBottom: '133px',
			}}
		>
			<img
				className={styles.detail_image}
				src={services?.[0]?.image
					? `http://localhost:5000/api/image/${services?.[0]?.image?.filename}`
					: require('../../assets/images/bg1.png')
				}
				//src={services[0]?.image}
				alt="detail_img"
			/>
			<Box width="80%">
				<Box
					width="100%"
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<Box>
						<Typography
							style={{
								fontSize: '35px',
								fontWeight: '700',
								marginBottom: '133px',
							}}
						>
							{services[0]?.name}
						</Typography>

						{/*{services[0]?.saleDescriptions.length ? (
							<Box>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<Typography
										style={{
											fontSize: '25px',
											fontWeight: '700',
										}}
									>
										Giá cũ:
									</Typography>
									<Typography
										style={{
											fontSize: '25px',
											fontWeight: '700',
											color: '#ABABAB',
											marginLeft: '61px',
											textDecoration: 'line-through',
										}}
									>
										{formatMoneyWithDot(services[0]?.price)}{' '}
										đ
									</Typography>
								</Box>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<Typography
										style={{
											fontSize: '25px',
											fontWeight: '700',
										}}
									>
										Giá KM:
									</Typography>
									<Typography
										style={{
											fontSize: '30px',
											fontWeight: '700',
											color: '#0486FF',
											marginLeft: '61px',
										}}
									>
										{formatMoneyWithDot(salePrice())}
									</Typography>
								</Box>
							</Box>
						) : (*/}
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<Typography
									style={{
										fontSize: '25px',
										fontWeight: '700',
									}}
								>
									Giá :
								</Typography>
								<Typography
									style={{
										fontSize: '30px',
										fontWeight: '700',
										color: '#0486FF',
										marginLeft: '61px',
									}}
								>
									{/*{formatMoneyWithDot(services[0]?.price)}*/}
									{services[0]?.price == 0 ? "Liên hệ" : services[0]?.price}
								</Typography>
							</Box>
						{/*)}*/}
						<Box
							width="100%"
							sx={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: '80px',
							}}
						>
							<Button variant="contained" onClick={handleOrder}>
								Thêm vào giỏ hàng
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
			<AppToast
				content={contentToast}
				type={0}
				isOpen={openToast}
				severity={severity}
				callback={() => {
					setOpenToast(false);
				}}
			/>
		</Box>
	);
}
