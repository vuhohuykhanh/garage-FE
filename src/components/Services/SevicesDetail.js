import React, { useEffect, useState } from 'react';
import { Box, Typography, Input, Avatar, Button, Popper } from '@mui/material';
import { styled } from '@mui/material/styles';
import TitleService from './TitleService';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getAServiceByIDAPI } from '../../services/index';

export default function SevicesDetail() {
    const { search } = useLocation();
    const [services, setServices] = React.useState([]);
    const description = services?.[0]?.description;
    const navigate = useNavigate();
    const id = search.split('?')[1];

    async function getAServiceByID(id) {
        const res = await getAServiceByIDAPI(id);
        if (res?.status === 200) {
            setServices(res?.data);
        }
    }

    useEffect(() => {
        getAServiceByID(id);
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
                {description?.map((value) => (
                    <Typography key={value._id} className={value.type}>
                        {value.content}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
}
