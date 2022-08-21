import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import formatMoneyWithDot from "../../constants/until";

import KeyboardArrowUpIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowDownIcon from "@mui/icons-material/ArrowUpward";

// import

import {
  getCartByIdAPI,
  getCartDescriptionAPI,
  deleteCartByIdAPI,
  confirmCartByIdAPI,
} from "../../services/index";

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
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = useState([]);
  const [totalPirceCartmsets, setTotalPirceCartmsets] = useState(0);

  // const laterPrice =

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
        (a, b) => a + b?.quantity * b.productAdd?.price,
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
  const confirmCartById = async (id) => {
    try {
      const res = await confirmCartByIdAPI(id);
      setItem(res?.data);
    } catch (error) {}
  };
  const deleteCartById = async (id) => {
    try {
      const res = await deleteCartByIdAPI(id);
      setItem(res?.data);
    } catch (error) {}
  };

  const handleConfirm = (id) => {
    setOpen(!open);
    confirmCartById(id);
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
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={handleCick}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row?.cartId}
        </TableCell>
        <TableCell align="right">{row?.createAt}</TableCell>
        <TableCell align="right">{row?.statusId?.statusName}</TableCell>
        <TableCell align="right">{row?.totalPrice}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {item?.products?.length > 0 ? (
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Sản phẩm
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tên sản phẩm</TableCell>
                      <TableCell>Số lượng</TableCell>
                      <TableCell align="right">Giá tiền</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item?.products?.map((value) => (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {value?.productId?.name}
                        </TableCell>
                        <TableCell>{value?.quantity}</TableCell>
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
            {item?.services?.length > 0 ? (
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Dịch vụ
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tên sản phẩm</TableCell>
                      <TableCell>Số lượng</TableCell>
                      <TableCell align="right">Giá tiền</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item?.services?.map((value) => (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {value?.serviceId?.name}
                        </TableCell>
                        <TableCell>{value?.quantity}</TableCell>
                        <TableCell align="right">
                          {formatMoneyWithDot(
                            value?.serviceId?.price * value?.quantity
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            ) : null}
            {item?.productAdd?.length > 0 ? (
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Dịch vụ sau kiểm tra
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Tên sản phẩm</TableCell>
                      <TableCell>Số lượng</TableCell>
                      <TableCell align="right">Giá tiền</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item?.productAdd?.map((value) => (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {value?.productId?.name}
                        </TableCell>
                        <TableCell>{value?.quantity}</TableCell>
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
                  display: "flex",
                  justifyContent: "flex-end",
                  margin: "30px 0px ",
                }}
              >
                <Box>Tổng tiền sau:</Box>
                <Box style={{}}>{totalPirceCartmsets}</Box>
              </Box>
            ) : null}
            {item?.productAdd?.length > 0 ? (
              <Box
                width="100%"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  margin: "30px 10px ",
                }}
              >
                <Button onClick={() => handleConfirm(item?._id)}>
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

Row.propTypes = {
  //   row: PropTypes.shape({
  //     calories: PropTypes.number.isRequired,
  //     carbs: PropTypes.number.isRequired,
  //     fat: PropTypes.number.isRequired,
  //     status: PropTypes.number.isRequired,
  //     history: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         amount: PropTypes.number.isRequired,
  //         customerId: PropTypes.string.isRequired,
  //         date: PropTypes.string.isRequired,
  //       })
  //     ).isRequired,
  //     name: PropTypes.string.isRequired,
  //     price: PropTypes.number.isRequired,
  //     protein: PropTypes.number.isRequired,
  //   }).isRequired,
};

// const rows = [
//   {
//     _id: "630193f502ee3e86185d47e2",
//     cartId: "1",
//     totalPrice: 1234500,
//     idUser: {
//       _id: "62e2cb709f4a4878fc4b3183",
//       name: "vu nguyen",
//     },
//     deleted: false,
//     createAt: "2022-08-21T02:09:57.372Z",
//     statusId: {
//       _id: "62fa16af20d59d057db12c05",
//       statusId: 1,
//       statusName: "Chờ duyệt",
//       __v: 0,
//     },
//     __v: 0,
//   },
// ];

export default function CollapsibleTable() {
  const [rows, setRows] = useState([]);

  const getCartById = async (id) => {
    try {
      const res = await getCartByIdAPI(id);
      setRows(res?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getCartById("272930687");
  }, [1]);
  return (
    <Box width="80.4%" m="auto">
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Mã đơn hàng</TableCell>
              <TableCell align="right">Tạo lúc</TableCell>
              <TableCell align="right">Trạng thái</TableCell>
              <TableCell align="right">Giá </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <Row key={row?.cartId} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
