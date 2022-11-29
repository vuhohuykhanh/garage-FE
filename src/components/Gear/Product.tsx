import {
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
	Divider,
	Box,
} from '@mui/material';
import formatMoneyWithDot from '../../assets/constants/until';
import styles from '../style.module.css';

const formatMoney = (price: any, sale: any) => {
	return formatMoneyWithDot(price - (price * sale) / 100);
};

const ProductItemService = (product: any) => {
	return (
		<>
			<Card
				sx={{ backgroundColor: '#FFFFFF', height: 430 }}
				className={styles.productCard}
			>
				<CardMedia
					component="img"
					height="200"
					image={require('../../assets/images/293399859_6014255531934980_2866254695672486007_n.jpg')}
					//src={product?.image}
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
							{product.name}
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
						<Typography
							variant="body2"
							className={
								product?.saleDescriptions?.[0]?.salePercent
									? styles.typical_price
									: styles.sale_price
							}
						>
							{formatMoneyWithDot(product.price)}
						</Typography>
						<Typography variant="body2" className={styles.sale_price}>
							{product?.saleDescriptions?.[0]?.salePercent
								? formatMoney(
									product?.price,
									product?.saleDescriptions?.[0]?.salePercent
								)
								: ''}
						</Typography>
					</Box>
					<Box sx={{ position: 'relative' }}>
						{product?.saleDescriptions?.[0]?.salePercent ? (
							<img
								src={require('../../assets/images/iconSale.png')}
								alt="sale_img"
							/>
						) : (
							''
						)}
						<Typography
							sx={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
							}}
						>
							{product?.saleDescriptions?.[0]?.salePercent}
							{product?.saleDescriptions?.[0]?.salePercent
								? '%'
								: ''}
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</>
	);
};

export default ProductItemService;
