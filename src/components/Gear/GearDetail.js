import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import TitleGearDetail from './TitleGearDetail';

import { useNavigate, useLocation } from 'react-router-dom';
import { getProductByIDAPI } from '../../services/index';

export default function GearDetail() {
    const { search } = useLocation();
    const [product, setProduct] = React.useState([]);
    const description = product?.[0]?.description;
    const id = search.split('?')[1];

    async function getProductByID(id) {
        const res = await getProductByIDAPI(id);
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
                    {/* {product?.[0]?.productTypeId?.productTypeName} */}
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
                {description?.map((value) => (
                    <Typography key={value._id} className={value.type}>
                        {value.content}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
}
