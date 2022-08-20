import React, { useState, useEffect } from "react";
import { Box, Typography, Input, Avatar, Button, Popper } from "@mui/material";
import AppToast from "../../myTool/AppToast";
import { useNavigate } from "react-router-dom";

export default function TitleGearDetail({ product }) {
  const storageItems = JSON.parse(localStorage.getItem("items"));
  const [openToast, setOpenToast] = useState(false);
  const [contentToast, setContentToast] = useState("");
  const [severity, setSeverity] = useState("");
  const navigate = useNavigate();

  const checkLogin = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setContentToast("bạn cần login để sử dụng tính năng này");
      setSeverity("error");
      setOpenToast(true);
      navigate("/login");
    }
  };

  useEffect(() => {
   
    checkLogin();
  }, []);

  const handleOrder = () => {
    if (storageItems?.find((e) => e?.productId === product?.productId)) {
      setContentToast("Sản phẩm đã có trong giỏ hàng");
      setSeverity("error");
      setOpenToast(true);
    } else {
      const productDetail = {
        _id: product?._id,
        productId: product?.productId,
        img: product?.image,
        name: product?.name,
        price: product?.price,
        quantity: 1,
        type: "gear",
        stock: product?.quantity,
        typeProduct:'confirm'
      };

      const listProduct = [...(storageItems || [])];
      if (productDetail) {
        listProduct.push(productDetail);
        localStorage.setItem("items", JSON.stringify(listProduct));
        setContentToast("Thêm sản phẩm vào giỏ hàng thành công");
        setSeverity("success");
        setOpenToast(true);
      }
    }
  };

  return (
    <Box
      width="80%"
      m="auto"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "133px",
      }}
    >
      <img
        className="detail_image"
        src={require("../../assets/images/bg1.png")}
        alt="detail_img"
      />
      <Box width="80%" sx={{}}>
        <Box width="100%" sx={{ display: "flex", justifyContent: "center" }}>
          <Box>
            <Typography
              style={{
                fontSize: "35px",
                fontWeight: "700",
                marginBottom: "133px",
              }}
            >
              {product?.name}
            </Typography>
            {product?.saledescription.length ? (
              <Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    style={{
                      fontSize: "25px",
                      fontWeight: "700",
                    }}
                  >
                    Giá cũ:
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "25px",
                      fontWeight: "700",
                      color: "#ABABAB",
                      marginLeft: "61px",
                      textDecoration: "line-through",
                    }}
                  >
                    {product?.price} đ
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    style={{
                      fontSize: "25px",
                      fontWeight: "700",
                    }}
                  >
                    Giá KM:
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "#0486FF",
                      marginLeft: "61px",
                    }}
                  >
                    {product?.price -
                      (product?.price *
                        product?.saledescription?.[0]?.salePercent) /
                        100}{" "}
                    đ
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  style={{
                    fontSize: "25px",
                    fontWeight: "700",
                  }}
                >
                  Giá :
                </Typography>
                <Typography
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "#0486FF",
                    marginLeft: "61px",
                  }}
                >
                  {product?.price} đ
                </Typography>
              </Box>
            )}
            {/* <Box
              width="100%"
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "45px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "200px",
                  background:
                    "linear-gradient(180deg, rgba(241, 39, 17, 0.89) 0%, rgba(252, 181, 30, 0.72) 100%)",
                }}
              >
                Mua ngay
              </Button>
            </Box> */}
            <Box
              width="410px"
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "45px",
              }}
            >
              <Button
                variant="contained"
                sx={{ width: "200px", background: "#0486FF" }}
                onClick={handleOrder}
              >
                Thêm vào giỏ hàng
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <AppToast
        content={contentToast}
        type={0}
        isOpen={openToast}
        severity={severity}
        callback={() => {
          setOpenToast(false);
        }}
      />
    </Box>
  );
}
