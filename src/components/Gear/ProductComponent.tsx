import { Divider, styled, Typography, Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ProductItem from './Product';

import { getProductByServiceTypeAPI } from '../../services/index';
const TitleCustom = styled(Typography)(({ theme }) => ({
	position: 'relative',
	'&:after': {
		position: 'absolute',
		content: '""',
		background: '#1A6B96',
		width: 100,
		height: 5,
		bottom: -20,
		borderRadius: 4,
		left: '50%',
		transform: 'translateX(-50%)',
	},
}));
const ServicesComponent = () => {
	const { search } = useLocation();
	const [services, setServices] = React.useState<any>([]);
	const navigate = useNavigate();
	const id = search.split('?')[1];

	async function getProductByType(id: any) {
		const res = await getProductByServiceTypeAPI(id);
		if (res?.status === 200) {
			setServices(res?.data);
		}
	}

	useEffect(() => {
		getProductByType(id);
	}, [id]);
	useEffect(() => { }, []);
	return (
		<Box width="80%" m="auto">
			<TitleCustom
				variant="h4"
				fontWeight="700"
				align="center"
				mt={8}
				mb={16}
			>
				SẢN PHẨM
			</TitleCustom>
			<Typography variant="h5" fontWeight="700">
				{services[0]?.accessoryType?.name}
			</Typography>
			<Divider />
			<Box sx={{ flexGrow: 1, mb: 12, mt: 6 }}>
				<Grid container spacing={6}>
					{services.map((product: any) => (
						<Grid
							item
							xs={6}
							md={3}
							onClick={() =>
								navigate(`/gear/detail/?${product?.id}`)
							}
						>
							{ProductItem(product)}
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};
export default ServicesComponent;
