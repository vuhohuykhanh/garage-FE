import React, { useState } from "react";
import { Box, Typography, Input, Avatar, Button, Popper } from "@mui/material";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import ProductInCart from "./ProductInCart";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createCartAPI } from "../../services/index";
import formatMoneyWithDot from "../../constants/until";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
export default function Cart() {
  const storageItems = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(storageItems || []);
  const [change, setChange] = useState(false);
  const [open, setOpen] = useState(false);
  const [oldPass, setOldPass] = useState("");
  const [isValidOldPass, setIsValidOldPass] = useState(false);
  const [isValidConfirmPass, setIsValidConfirmPass] = useState(false);
  const [value, setValue] = React.useState(new Date());

  const [newPass, setNewPass] = useState("");
  const [messApi, setMessApi] = useState("");
  const [isValidNewPass, setIsValidNewPass] = useState(false);
  const [totalPrice, setTotalPrice] = useState(
    items?.reduce((a, b) => a + b?.price * b?.quantity, 0)
  );

  const navigate = useNavigate();
  useEffect(() => {
    console.log(items);
    setTotalPrice(items?.reduce((a, b) => a + b?.price * b?.quantity, 0));
  }, [change]);

  const checkLogin = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      // setContentToast("bạn cần login để sử dụng tính năng này");
      // setSeverity("error");
      // setOpenToast(true);
      navigate("/login");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const createCartMain = async () => {
    console.log(items);
    const products = items
      ?.filter((value) => value?.type === "gear")
      .map((value) => ({
        productId: value?._id,
        quantity: value?.quantity,
      }));

    const services = items
      ?.filter((value) => value?.type === "service")
      .map((value) => ({
        serviceId: value?._id,
        quantity: value?.quantity,
      }));

    // if (services?.length > 0) {
    //   setOpen(true);
    // } else {
    const body = {
      idUser: "62e2cb709f4a4878fc4b3183",
      totalPrice: totalPrice,
      products: products,
      services: services,
      cartId: "1116",
    };
    console.log(body);

    const res = await createCartAPI(body);
    if (res?.status === 200) {
      localStorage.removeItem("items");
      navigate("/");
    }
    // }
  };

  return (
    <Box>
      <Box>
        <Typography
          style={{
            fontSize: "40px",
            fontWeight: "700",
            marginBottom: "55px",
            marginTop: "102px",
            width: "100%",
            textAlign: "center",
          }}
        >
          GIỎ HÀNG
        </Typography>
      </Box>
      <Box
        width="80.4%"
        m="auto"
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Box
          width="20%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Sản phẩm
          </Typography>
        </Box>
        <Box
          width="40%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Tên sản phẩm
          </Typography>
        </Box>
        <Box
          width="15%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Số lượng
          </Typography>
        </Box>
        <Box
          width="15%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Giá tiền
          </Typography>
        </Box>
        <Box
          width="10%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Xóa
          </Typography>
        </Box>
      </Box>
      {items?.map((item) => (
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
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Box
          width="75%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Tổng tiền:
          </Typography>
        </Box>
        <Box
          width="15%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            {formatMoneyWithDot(totalPrice)}
          </Typography>
        </Box>
        <Box
          width="10%"
          sx={{
            border: "1px solid #DEDEDE",
            height: "81px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}></Typography>
        </Box>
      </Box>
      <Box
        width="80.4%"
        m="auto"
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "50px" }}
      >
        <Button
          className="btnPay"
          sx={{
            width: "200px",
            height: "49px",
            backgroundColor: "#EC2424",
            borderRadius: "11px",
          }}
          onClick={createCartMain}
        >
          <Typography
            sx={{ fontSize: "20px", fontWeight: "500", color: "#FFFFFF" }}
          >
            Thanh toán
          </Typography>
        </Button>
      </Box>
      <Grid item={true} md={12}>
        <Button variant="contained">Đổi mật khẩu</Button>
        <Dialog
          open={open}
          // onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Đổi mật khẩu</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <TextField
                label="Nhập email "
                color="primary"
                fullWidth={true}
                margin="dense"
                //   onChange={handleChangeOldPass}
                // onChange={(e) => setPassword(e.target.value)}
                error={isValidOldPass}
                helperText={!isValidOldPass ? "" : "Mật khẩu không hợp lệ"}
              />
              <div
              // className={style.txtNewPass}
              >
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                  />
                </LocalizationProvider> */}
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Hủy</Button>
            <Button>Xác nhận</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Box>
  );
}
