import React, { useState } from 'react';
import { Box, Typography, Input, Avatar, Button, Popper } from '@mui/material';

import Grid from '@mui/material/Grid';

import ProductInCart from './ProductInCart';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormDatePicker from './FormDatePicker';

import { getUserInfoV2, createCartAPI } from '../../services/index';

import formatMoneyWithDot from '../../constants/until';
export default function Cart() {
    const storageItems = JSON.parse(localStorage.getItem('items') as any);
    const [items, setItems] = useState(storageItems || []);
    const [change, setChange] = useState(false);
    const [open, setOpen] = useState(false);
    const [services, setServices] = useState([]);
    const [didEmail, setDidEmail] = React.useState(false);

    const [totalPrice, setTotalPrice] = useState(
        items?.reduce((a: any, b: any) => a + b?.price * b?.quantity, 0)
    );

    const navigate = useNavigate();
    useEffect(() => {
        setTotalPrice(items?.reduce((a: any, b: any) => a + b?.price * b?.quantity, 0));
    }, [change, items]);

    const checkLogin = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    };

    const [idUser, setIdUser] = useState();

    const getUserInfo = async () => {
        const response = await getUserInfoV2();
        if (response.status === 200) {
            setIdUser(response?.data?._id);
        } else {
            setIdUser(null as any);
        }
    };

    useEffect(() => {
        checkLogin();
        getUserInfo();
    }, []);

    const createCartAction = async (body: any) => {
        const res = await createCartAPI(body);
        if (res?.status === 200) {
            localStorage.removeItem('items');
            navigate('/');
        } else {
            console.log(res?.data);
        }
    };

    const createCartMain = () => {
        const products = items
            ?.filter((value: any) => value?.type === 'gear')
            .map((value: any) => ({
                productId: value?._id,

                productPrice: value?.price,
                quantity: value?.quantity,
            }));

        const services = items
            ?.filter((value: any) => value?.type === 'service')
            .map((value: any) => ({
                serviceId: value?._id,
                serviceName: value?.name,
                servicePrice: value?.price,
                quantity: value?.quantity,
            }));

        if (services?.length && !didEmail) {
            setServices(services);
            setOpen(true);
        } else {
            setOpen(false);
            const body = {
                idUser: idUser,
                totalPrice: totalPrice,
                products: products,
                services: services,
            };

            createCartAction(body);
        }
    };

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
                    GIỎ HÀNG
                </Typography>
            </Box>
            <Box
                width="80.4%"
                m="auto"
                sx={{ display: 'flex', justifyContent: 'space-evenly' }}
            >
                <Box
                    width="20%"
                    sx={{
                        border: '1px solid #DEDEDE',
                        height: '81px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
                        Sản phẩm
                    </Typography>
                </Box>
                <Box
                    width="40%"
                    sx={{
                        border: '1px solid #DEDEDE',
                        height: '81px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
                        Tên sản phẩm
                    </Typography>
                </Box>
                <Box
                    width="15%"
                    sx={{
                        border: '1px solid #DEDEDE',
                        height: '81px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
                        Số lượng
                    </Typography>
                </Box>
                <Box
                    width="15%"
                    sx={{
                        border: '1px solid #DEDEDE',
                        height: '81px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
                        Giá tiền
                    </Typography>
                </Box>
                <Box
                    width="10%"
                    sx={{
                        border: '1px solid #DEDEDE',
                        height: '81px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
                        Xóa
                    </Typography>
                </Box>
            </Box>
            {items?.map((item: any) => (
                <ProductInCart
                    item={item}
                    setItems={setItems}
                    items={items}
                    setChange={setChange}
                    change={change}
                />
            ))}

            <Box
                width="80.4%"
                m="auto"
                sx={{ display: 'flex', justifyContent: 'space-evenly' }}
            >
                <Box
                    width="75%"
                    sx={{
                        border: '1px solid #DEDEDE',
                        height: '81px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
                        Tổng tiền:
                    </Typography>
                </Box>
                <Box
                    width="15%"
                    sx={{
                        border: '1px solid #DEDEDE',
                        height: '81px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
                        {formatMoneyWithDot(totalPrice)}
                    </Typography>
                </Box>
                <Box
                    width="10%"
                    sx={{
                        border: '1px solid #DEDEDE',
                        height: '81px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        sx={{ fontSize: '20px', fontWeight: '700' }}
                    ></Typography>
                </Box>
            </Box>
            <Box
                width="80.4%"
                m="auto"
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '50px',
                }}
            >
                <Button
                    className="btnPay"
                    sx={{
                        width: '200px',
                        height: '49px',
                        backgroundColor: '#EC2424',
                        borderRadius: '11px',
                    }}
                    onClick={createCartMain}
                >
                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#FFFFFF',
                        }}
                    >
                        Thanh toán
                    </Typography>
                </Button>
            </Box>
            <Grid item={true} md={12}></Grid>
            <FormDatePicker
                open={open}
                setOpen={setOpen}
                services={services}
                setDidEmail={setDidEmail}
            />
        </Box>
    );
}
