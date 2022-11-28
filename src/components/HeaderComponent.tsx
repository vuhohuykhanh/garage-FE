import React, { useEffect, useState } from 'react';
import { Box, Typography, Input, Avatar, Button, Popper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { getAllServiceTypeAPI, getAllAccessoryTypeAPI } from '../services/index';
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const arrLogo = [
    {
        image: require('../assets/images/honda1.png'),
    },
    {
        image: require('../assets/images/honda2.png'),
    },
    {
        image: require('../assets/images/honda3.png'),
    },
    {
        image: require('../assets/images/honda4.png'),
    },
    {
        image: require('../assets/images/honda5.png'),
    },
    {
        image: require('../assets/images/honda6.png'),
    },
    {
        image: require('../assets/images/honda9.png'),
    },
    {
        image: require('../assets/images/honda10.png'),
    },
    {
        image: require('../assets/images/honda11.png'),
    },
];
export default function HeaderComponent({ userInfo, setUserInfo }: any) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isAnchorEl, setIsAnchorEl] = React.useState(null);

    const [anchorElProfile, setAnchorElProfile] = React.useState(null);
    const [services, setServices] = React.useState([]);
    const [product, setProduct] = React.useState([]);
    const navigate = useNavigate();

    async function getAllService() {
        const res = await getAllServiceTypeAPI();
        if (res?.status === 200) {
            setServices(res?.data);
        }
        const res1 = await getAllAccessoryTypeAPI();
        if (res1?.status === 200) {
            setProduct(res1?.data);
        }
    }
    useEffect(() => {
        getAllService();
    }, []);

    const handleClick = (event: any) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        setIsAnchorEl(null);
    };
    const handleClick1 = (event: any) => {
        setAnchorEl(null);
        setIsAnchorEl(isAnchorEl ? null : event.currentTarget);
    };

    const handleMenu = () => {
        setAnchorElProfile(true as any);
    };

    const handleClose = () => {
        setAnchorElProfile(null);
    };

    const handleInfo = () => {
        navigate('/infor');
        setAnchorElProfile(null);
    };

    const handleCartDetail = () => {
        navigate('/cartDetail');
        setAnchorElProfile(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setAnchorElProfile(false as any);
        setUserInfo(null);
        navigate('/login');
    };

    const isOpen = Boolean(isAnchorEl);
    const open = Boolean(anchorEl);

    const id = open ? 'simple-popper' : undefined;
    const id1 = open ? 'simple-popper' : undefined;

    return (
        <Box>
            <BoxContainer>
                <BoxContentHeader>
                    <Button onClick={() => navigate('/')}>
                        <TypographyeText>Trang chủ</TypographyeText>
                    </Button>
                    <Box
                        style={{
                            borderRight: '2px solid #A0A0A0',
                            width: '1px',
                            color: '#FFFFFF',
                        }}
                    >
                        1
                    </Box>
                    <Button onClick={handleClick}>
                        <TypographyeText>Dịch vụ</TypographyeText>
                        {/* <ArrowDropDownIcon color="action" /> */}
                    </Button>
                    <Box
                        style={{
                            borderRight: '2px solid #A0A0A0',
                            width: '1px',
                            color: '#FFFFFF',
                        }}
                    >
                        1
                    </Box>
                    <Button onClick={handleClick1}>
                        <TypographyeText>PHỤ KIỆN</TypographyeText>
                        {/* <ArrowDropDownIcon color="action" /> */}
                    </Button>
                </BoxContentHeader>
                <Box className="headerLogo" onClick={() => navigate('/')}>
                    <img
                        src={require('../assets/images/Logo.png')}
                        alt="Logo"
                    />
                </Box>
                <BoxContentHeader>
                    <Button onClick={() => navigate('/cart')}>
                        <TypographyeText>GIỎ HÀNG</TypographyeText>
                    </Button>
                    <Box
                        style={{
                            borderRight: '2px solid #A0A0A0',
                            width: '1px',
                            color: '#FFFFFF',
                        }}
                    >
                        1
                    </Box>
                    {userInfo?.idCardNumber ? (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <TypographyeText>Xin chào : </TypographyeText>
                            <Button>{userInfo.name}</Button>
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    sx={{ ml: '-150px', mt: '50px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElProfile}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElProfile)}
                                    onClose={handleClose}
                                    className="header_menuUser"
                                >
                                    <MenuItem
                                        className="header_menuUser-item"
                                        onClick={handleInfo}
                                    >
                                        Trang cá nhân
                                    </MenuItem>
                                    <MenuItem
                                        className="header_menuUser-item"
                                        onClick={handleCartDetail}
                                    >
                                        Quản lý đơn hàng
                                    </MenuItem>
                                    <MenuItem
                                        className="header_menuUser-item"
                                        onClick={handleLogout}
                                    >
                                        Đăng xuất
                                    </MenuItem>
                                </Menu>
                            </div>
                        </Box>
                    ) : (
                        <Button onClick={() => navigate('/login')}>
                            <TypographyeText>ĐĂNG NHẬP</TypographyeText>
                        </Button>
                    )}

                    {!userInfo?.idCardNumber && (
                        <Button onClick={() => navigate('/register')}>
                            <TypographyeText>ĐĂNG KÝ</TypographyeText>
                        </Button>
                    )}
                </BoxContentHeader>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Box
                        sx={{
                            border: 1,
                            p: 1,
                            bgcolor: 'background.paper',
                            minWidth: '470px',
                            maxWidth: '670px',
                            minHeight: '120px',
                            // maxHeight: "200px",
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)',
                        }}
                    >
                        <TypographyeText
                            sx={{
                                margin: '30px',
                                fontWeight: 'bold',
                                fontSize: '24px',
                            }}
                        >
                            DỊCH VỤ
                        </TypographyeText>
                        <Box
                            mb={3}
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-evenly',
                            }}
                        >
                            {services?.map((e: any) => (
                                <Box
                                    key={e?.id}
                                    className="header-list"
                                    onClick={() => {
                                        navigate(
                                            `/services/?${e?.id}`
                                        );
                                        setAnchorEl(null);
                                    }}
                                    sx={{ marginBottom: '15px', width: '40%' }}
                                >
                                    <TypographySelect>
                                        {e?.name}
                                    </TypographySelect>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Popper>
                <Popper id={id1} open={isOpen} anchorEl={isAnchorEl}>
                    <Box
                        sx={{
                            border: 1,
                            p: 1,
                            bgcolor: 'background.paper',
                            minWidth: '470px',
                            maxWidth: '670px',
                            minHeight: '120px',
                            // maxHeight: "200px",
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)',
                        }}
                    >
                        <TypographyeText
                            sx={{
                                margin: '30px',
                                fontWeight: 'bold',
                                fontSize: '24px',
                            }}
                        >
                            SẢN PHẨM
                        </TypographyeText>
                        <Box
                            mb={3}
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-evenly',
                            }}
                        >
                            {product?.map((e: any) => (
                                <Box
                                    key={e?.id}
                                    className="header-list"
                                    onClick={() => {
                                        navigate(`/gear/?${e?.id}`);
                                        setIsAnchorEl(null);
                                    }}
                                    sx={{ marginBottom: '15px', width: '40%' }}
                                >
                                    <TypographySelect>
                                        {e?.name}
                                    </TypographySelect>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Popper>
            </BoxContainer>
            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: ' rgba(135, 193, 248, 0.5)',
                    width: '78%',
                    margin: '0 auto',
                    padding: '0 20px',
                }}
            >
                {arrLogo.map((item, index) => (
                    <img key={index} src={item?.image} alt="detailImage" />
                ))}
            </Box>
        </Box>
    );
}

const BoxContainer = styled(Box)({
    width: '80%',
    height: '94px',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
});

const BoxContentHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '450px',
});
const TypographyeText = styled(Typography)({
    fontSize: '18px',
    fontWeight: '500',
    color: '#000000',
});

const TypographySelect = styled(Typography)({
    fontSize: '15px',
    fontWeight: '400',
    color: '#000000',
    marginBottom: '15px',
});
