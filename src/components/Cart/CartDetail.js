import React, { useState, useEffect } from 'react';
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
import formatDate from '../../constants/until';

import KeyboardArrowUpIcon from '@mui/icons-material/ArrowDownward';
import KeyboardArrowDownIcon from '@mui/icons-material/ArrowUpward';

// import

import {
  getCartByIdAPI,
  getCartDescriptionAPI,
  deleteCartByIdAPI,
  confirmCartByIdAPI,
  getUserInfoV2,
} from '../../services/index';

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
  price,
  status,
  history
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

function Row(props) {
  const { row, getCartById, idUser } = props;
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = useState([]);
  const [totalPirceCartmsets, setTotalPirceCartmsets] = useState(0);

  function formatDate(str) {
    const date = str.split('T');
    const day = date[0].split('-');
    return day[2] + '/' + day[1] + '/' + day[0];
  }

  useEffect(() => {
    const priceServices =
      item?.services?.reduce(
        (a, b) => a + b?.quantity * b?.serviceId?.price,
        0
      ) || 0;
    const priceProduct =
      item?.products?.reduce(
        (a, b) => a + b?.quantity * b?.productId?.price,
        0
      ) || 0;
    const priceProductAdd =
      item?.productAdd?.reduce(
        (a, b) => a + b?.quantity * b?.productId?.price,
        0
      ) || 0;
    setTotalPirceCartmsets(priceServices + priceProduct + priceProductAdd);
  }, [item]);

  const getCartDescription = async (id) => {
    try {
      const res = await getCartDescriptionAPI(id);
      setItem(res?.data);
    } catch (error) {}
  };
  const confirmCartById = async (id, afterPrice) => {
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

  const deleteCartById = async (id) => {
    try {
      const res = await deleteCartByIdAPI(id);
      setItem(res?.data);
    } catch (error) {}
  };

  const handleConfirm = (id, afterPrice) => {
    setOpen(!open);
    confirmCartById(id, afterPrice);
  };

  const handleDelete = (id) => {
    setOpen(!open);
    deleteCartById(id);
  };

  const handleCick = () => {
    setOpen(!open);
    getCartDescription(row?.cartId);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={handleCick}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row?.cartId}
        </TableCell>
        <TableCell align="center">{formatDate(row?.createAt)}</TableCell>
        <TableCell align="center">{row?.statusId?.statusName}</TableCell>
        <TableCell align="center">
          {formatMoneyWithDot(row?.totalPrice)}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {item?.products?.length > 0 ? (
              <Box sx={{ margin: 4 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Sản phẩm
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tên sản phẩm</TableCell>
                      <TableCell align="center">Số lượng</TableCell>
                      <TableCell align="right">Giá tiền</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item?.products?.map((value) => (
                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ width: '400px' }}
                        >
                          {value?.productId?.name}
                        </TableCell>
                        <TableCell align="center">{value?.quantity}</TableCell>
                        <TableCell align="right">
                          {formatMoneyWithDot(
                            value?.productPrice * value?.quantity
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
                <Typography variant="h6" gutterBottom component="div">
                  Dịch vụ
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tên sản phẩm</TableCell>
                      <TableCell align="center">Số lượng</TableCell>
                      <TableCell align="right">Giá tiền</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item?.services?.map((value) => (
                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ width: '400px' }}
                        >
                          {value?.serviceId?.name}
                        </TableCell>
                        <TableCell align="center">{value?.quantity}</TableCell>
                        <TableCell align="right">
                          {formatMoneyWithDot(
                            value?.servicePrice * value?.quantity
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
                <Typography variant="h6" gutterBottom component="div">
                  Dịch vụ sau kiểm tra
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tên sản phẩm</TableCell>
                      <TableCell align="center">Số lượng</TableCell>
                      <TableCell align="right">Giá tiền</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item?.productAdd?.map((value) => (
                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ width: '400px' }}
                        >
                          {value?.productId?.name}
                        </TableCell>
                        <TableCell align="center">{value?.quantity}</TableCell>
                        <TableCell align="right">
                          {formatMoneyWithDot(
                            value?.productId?.price * value?.quantity
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
                  onClick={() => handleConfirm(item?._id, totalPirceCartmsets)}
                >
                  Xác nhận
                </Button>
                <Button onClick={() => handleDelete(item?._id)}>Huỷ</Button>
              </Box>
            ) : null}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const [rows, setRows] = useState([]);
  const [idUser, setIdUser] = useState();

  const getUserInfo = async () => {
    const response = await getUserInfoV2();
    if (response.status === 200) {
      setIdUser(response?.data?.idCardNumber);
      getCartById(response?.data?.idCardNumber);
    } else {
      setIdUser(null);
    }
  };

  const getCartById = async (id) => {
    try {
      const res = await getCartByIdAPI(id);
      setRows(res?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getUserInfo();
    getCartById();
  }, []);

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
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row) => (
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
