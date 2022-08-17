import React from 'react';
import { Box, Typography, Input, Avatar, Button, Popper } from '@mui/material';
export default function TitleService({ services }) {
  console.log(services[0]);
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
      <Box width="80%">
        <Box width="100%" sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box>
            <Typography
              style={{
                fontSize: '35px',
                fontWeight: '700',
                marginBottom: '133px',
              }}
            >
              {services[0]?.name}
            </Typography>

            {services[0]?.sale ? (
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
                    }}
                  >
                    2.300.000đ
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
                    1.490.000đ
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
                  {services[0]?.price} đ
                </Typography>
              </Box>
            )}

            <Box
              width="100%"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '45px',
              }}
            >
              <Button variant="contained">Đặt lịch</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
