import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import TitleGearDetail from './TitleGearDetail';

import {useLocation } from 'react-router-dom';
import { getProductByIdAPI } from '../../services/index';
import styles from '../style.module.css'

export default function GearDetail() {
	const { search } = useLocation();
	const [product, setProduct] = React.useState<any>([]);
	const description = product?.[0]?.productDescriptions;
	const id = search.split('?')[1];

	async function getProductByID(id: any) {
		const res = await getProductByIdAPI(id);
		if (res?.status === 200) {
			setProduct(res?.data);
		}
	}

	useEffect(() => {
		getProductByID(id);
	}, [id]);

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
					GARAGE ENMASYS
				</Typography>
			</Box>
			<Box
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginBottom: '133px',
				}}
			>
				<Box
					style={{
						width: '163px',
						height: '7px',
						backgroundColor: '#1A6B96',
						borderRadius: '20px',
					}}
				/>
			</Box>
			<TitleGearDetail product={product?.[0]} />
			<Box width="80%" m="auto">
				{description?.map((value: any) => (
					<Typography key={value._id} className={styles.value?.type}>
						{value.content}
					</Typography>
				))}
			</Box>
		</Box>
	);
}
