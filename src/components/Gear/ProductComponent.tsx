import { useCallback, useEffect, useState } from 'react';
import { filter } from 'lodash';
import { Divider, styled, Typography, Box, Grid, Autocomplete, TextField, InputAdornment } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductItem from './Product';
import SearchIcon from '@mui/icons-material/Search';

import { getProductByAccessoryTypeAPI, getAllManufacturerAPI, getProductByManufacturerAndAccessoryTypeAPI } from '../../services/index';

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
	const [manufacturer, setManufacturer] = useState<string>("");
	const [services, setServices] = useState<any>([]);
	const [listManufacturer, setListManufacturer] = useState<any>([]);
	const navigate = useNavigate();
	const id = search.split('?')[1];

	const [order] = useState("ASC");
	const [orderBy] = useState("name");
	const [filterQuery, setFilterQuery] = useState("");

	async function getProductByType(id: any) {
		const res = await getProductByAccessoryTypeAPI(id);
		if (res?.status === 200) {
			setServices(res?.data);
		}
	}

	async function getListManufacturer() {
		const res = await getAllManufacturerAPI();
		if (res?.status === 200) {
			const newList = res?.data?.map((value: any) => ({
				id: value?.id,
				label: value?.name
			}))
			setListManufacturer(newList)
		};
	}

	const getProductByManufacturerAndAcessoryType = useCallback(async (manufacturer: string) => {
		const res = await getProductByManufacturerAndAccessoryTypeAPI(id, manufacturer);
		if (res?.status === 200) {
			setServices(res?.data);
		}
	}, [id])


	useEffect(() => {
		getProductByType(id);
	}, [id]);

	useEffect(() => {
		getListManufacturer();
	}, [])

	useEffect(() => {
		getProductByManufacturerAndAcessoryType(manufacturer)
	}, [getProductByManufacturerAndAcessoryType, manufacturer])

	const onManufacturerChange = (_: any, value: any,) => {
		setManufacturer(value?.id);
	}

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
			<div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
				<Typography variant="h5" fontWeight="700" style={{display: "flex", alignItems: 'center'}}>
					<span>{services[0]?.accessoryType?.name}</span>
					<TextField
						id="outlined-basic"
						variant="outlined"
						value={filterQuery}
						onChange={onFilterQuery}
						sx={{ml: 2}}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				</Typography>
				<div style={{ display: "flex", alignItems: "center" }}>
					<h4>Hãng sản xuất</h4>
					<Autocomplete
						options={listManufacturer}
						sx={{ width: 300, ml: 2 }}
						onChange={onManufacturerChange}
						renderInput={(params) => <TextField {...params} label="Manufacturer" />}
					/>
				</div>
			</div>
			<Divider />
			<Box sx={{ flexGrow: 1, mb: 12, mt: 6 }}>
				<Grid container spacing={6}>
					{listServivesToShow.map((product: any) => (
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
