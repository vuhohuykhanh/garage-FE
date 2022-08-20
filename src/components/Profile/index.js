// import Navbar from "../../component/Navbar/Nabar"
import Container from "@mui/material/Container";
import { Fragment, useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setLogin, setInfor } from "../../actions/action";

// import style from "./style.module.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
// import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { getUserInfoV2 } from "../../services/index";
import { useNavigate } from "react-router-dom";

import { updatePasswordAPI, updateInfoAPI } from "../../services/index";

// import AppAvatar from '../../myTool/handleAvatar';
// import axios from 'axios'
// import EditIcon from '@mui/icons-material/Edit';

function Infor() {
  const [userInfo, setUserInfo] = useState({});
  const inputFile = useRef(null);
  const [open, setOpen] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  const [oldPass, setOldPass] = useState("");
  const [isValidOldPass, setIsValidOldPass] = useState(false);

  const [newPass, setNewPass] = useState("");
  const [messApi, setMessApi] = useState("");
  const [isValidNewPass, setIsValidNewPass] = useState(false);

  const [confirmPass, setConfirmPass] = useState("");
  const [isValidConfirmPass, setIsValidConfirmPass] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const navigate = useNavigate();

  const checkLogin = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  };

  const getUserInfo = async () => {
    const response = await getUserInfoV2();
    if (response.status === 200) {
      setUserInfo(response.data);
    } else {
      setUserInfo(null);
    }
  };

  const updatePassword = async () => {
    if (password !== "" && newPassword !== "" && reNewPassword !== "") {
      if (newPassword === reNewPassword) {
        try {
          const body = {
            idCardNumber: userInfo?.idCardNumber,
            _id: userInfo?._id,
            password: password,
            newPassword: newPassword,
          };
          const res = await updatePasswordAPI(body);
          if (res === 200) {
            console.log("doi pass thanh cong");
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const updateInfo = async () => {
    if (name !== "" && phone !== "" && email !== "" && address !== "") {
      try {
        const body = {
          idCardNumber: userInfo?.idCardNumber,
          _id: userInfo?._id,
          name: name,
          address: address,
          phoneNumber: phone,
          email: email,
        };
        const res = await updateInfoAPI(body);
        if (res === 200) {
          console.log("doi pass thanh cong");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  //HANDLE AVARTAR
  const handleUploadAvatar = () => {
    inputFile.current.click();
  };

  const onChangeFile = (event) => {
    event.preventDefault();
    // handleConfirmAddFile(event.target.files[0]);
  };

  return (
    <Fragment>
      {/* <Navbar /> */}
      <Container maxWidth="lg">
        <Box
          sx={{ flexGrow: 1 }}
          // className={style.boxContainer}
        >
          <Typography gutterBottom variant="h6" component="div" color="#2980B9">
            THÔNG TIN CÁ NHÂN
          </Typography>
          <Container maxWidth="md">
            <div
            //  className={style.styleAvatar}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <IconButton
                    style={{ backgroundColor: "rgb(222 216 213)" }}
                    aria-label="edit"
                    size="medium"
                    color="success"
                    // onClick={()=>{handleUploadAvatar()}}
                  >
                    {/* <EditIcon fontSize="inherit" /> */}
                  </IconButton>
                }
              >
                <img src={userInfo?.avatar} />
              </Badge>
            </div>
            <Grid container rowSpacing={2}>
              <Grid
                item={true}
                container
                direction="row"
                columnSpacing={3}
              ></Grid>
              <Grid item={true} container direction="row" columnSpacing={3}>
                <Grid item={true} md={6}>
                  <TextField
                    label="Họ tên"
                    color="primary"
                    fullWidth={true}
                    value={userInfo.name || ""}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item={true} md={6}>
                  <TextField
                    label="Điện thoại"
                    color="primary"
                    fullWidth={true}
                    value={userInfo.phoneNumber || ""}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Grid>
                {/* <Grid item={true} md={6}>
                  <TextField
                    label="Giới tính"
                    color="primary"
                    fullWidth={true}
                    value={userInfo.gender === 1 ? "Nam" : "Nữ"}
                  />
                </Grid> */}
              </Grid>
              <Grid item={true} md={12}>
                <TextField
                  label="Email"
                  color="primary"
                  fullWidth={true}
                  value={userInfo.email || ""}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item={true} md={12}>
                <TextField
                  label="Địa chỉ"
                  color="primary"
                  fullWidth={true}
                  value={userInfo.address || ""}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item={true} md={6}>
                <Button variant="contained" onClick={updateInfo}>
                  đổi thông tin người dùng
                </Button>
              </Grid>

              <Grid item={true} md={6}>
                <Button variant="contained" onClick={() => setOpen(true)}>
                  Đổi mật khẩu
                </Button>
                <Dialog
                  open={open}
                  //   onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    Đổi mật khẩu
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <TextField
                        label="Mật khẩu cũ"
                        color="primary"
                        fullWidth={true}
                        margin="dense"
                        // onChange={handleChangeOldPass}

                        error={isValidOldPass}
                        helperText={
                          !isValidOldPass ? "" : "Mật khẩu không hợp lệ"
                        }
                      />
                    </DialogContentText>
                    <Grid item={true} md={12}>
                      <TextField
                        label="Địa chỉ"
                        color="primary"
                        fullWidth={true}
                        value={userInfo.address}
                      />
                    </Grid>
                    <Grid item={true} md={12}>
                      <Button variant="contained">Đổi mật khẩu</Button>
                      <Dialog
                        open={open}
                        // onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          Đổi mật khẩu
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            <TextField
                              label="Mật khẩu cũ"
                              color="primary"
                              fullWidth={true}
                              margin="dense"
                              //   onChange={handleChangeOldPass}
                              onChange={(e) => setPassword(e.target.value)}
                              error={isValidOldPass}
                              helperText={
                                !isValidOldPass ? "" : "Mật khẩu không hợp lệ"
                              }
                            />
                            <div
                            // className={style.txtNewPass}
                            >
                              <TextField
                                label="Mật khẩu mới"
                                color="success"
                                fullWidth={true}
                                margin="dense"
                                // onChange={handleChangeNewPass}
                                onChange={(e) => setNewPassword(e.target.value)}
                                error={isValidNewPass}
                                helperText={!isValidNewPass ? "" : messApi}
                              />
                              <TextField
                                label="Nhập lại mật khẩu mới"
                                color="success"
                                fullWidth={true}
                                margin="dense"
                                // onChange={handleChangeConfirmdPass}
                                onChange={(e) =>
                                  setReNewPassword(e.target.value)
                                }
                                error={isValidConfirmPass}
                                helperText={
                                  !isValidConfirmPass
                                    ? ""
                                    : "Nhập lại không hợp lệ"
                                }
                              />
                            </div>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={() => setOpen(false)}>Hủy</Button>
                          <Button onClick={updatePassword}>Xác nhận</Button>
                        </DialogActions>
                      </Dialog>
                    </Grid>
                  </DialogContent>
                </Dialog>
              </Grid>
              <Snackbar
                open={openToast}
                sx={{ width: "100%" }}
                spacing={2}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                autoHideDuration={2000}
                onClose={() => {
                  setOpenToast(false);
                }}
              >
                <Alert
                  severity="success"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      // onClick={() => {
                      //     setOpenToast(false);
                      // }}
                    >
                      {/* <CloseIcon fontSize="inherit" /> */}
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  <AlertTitle>Thành công</AlertTitle>
                  {messApi}
                </Alert>
              </Snackbar>
            </Grid>
          </Container>
        </Box>
      </Container>
      <input
        type="file"
        id="file"
        ref={inputFile}
        accept="image/png, image/jpeg"
        style={{ display: "none" }}
        // onChange={(event)=>onChangeFile(event)}
      />
    </Fragment>
  );
}
export default Infor;
