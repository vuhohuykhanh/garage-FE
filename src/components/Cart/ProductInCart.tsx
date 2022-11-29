import React, { useState, useCallback } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

import formatMoneyWithDot from '../../assets/constants/until';

export default function ProductInCart({
	item,
	setItems,
	items,
	setChange,
	change,
}: any) {
	const [quantity, setQuantity] = useState<number>(item?.quantity);

	const handleChangeQuantity = useCallback((quantityProps: number) => {
		if (quantityProps > item?.stock) {
			setQuantity(item?.stock);
		} else {
			setQuantity(quantityProps)
			const listNewItems = items.map((value: any) => {
				if (value.id === item?.id) {
					value.quantity = quantityProps;
				}
				return value;
			});
			setItems(listNewItems);
		}
	}, [item?.id, item?.stock, items, setItems])

	const handleIncrease = () => {
		handleChangeQuantity(quantity + 1);
	};

	const handleDecrease = () => {
		if (quantity > 1) {
			handleChangeQuantity(quantity - 1);
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
	//	//setChange(!change);
	//	if (quantity > item?.stock) {
	//		setQuantity(item?.stock);
	//	} else {
	//		const listNewItems = items.map((value: any) => {
	//			if (value.id === item?.id) {
	//				value.quantity = quantity;
	//			}
	//			return value;
	//		});
	//		console.log('listNewItems', listNewItems);
	//		//setItems(listNewItems);
	//	}
	//}, [change, item?.id, item?.stock, items, quantity, setChange, setItems]);

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
						value={quantity}
						onChange={(e) => {
							if (e.target.value > item?.stock) {
								handleChangeQuantity(item?.stock);
							}
							else if (Number(e.target.value) < 1) {
								handleChangeQuantity(1);
							}
							else {
								handleChangeQuantity(Number(e.target.value));
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
