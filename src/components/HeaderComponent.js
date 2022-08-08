import React from 'react';
import { Box, Typography, Input, Avatar, Button, Popper } from '@mui/material';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { styled } from '@mui/material/styles';

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
export default function HeaderComponent() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isAnchorEl, setIsAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const handleClick1 = (event) => {
        setIsAnchorEl(isAnchorEl ? null : event.currentTarget);
    };
    const isOpen = Boolean(isAnchorEl);
    const open = Boolean(anchorEl);

    const id = open ? 'simple-popper' : undefined;
    const id1 = open ? 'simple-popper' : undefined;
    return (
        <Box>
            <BoxContainer>
                <BoxContentHeader>
                    <Button>
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
                        <ArrowDropDownIcon color="action" />
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
                        <TypographyeText>PHỤ KIỆN</TypographyeText>
                        <ArrowDropDownIcon color="action" />
                    </Button>
                </BoxContentHeader>
                <img src={require('../assets/images/Logo.png')} alt="Logo" />
                <BoxContentHeader>
                    <Button>
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
                    <Button>
                        <TypographyeText>ĐĂNG NHẬP</TypographyeText>
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
                    <Button>
                        <TypographyeText>ĐĂNG KÝ</TypographyeText>
                    </Button>
                </BoxContentHeader>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Box
                        sx={{
                            border: 1,
                            p: 1,
                            bgcolor: 'background.paper',
                            display: 'flex',
                            width: '870px',
                            height: '288px',
                            justifyContent: 'space-evenly',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)',
                        }}
                    >
                        <Box>
                            <TypographyeText
                                sx={{ marginBottom: '30px', marginTop: '20px' }}
                            >
                                GARAGE
                            </TypographyeText>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Thành Công
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Trần Ngoc
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Tấn Thịnh Vượng
                                </typographySelect>
                            </Box>
                        </Box>
                        <Box>
                            <TypographyeText
                                sx={{ marginBottom: '30px', marginTop: '20px' }}
                            >
                                GARAGE
                            </TypographyeText>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Thành Công
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Trần Ngoc
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Tấn Thịnh Vượng
                                </typographySelect>
                            </Box>
                        </Box>
                        <Box>
                            <TypographyeText
                                sx={{ marginBottom: '30px', marginTop: '20px' }}
                            >
                                GARAGE
                            </TypographyeText>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Thành Công
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Trần Ngoc
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Tấn Thịnh Vượng
                                </typographySelect>
                            </Box>
                        </Box>
                        <Box>
                            <TypographyeText
                                sx={{ marginBottom: '30px', marginTop: '20px' }}
                            >
                                GARAGE
                            </TypographyeText>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Thành Công
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Trần Ngoc
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Tấn Thịnh Vượng
                                </typographySelect>
                            </Box>
                        </Box>
                    </Box>
                </Popper>
                <Popper id={id1} open={isOpen} anchorEl={isAnchorEl}>
                    <Box
                        sx={{
                            border: 1,
                            p: 1,
                            bgcolor: 'background.paper',
                            display: 'flex',
                            width: '870px',
                            height: '288px',
                            justifyContent: 'space-evenly',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)',
                        }}
                    >
                        <Box>
                            <TypographyeText
                                sx={{ marginBottom: '30px', marginTop: '20px' }}
                            >
                                GARAGE
                            </TypographyeText>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Thành Công
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Trần Ngoc
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Tấn Thịnh Vượng
                                </typographySelect>
                            </Box>
                        </Box>
                        <Box>
                            <TypographyeText
                                sx={{ marginBottom: '30px', marginTop: '20px' }}
                            >
                                GARAGE
                            </TypographyeText>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Thành Công
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Trần Ngoc
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Tấn Thịnh Vượng
                                </typographySelect>
                            </Box>
                        </Box>
                        <Box>
                            <TypographyeText
                                sx={{ marginBottom: '30px', marginTop: '20px' }}
                            >
                                GARAGE
                            </TypographyeText>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Thành Công
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Trần Ngoc
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Tấn Thịnh Vượng
                                </typographySelect>
                            </Box>
                        </Box>
                        <Box>
                            <TypographyeText
                                sx={{ marginBottom: '30px', marginTop: '20px' }}
                            >
                                GARAGE
                            </TypographyeText>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Thành Công
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Trần Ngoc
                                </typographySelect>
                            </Box>
                            <Box sx={{ marginBottom: '15px' }}>
                                <typographySelect>
                                    Garage Tấn Thịnh Vượng
                                </typographySelect>
                            </Box>
                        </Box>
                    </Box>
                </Popper>
            </BoxContainer>
            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: ' rgba(135, 193, 248, 0.5)',
                    width: '85%',
                    margin: '0 auto',
                    padding: '0 20px',
                }}
            >
                {arrLogo.map((item, index) => (
                    <img src={item?.image} />
                ))}
            </Box>
        </Box>
    );
}

const BoxContainer = styled(Box)({
    width: '85%',
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
    width: '600px',
});
const TypographyeText = styled(Typography)({
    fontSize: '18px',
    fontWeight: '500',
    color: '#000000',
});

const typographySelect = styled(Typography)({
    fontSize: '15px',
    fontWeight: '400',
    color: '#000000',
    marginBottom: '15px',
});
