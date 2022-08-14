import React from "react";
import { Box, Typography, Input, Avatar, Button, Popper } from "@mui/material";
export default function TitleGearDetail({ product }) {
  return (
    <Box
      width="90.4%"
      m="auto"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "133px",
      }}
    >
      <img src={require("../../assets/images/bg1.png")} />
      <Box width="90%" sx={{}}>
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
            {product?.sale ? (
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
                    }}
                  >
                    2.300.000đ
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
                    1.490.000đ
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
                  {product?.price}
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
              >
                Thêm vào giỏ hàng
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
