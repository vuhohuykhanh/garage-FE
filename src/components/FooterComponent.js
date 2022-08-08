import React from "react";
import { styled } from "@mui/material/styles";
import style from "./style.css";
import { Box, Typography, Grid, Paper } from "@mui/material";
// import PublicIcon from '@material-ui/icons/Public';
// import PhoneIcon from '@material-ui/icons/Phone';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import ShareIcon from '@material-ui/icons/Share';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FooterComponent() {
  return (
    <Box className="footer-container">
      <BoxContainer>
        <Grid container spacing={4}>
          <Grid container item xs={3} spacing={2}>
            <Grid item xs={5}>
              <img
                className="logo-footer"
                src={require("../assets/images/Logo-footer.jpg")}
                alt="Logo"
              />
            </Grid>
            <Grid item xs={7}>
              <h4>CÔNG TY CÔNG NGHỆ ENMASYS</h4>
              <p>
                Địa chỉ: 4 Nguyễn Đình Chiểu, Đa Kao, Quận 1, Thành Phố Hồ Chí
                Minh
              </p>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <h3>THÔNG TIN</h3>
            <p>Công ty CN ENMASYS</p>
            <p>
              Chuyên tư vấn chuyển đổi số doanh nghiệp, triền khai quản lý hoang
              ngiệp ERP, CRM, POS, HRM
            </p>
          </Grid>
          <Grid item xs={3}>
            <h3>LIÊN HỆ</h3>
            <p style={{ display: "flex", alignItems: "center" }}>
              {/* <MailOutlineIcon style={{ marginRight: 10 }} /> */}
              info@enmasys.com
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              {/* <PhoneIcon style={{ marginRight: 10 }} /> */}
              098 998 7774
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              {/* <PublicIcon style={{ marginRight: 10 }} /> */}
              https://www.enmasys.com/
            </p>
          </Grid>
          <Grid item xs={3}>
            <h3>FANPAGE</h3>
            <Typography component="div" className="fanpage_container">
              <img
                className="fanpage_background"
                src={require("../assets/images/icon_fanpage.jpg")}
                alt=""
              ></img>
              <Typography component="div" className="fanpage_header">
                <a href="https://www.facebook.com/enmasys">
                  <img
                    className="fanpage_header-avatar"
                    src={require("../assets/images/Logo-footer.jpg")}
                    alt=""
                  ></img>
                </a>
                <Typography component="div" className="fanpage_header-content">
                  <a
                    className="fanpage_name"
                    href="https://www.facebook.com/enmasys"
                  >
                    Enmasys
                  </a>
                  <div className="fanpage_description">Tư vấn doanh nghiệp</div>
                </Typography>
              </Typography>
              <Typography component="div" className="fanpage_footer-content">
                <a
                  className="fanpage_interactAction fanpage_like"
                  href="https://www.facebook.com/enmasys"
                >
                  {/* <FacebookIcon color="primary" /> */}
                  <div>Thích trang</div>
                </a>
                <a
                  className="fanpage_interactAction fanpage_share"
                  href="https://www.facebook.com/enmasys"
                >
                  {/* <ShareIcon color="primary" /> */}
                  <div>Chia sẻ</div>
                </a>
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </BoxContainer>
    </Box>
  );
}

const BoxContainer = styled(Box)({
  width: "85%",
  backgroundColor: "#FFFFFF",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "40px auto",
});
