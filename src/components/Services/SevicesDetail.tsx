import React, { useEffect, useState } from 'react';
import { Box, Typography} from '@mui/material';
import TitleService from './TitleService';
import { useLocation } from 'react-router-dom';
import { getProductByIdAPI } from '../../services/index';
import styles from '../style.module.css';

export default function SevicesDetail() {
	const { search } = useLocation();
	const [services, setServices] = useState<any>([]);
	const description = services?.[0]?.description;
	const id = search.split('?')[1];

	async function getProductById(id: any) {
		const res = await getProductByIdAPI(id);
		if (res?.status === 200) {
			setServices(res?.data);
		}
	}

	useEffect(() => {
		getProductById(id);
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
			<TitleService services={services} />
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
