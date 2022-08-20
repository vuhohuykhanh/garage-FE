import React, { useState } from 'react';
import { Box, Typography, Input, Avatar, Button, Popper } from '@mui/material';
import AppToast from '../../myTool/AppToast';

export default function TitleGearDetail({ product }) {
  const [openToast, setOpenToast] = useState(false);

  console.log(product);

  const handleOrder = () => {
    const productDetail = {
      productId: product?.productId,
      img: product?.image,
      name: product?.name,
      price: product?.price,
      quantity: 1,
    };

    const listProduct = [];
    if (productDetail) {
      listProduct.push(productDetail);
      console.log(listProduct);
      localStorage.setItem('items', JSON.stringify(listProduct));
      setOpenToast(true);
    }
  };

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
                onClick={handleOrder}
              >
                Thêm vào giỏ hàng
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <AppToast
        content={'Thêm sản phẩm vào giỏ hàng thành công'}
        type={0}
        isOpen={openToast}
        callback={() => {
          setOpenToast(false);
        }}
      />
    </Box>
  );
}
