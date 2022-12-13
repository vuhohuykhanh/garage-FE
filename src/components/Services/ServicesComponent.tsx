import { Divider, styled, Typography, Box, Grid, TextField, InputAdornment } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductItem from './ProductItemServices';
import { getProductByServiceTypeAPI } from '../../services/index';
import SearchIcon from '@mui/icons-material/Search';
import { filter } from 'lodash';

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


	const [order] = useState("ASC");
	const [orderBy] = useState("name");
	const [filterQuery, setFilterQuery] = useState("");

	async function getProductByServiveType(id: any) {
		const res = await getProductByServiceTypeAPI(id);
		if (res?.status === 200) {
			setServices(res?.data);
		}
	}

	useEffect(() => {
		getProductByServiveType(id);
	}, [id]);

	function descendingComparator(a: any, b: any, orderBy: any) {
		if (b[orderBy] < a[orderBy]) {
			return -1;
		}
		if (b[orderBy] > a[orderBy]) {
			return 1;
		}
		return 0;
	}

	function getComparator(order: any, orderBy: any) {
		return order === 'desc'
			? (a: any, b: any) => descendingComparator(a, b, orderBy)
			: (a: any, b: any) => -descendingComparator(a, b, orderBy);
	}

	function applySortFilter(array: any, comparator: any, query: any) {
		const stabilizedThis = array?.map((el: any, index: number) => [el, index]);
		stabilizedThis?.sort((a: any, b: any) => {
			const order = comparator(a[0], b[0]);
			if (order !== 0) return order;
			return a[1] - b[1];
		});
		if (query) {
			return filter(array, (_user: any) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
		}
		return stabilizedThis?.map((el: any) => el[0]);
	}

	const onFilterQuery = (event: any) => {
		setFilterQuery(event.target.value);
	}

	const listServivesToShow = applySortFilter(services, getComparator(order, orderBy), filterQuery);

	return (
		<>
			<TitleCustom
				variant="h4"
				fontWeight="700"
				align="center"
				mt={8}
				mb={16}
			>
				DỊCH VỤ
			</TitleCustom>
			<div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
				<Typography variant="h5" fontWeight="700">
					<span>{services[0]?.serviceType?.name}</span>
				</Typography>
				<TextField
					id="outlined-basic"
					variant="outlined"
					value={filterQuery}
					onChange={onFilterQuery}
					sx={{ mb: 2 }}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>
			</div>
			<Divider />
			<Box sx={{ flexGrow: 1, mb: 12, mt: 6 }}>
				<Grid container spacing={6}>
					{listServivesToShow?.map((service: any) => (
						<Grid
							item
							xs={6}
							md={3}
							onClick={() =>
								navigate(
									`/services/detail/?${service?.id}`
								)
							}
							key={service.serviceId}
						>
							{ProductItem(service)}
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};
export default ServicesComponent;
