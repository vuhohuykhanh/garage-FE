import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

import formatMoneyWithDot from '../../assets/constants/until';

export default function ProductInCart({
	item,
	setItems,
	items,
	setChange,
	change,
}: any) {
	const [quantity, setQuantity] = useState(item?.quantity);

	const handleIncrease = () => {
		setQuantity(quantity + 1);
	};

	const handleDecrease = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const handleDeleteItem = () => {
		const newItems = items?.filter(
			(value: any) => value.id !== item?.id
		);
		localStorage.setItem('items', JSON.stringify(newItems));
		setItems(newItems);
		setChange(!change);
	};

	//useEffect(() => {
	//	setChange(!change);
	//	if (quantity > item?.stock) {
	//		setQuantity(item?.stock);
	//	} else {
	//		const listNewItems = items.map((value: any) => {
	//			if (value.productId === item?.productId) {
	//				value.quantity = quantity;
	//			}
	//			return value;
	//		});
	//		setItems(listNewItems);
	//	}
	//}, [change, item?.productId, item?.stock, items, quantity, setChange, setItems]);

	return (
		<Box
			width="80.4%"
			m="auto"
			sx={{ display: 'flex', justifyContent: 'space-evenly' }}
		>
			<Box
				width="20%"
				sx={{
					border: '1px solid #DEDEDE',
					height: '180px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<img
					width="150px"
					height="130px"
					src={item?.img || require('../../assets/images/bg1.png')}
					alt="detailImage"
				/>
			</Box>
			<Box
				width="40%"
				sx={{
					border: '1px solid #DEDEDE',
					height: '180px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
					{item?.name}
				</Typography>
			</Box>
			{item?.type === 'service' ? (
				<Box
					width="15%"
					sx={{
						border: '1px solid #DEDEDE',
						height: '180px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{quantity}
				</Box>
			) : (
				<Box
					width="15%"
					sx={{
						border: '1px solid #DEDEDE',
						height: '180px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Button
						sx={{ padding: 0, minWidth: '50px' }}
						onClick={handleDecrease}
					>
						-
					</Button>
					<TextField
						type="number"
						color="secondary"
						value={quantity || 1}
						onChange={(e) => {
							if (e.target.value > item?.stock) {
								setQuantity(item?.stock);
							} else {
								setQuantity(e.target.value);
							}
						}}
					/>
					<Button
						sx={{ padding: 0, minWidth: '50px' }}
						onClick={handleIncrease}
					>
						+
					</Button>
				</Box>
			)}

			<Box
				width="15%"
				sx={{
					border: '1px solid #DEDEDE',
					height: '180px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{formatMoneyWithDot(item?.price)}
			</Box>
			<Box
				width="10%"
				sx={{
					border: '1px solid #DEDEDE',
					height: '180px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Button onClick={handleDeleteItem}>
					<img
						width="35px"
						height="35px"
						src={require('../../assets/images/deleteIcon.png')}
						alt="detailImage"
					/>
				</Button>
			</Box>
		</Box>
	);
}
