import React, { useEffect, useState } from "react";
import { Box, Typography, Input, Avatar, Button, Popper } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { getAllServiceTypeAPI, getAllProductTypeAPI } from "../services/index";

const arrLogo = [
  {
    image: require("../assets/images/honda1.png"),
  },
  {
    image: require("../assets/images/honda2.png"),
  },
  {
    image: require("../assets/images/honda3.png"),
  },
  {
    image: require("../assets/images/honda4.png"),
  },
  {
    image: require("../assets/images/honda5.png"),
  },
  {
    image: require("../assets/images/honda6.png"),
  },
  {
    image: require("../assets/images/honda9.png"),
  },
  {
    image: require("../assets/images/honda10.png"),
  },
  {
    image: require("../assets/images/honda11.png"),
  },
];
export default function HeaderComponent({ userInfo }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isAnchorEl, setIsAnchorEl] = React.useState(null);
  const [services, setServices] = React.useState([]);
  const [product, setProduct] = React.useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  async function getAllService() {
    const res = await getAllServiceTypeAPI();
    if (res?.status === 200) {
      setServices(res?.data);
    }
    const res1 = await getAllProductTypeAPI();
    if (res1?.status === 200) {
      setProduct(res1?.data);
    }
  }
  useEffect(() => {
    getAllService();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setIsAnchorEl(null);
  };
  const handleClick1 = (event) => {
    setAnchorEl(null);
    setIsAnchorEl(isAnchorEl ? null : event.currentTarget);
  };
  const isOpen = Boolean(isAnchorEl);
  const open = Boolean(anchorEl);

  const id = open ? "simple-popper" : undefined;
  const id1 = open ? "simple-popper" : undefined;

  return (
    <Box>
      <BoxContainer>
        <BoxContentHeader>
          <Button onClick={() => navigate("/")}>
            <TypographyeText>Trang chủ</TypographyeText>
          </Button>
          <Box
            style={{
              borderRight: "2px solid #A0A0A0",
              width: "1px",
              color: "#FFFFFF",
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
              borderRight: "2px solid #A0A0A0",
              width: "1px",
              color: "#FFFFFF",
            }}
          >
            1
          </Box>
          <Button onClick={handleClick1}>
            <TypographyeText>PHỤ KIỆN</TypographyeText>
            {/* <ArrowDropDownIcon color="action" /> */}
          </Button>
        </BoxContentHeader>
        <Box onClick={() => navigate("/")}>
          <img src={require("../assets/images/Logo.png")} alt="Logo" />
        </Box>
        <BoxContentHeader>
          <Button>
            <TypographyeText>GIỎ HÀNG</TypographyeText>
          </Button>
          <Box
            style={{
              borderRight: "2px solid #A0A0A0",
              width: "1px",
              color: "#FFFFFF",
            }}
          >
            1
          </Box>
          {userInfo?.name ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TypographyeText>Xin chào : </TypographyeText>
              <Button>{userInfo.name}</Button>
            </Box>
          ) : (
            <Button onClick={() => navigate("/login")}>
              <TypographyeText>ĐĂNG NHẬP</TypographyeText>
            </Button>
          )}

          {!userInfo?.name && (
            <Button>
              <TypographyeText>ĐĂNG KÝ</TypographyeText>
            </Button>
          )}
        </BoxContentHeader>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box
            sx={{
              border: 1,
              p: 1,
              bgcolor: "background.paper",
              minWidth: "470px",
              maxWidth: "670px",
              minHeight: "120px",
              // maxHeight: "200px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.6)",
            }}
          >
            <TypographyeText sx={{ marginBottom: "30px", marginTop: "20px" }}>
              DỊCH VỤ
            </TypographyeText>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              {services.map((e) => (
                <Box
                  onClick={() => {
                    navigate(`/services/?${e?.serviceTypeId}`);
                    setAnchorEl(null);
                  }}
                  sx={{ marginBottom: "15px", width: "40%" }}
                >
                  <typographySelect>{e?.serviceTypeName}</typographySelect>
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
              bgcolor: "background.paper",
              minWidth: "470px",
              maxWidth: "670px",
              minHeight: "120px",
              // maxHeight: "200px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.6)",
            }}
          >
            <TypographyeText sx={{ marginBottom: "30px", marginTop: "20px" }}>
              SẢN PHẨM
            </TypographyeText>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              {product.map((e) => (
                <Box
                  onClick={() => {
                    navigate(`/gear/?${e?.productTypeId}`);
                    setIsAnchorEl(null);
                  }}
                  sx={{ marginBottom: "15px", width: "40%" }}
                >
                  <typographySelect>{e?.productTypeName}</typographySelect>
                </Box>
              ))}
            </Box>
          </Box>
        </Popper>
      </BoxContainer>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: " rgba(135, 193, 248, 0.5)",
          width: "85%",
          margin: "0 auto",
          padding: "0 20px",
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
  width: "85%",
  height: "94px",
  backgroundColor: "#FFFFFF",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
});

const BoxContentHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "600px",
});
const TypographyeText = styled(Typography)({
  fontSize: "18px",
  fontWeight: "500",
  color: "#000000",
});

const typographySelect = styled(Typography)({
  fontSize: "15px",
  fontWeight: "400",
  color: "#000000",
  marginBottom: "15px",
});
