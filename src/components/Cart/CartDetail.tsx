import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import formatMoneyWithDot from '../../constants/until';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import KeyboardArrowUpIcon from '@mui/icons-material/ArrowDownward';
import KeyboardArrowDownIcon from '@mui/icons-material/ArrowUpward';

// import

import {
    getCartByIdAPI,
    getCartDescriptionAPI,
    deleteCartByIdAPI,
    confirmCartByIdAPI,
    getUserInfoV2,
    deleteCardAPI,
} from '../../services/index';

function createData(
    name: any,
    calories: any,
    fat: any,
    carbs: any,
    protein: any,
    price: any,
    status: any,
    history: any
) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        status,
        history,
    };
}

function Row(props: any) {
    const { row, getCartById, idUser } = props;
    const [open, setOpen] = React.useState(false);
    const [item, setItem] = useState<any>([]);
    const [totalPirceCartmsets, setTotalPirceCartmsets] = useState(0);

    const [openDialog, setOpenDialog] = useState(false);

    function formatDate(str: any) {
        const date = str.split('T');
        const day = date[0].split('-');
        return day[2] + '/' + day[1] + '/' + day[0];
    }

    useEffect(() => {
        const priceServices =
            item?.services?.reduce(
                (a: any, b: any) => a + b?.quantity * b?.serviceId?.price,
                0
            ) || 0;
        const priceProduct =
            item?.products?.reduce(
                (a: any, b: any) => a + b?.quantity * b?.productId?.price,
                0
            ) || 0;
        const priceProductAdd =
            item?.productAdd?.reduce(
                (a: any, b: any) => a + b?.quantity * b?.productId?.price,
                0
            ) || 0;
        setTotalPirceCartmsets(priceServices + priceProduct + priceProductAdd);
    }, [item]);

    const getCartDescription = async (id: any) => {
        try {
            const res = await getCartDescriptionAPI(id);
            setItem(res?.data);
        } catch (error) {}
    };
    const confirmCartById = async (id: any, afterPrice: any) => {
        const body = {
            id: id,
            newPrice: afterPrice,
        };

        try {
            const res = await confirmCartByIdAPI(body);
            setItem(res?.data);
            getCartById(idUser);
        } catch (error) {}
    };

    const deleteCartById = async (id: any) => {
        try {
            const res = await deleteCartByIdAPI(id);
            setItem(res?.data);
        } catch (error) {}
    };

    const handleConfirm = (id: any, afterPrice: any) => {
        setOpen(!open);
        confirmCartById(id, afterPrice);
    };

    const handleDelete = (id: any) => {
        setOpen(!open);
        deleteCartById(id);
    };

    const handleClick = () => {
        setOpen(!open);
        getCartDescription(row?.cartId);
    };

    const handleCancelOrder = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleDeleteOrder = async (id: any) => {
        try {
            const res = await deleteCardAPI(id);
            console.log(res);
        } catch (error) {}
    };

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={handleClick}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row?.cartId}
                </TableCell>
                <TableCell align="center">
                    {formatDate(row?.createAt)}
                </TableCell>
                <TableCell align="center">
                    {row?.statusId?.statusName}
                </TableCell>
                <TableCell align="center">
                    {formatMoneyWithDot(row?.totalPrice)}
                </TableCell>
                {/*{row?.statusId?.statusName !== 'Hoàn tất' && (
                    <TableCell>
                        <Button onClick={() => handleCancelOrder(row?.cardId)}>
                            Hủy
                        </Button>
                    </TableCell>
                )}*/}
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        {item?.products?.length > 0 ? (
                            <Box sx={{ margin: 4 }}>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                >
                                    Sản phẩm
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Tên sản phẩm</TableCell>
                                            <TableCell align="center">
                                                Số lượng
                                            </TableCell>
                                            <TableCell align="right">
                                                Giá tiền
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {item?.products?.map((value: any) => (
                                            <TableRow>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    sx={{ width: '400px' }}
                                                >
                                                    {value?.productId?.name}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {value?.quantity}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {formatMoneyWithDot(
                                                        value?.productPrice *
                                                            value?.quantity
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        ) : null}
                        {item?.services?.length > 0 ? (
                            <Box sx={{ margin: 4 }}>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                >
                                    Dịch vụ
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Tên sản phẩm</TableCell>
                                            <TableCell align="center">
                                                Số lượng
                                            </TableCell>
                                            <TableCell align="right">
                                                Giá tiền
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {item?.services?.map((value: any) => (
                                            <TableRow>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    sx={{ width: '400px' }}
                                                >
                                                    {value?.serviceId?.name}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {value?.quantity}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {formatMoneyWithDot(
                                                        value?.servicePrice *
                                                            value?.quantity
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        ) : null}
                        {item?.productAdd?.length > 0 ? (
                            <Box sx={{ margin: 4 }}>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                >
                                    Dịch vụ sau kiểm tra
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Tên sản phẩm</TableCell>
                                            <TableCell align="center">
                                                Số lượng
                                            </TableCell>
                                            <TableCell align="right">
                                                Giá tiền
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {item?.productAdd?.map((value: any) => (
                                            <TableRow>
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                    sx={{ width: '400px' }}
                                                >
                                                    {value?.productId?.name}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {value?.quantity}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {formatMoneyWithDot(
                                                        value?.productId
                                                            ?.price *
                                                            value?.quantity
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        ) : null}
                        {item?.productAdd?.length > 0 ? (
                            <Box
                                width="100%"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    margin: '30px 0px ',
                                }}
                            >
                                <Box
                                    sx={{
                                        fontWeight: 'bold',
                                        alignSelf: 'end',
                                    }}
                                >
                                    Tổng tiền sau:{'   '}
                                </Box>
                                <Box
                                    sx={{
                                        mr: 4,
                                        ml: 2,
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        color: 'red',
                                    }}
                                >
                                    {formatMoneyWithDot(totalPirceCartmsets)}
                                </Box>
                            </Box>
                        ) : null}
                        {item?.productAdd?.length > 0 ? (
                            <Box
                                width="100%"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    margin: '30px 10px ',
                                }}
                            >
                                <Button
                                    onClick={() =>
                                        handleConfirm(
                                            item?._id,
                                            totalPirceCartmsets
                                        )
                                    }
                                >
                                    Xác nhận
                                </Button>
                                <Button onClick={() => handleDelete(item?._id)}>
                                    Huỷ
                                </Button>
                            </Box>
                        ) : null}
                    </Collapse>
                </TableCell>
            </TableRow>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Xác nhận hủy đơn hàng?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Bạn chắc chắn muốn hủy đơn hàng này chứ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy bỏ</Button>
                    <Button onClick={handleDeleteOrder} autoFocus>
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default function CollapsibleTable() {
    const [rows, setRows] = useState([]);
    const [idUser, setIdUser] = useState();

    const getUserInfo = useCallback(async () => {
			const response = await getUserInfoV2();
			if (response.status === 200) {
					setIdUser(response?.data?.idCardNumber);
					getCartById(response?.data?.idCardNumber);
			} else {
					setIdUser(null as any);
			}
	}, []);

    const getCartById = async (id: any) => {
        try {
            const res = await getCartByIdAPI(id);
            setRows(res?.data);
        } catch (error) {}
    };

    useEffect(() => {
        getUserInfo();
        getCartById(idUser); //????
    }, [getUserInfo, idUser]);

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
                    ĐƠN HÀNG ĐÃ ĐẶT
                </Typography>
            </Box>
            <Box width="80.4%" m="auto">
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Mã đơn hàng</TableCell>
                                <TableCell align="center">Tạo lúc</TableCell>
                                <TableCell align="center">Trạng thái</TableCell>
                                <TableCell align="center">Giá </TableCell>
                                <TableCell align="center" />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows?.map((row: any) => (
                                <Row
                                    key={row?.cartId}
                                    row={row}
                                    getCartById={getCartById}
                                    idUser={idUser}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}
