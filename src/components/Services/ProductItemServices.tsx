import {
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
	Box,
} from '@mui/material';
//import formatMoneyWithDot from '../../assets/constants/until';
import styles from '../style.module.css'

//const formatMoney = (price: any, sale: any) => {
//	return formatMoneyWithDot(price - (price * sale) / 100);
//};

const ProductItemService = (service: any) => {
	return (
		<>
			<Card
				sx={{ backgroundColor: '#FFFFFF', height: 430 }}
				className={styles.productCard}
				key={service.serviceId}
			>
				<CardMedia
					component="img"
					height="200"
					src={service?.image 
						? `http://localhost:5000/api/image/${service?.image?.filename}`
						: require('../../assets/images/293399859_6014255531934980_2866254695672486007_n.jpg')
					}
					alt="green iguana"
				/>
				<CardHeader
					title={
						<Typography
							variant="subtitle1"
							sx={{
								fontSize: '18px',
								fontWeight: '700',
								color: '#000000',
								height: 70,
							}}
							mt={2}
						>
							{service.name}
						</Typography>
					}
				/>
				<CardContent
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Box>
						<Typography variant="body2" className={styles.sale_price}>
							{service?.price === "0" ? "Liên hệ" : service?.price + "đ"}
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</>
	);
};

export default ProductItemService;
