import { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Button } from '@mui/material';
import AppToast from '../../myTool/AppToast';
import { useNavigate } from 'react-router-dom';
import formatMoneyWithDot from '../../assets/constants/until';
import { CartType } from '../../assets/constants/all-enum';
import styles from '../style.module.css'

export default function TitleGearDetail({ product }: any) {
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

	useEffect(() => {
		checkLogin();
	}, [checkLogin]);

	const salePrice = () => {
		return (
			product?.price -
			(product?.price * product?.saleDescriptions?.[0]?.salePercent) / 100
		);
	};

	const handleOrder = () => {
		if (storageItems?.find((e: any) => e?.id === product?.id)) {
			setContentToast('Sản phẩm đã có trong giỏ hàng');
			setSeverity('error');
			setOpenToast(true);
		} else {
			const productDetail = {
				id: product?.id,
				img: product?.image,
				name: product?.name,
				price: product?.saleDescriptions.length
					? salePrice()
					: product?.price,
				quantity: 1,
				type: CartType.ACCESSORY,
				stock: product?.quantity,
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
				src={product?.image
					? `http://localhost:5000/api/image/${product?.image?.filename}`
					 : require('../../assets/images/bg1.png')
				}
				//src={product?.image}
				alt="detail_img"
				height="500px"
			/>
			<Box width="80%">
				<Box
					width="100%"
					sx={{ display: 'flex', justifyContent: 'center', ml: 4 }}
				>
					<Box>
						<Typography
							style={{
								fontSize: '35px',
								fontWeight: '700',
								marginBottom: '133px',
							}}
						>
							{product?.name}
						</Typography>
						{product?.saleDescriptions.length ? (
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
										{formatMoneyWithDot(product?.price)}
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
										{/*{product?.price -
                      (product?.price *
                        product?.saledescription?.[0]?.salePercent) /
                        100}{' '}*/}
										{formatMoneyWithDot(salePrice())}
									</Typography>
								</Box>
							</Box>
						) : (
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
									{formatMoneyWithDot(product?.price)} đ
								</Typography>
							</Box>
						)}
						{/* <Box
              width="100%"
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "45px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "200px",
                  background:
                    "linear-gradient(180deg, rgba(241, 39, 17, 0.89) 0%, rgba(252, 181, 30, 0.72) 100%)",
                }}
              >
                Mua ngay
              </Button>
            </Box> */}
						<Box
							width="410px"
							sx={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: '45px',
							}}
						>
							<Button
								variant="contained"
								sx={{ width: '200px', background: '#0486FF' }}
								onClick={handleOrder}
							>
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
