import React from 'react';
import { Box, Typography, Input, Avatar, Button, Popper } from '@mui/material';
export default function TitleGearDetail({ product }) {
  console.log(product);
  return (
    <Box
      width="80%"
      m="auto"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '133px',
      }}
    >
      <img
        className="detail_image"
        src={require('../../assets/images/bg1.png')}
        alt="detail_img"
      />
      <Box width="80%" sx={{}}>
        <Box width="100%" sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box>
            <Typography
              style={{
                fontSize: '35px',
                fontWeight: '700',
                marginBottom: '133px',
              }}
            >
              {product?.name}
            </Typography>
            {product?.saledescription.length ? (
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    style={{
                      fontSize: '25px',
                      fontWeight: '700',
                    }}
                  >
                    Giá cũ:
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '25px',
                      fontWeight: '700',
                      color: '#ABABAB',
                      marginLeft: '61px',
                      textDecoration: 'line-through',
                    }}
                  >
                    {product?.price} đ
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography
                    style={{
                      fontSize: '25px',
                      fontWeight: '700',
                    }}
                  >
                    Giá KM:
                  </Typography>
                  <Typography
                    style={{
                      fontSize: '30px',
                      fontWeight: '700',
                      color: '#0486FF',
                      marginLeft: '61px',
                    }}
                  >
                    {product?.price -
                      (product?.price *
                        product?.saledescription?.[0]?.salePercent) /
                        100}{' '}
                    đ
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  style={{
                    fontSize: '25px',
                    fontWeight: '700',
                  }}
                >
                  Giá :
                </Typography>
                <Typography
                  style={{
                    fontSize: '30px',
                    fontWeight: '700',
                    color: '#0486FF',
                    marginLeft: '61px',
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
                display: 'flex',
                justifyContent: 'center',
                marginTop: '45px',
              }}
            >
              <Button
                variant="contained"
                sx={{ width: '200px', background: '#0486FF' }}
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
