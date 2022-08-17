import React, { useEffect, useState } from 'react';
import { Box, Typography, Input, Avatar, Button, Popper } from '@mui/material';
import { styled } from '@mui/material/styles';
import TitleService from './TitleService';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getAServiceByIDAPI } from '../../services/index';
export default function SevicesDetail() {
  const { search } = useLocation();
  const [services, setServices] = React.useState([]);
  const navigate = useNavigate();
  const id = search.split('?')[1];

  async function getAServiceByID(id) {
    const res = await getAServiceByIDAPI(id);
    if (res?.status === 200) {
      setServices(res?.data);
    }
  }

  useEffect(() => {
    getAServiceByID(id);
  }, [id]);

  return (
    <Box>
      <Box>
        <Typography
          style={{
            fontSize: '40px',
            fontWeight: '700',
            marginBottom: '55px',
            marginTop: '102px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          GARAGE ENMASYS
        </Typography>
      </Box>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '133px',
        }}
      >
        <Box
          style={{
            width: '163px',
            height: '7px',
            backgroundColor: '#1A6B96',
            borderRadius: '20px',
          }}
        />
      </Box>
      <TitleService services={services} />
      <Box width="80%" m="auto">
        <Typography
          style={{
            fontSize: '35px',
            fontWeight: '700',
            marginBottom: '54px',
          }}
        >
          Gara bảo dưỡng ô tô tại TPHCM chuyên nghiệp và giá tốt
        </Typography>
        <Typography
          style={{
            fontSize: '20px',
            fontWeight: '400',
            marginBottom: '30px',
          }}
        >
          Bảo dưỡng ô tô định kỳ là công việc tối quan trọng để các bộ phận và
          hệ thống trên xe ô tô vận hành ổn định và đạt được tuổi thọ tối đa sau
          một thời gian sử dụng.
        </Typography>
        <Typography
          style={{
            fontSize: '20px',
            fontWeight: '400',
            marginBottom: '30px',
          }}
        >
          Và việc lựa chọn gara bảo dưỡng xe hơi đủ chuyên nghiệp cũng quan
          trọng như vậy. Ngày nay, việc chăm sóc xe không chỉ là rửa xe/ thay
          nhớt, mà còn rất nhiều vấn đề kỹ thuật liên qua, khi mà ô tô ngày nay
          đang rất thông minh và hiện đại.
        </Typography>
        <Typography
          style={{
            fontSize: '20px',
            fontWeight: '400',
            marginBottom: '30px',
          }}
        >
          Vậy bạn đã biết những hạng mục cần phải kiểm tra, sửa chữa hay thay
          mới tại các cấp bảo dưỡng cụ thể hay chưa? Bài viết sau đây, GT Auto
          sẽ cùng bạn tham khảo hết các hạng mục cần bảo dưỡng định kỳ ô tô tại
          các cấp, từ đó giúp bạn đọc nắm bắt được hết những hạng mục cần bảo
          dưỡng tại các cấp!
        </Typography>
        <Box>
          <Typography
            style={{
              fontSize: '35px',
              fontWeight: '400',
              marginBottom: '30px',
              color: '#FF0000',
            }}
          >
            I. Bảo dưỡng ô tô là gì?
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '36px',
              marginBottom: '71px',
            }}
          >
            <img
              //   width="500px"
              height="500px"
              src={require('../../assets/images/bg2.png')}
            />
          </Box>
          <Typography
            style={{
              fontSize: '20px',
              fontWeight: '400',
              marginBottom: '30px',
            }}
          >
            Bảo dưỡng ô tô định kỳ là công việc tối quan trọng để các bộ phận và
            hệ thống trên xe ô tô vận hành ổn định và đạt được tuổi thọ tối đa
            sau một thời gian sử dụng.
          </Typography>
          <Typography
            style={{
              fontSize: '20px',
              fontWeight: '400',
              marginBottom: '30px',
            }}
          >
            Và việc lựa chọn gara bảo dưỡng xe hơi đủ chuyên nghiệp cũng quan
            trọng như vậy. Ngày nay, việc chăm sóc xe không chỉ là rửa xe/ thay
            nhớt, mà còn rất nhiều vấn đề kỹ thuật liên qua, khi mà ô tô ngày
            nay đang rất thông minh và hiện đại.
          </Typography>
          <Typography
            style={{
              fontSize: '20px',
              fontWeight: '400',
              marginBottom: '30px',
            }}
          >
            Vậy bạn đã biết những hạng mục cần phải kiểm tra, sửa chữa hay thay
            mới tại các cấp bảo dưỡng cụ thể hay chưa? Bài viết sau đây, GT Auto
            sẽ cùng bạn tham khảo hết các hạng mục cần bảo dưỡng định kỳ ô tô
            tại các cấp, từ đó giúp bạn đọc nắm bắt được hết những hạng mục cần
            bảo dưỡng tại các cấp!
          </Typography>
        </Box>
        <Box>
          <Typography
            style={{
              fontSize: '35px',
              fontWeight: '400',
              marginBottom: '30px',
              color: '#FF0000',
            }}
          >
            II. Các cấp bảo dưỡng xe ô tô quan trọng
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '36px',
              marginBottom: '71px',
            }}
          >
            <img
              //   width="500px"
              height="500px"
              src={require('../../assets/images/bg2.png')}
            />
          </Box>
          <Typography
            style={{
              fontSize: '20px',
              fontWeight: '400',
              marginBottom: '30px',
            }}
          >
            Tùy thuộc vào từng thương hiệu xe mà sẽ có thời gian bảo dưỡng khác
            nhau tại các cấp. Để biết được chính xác thời gian các mốc bảo dưỡng
            chiếc xe của mình, bạn có thể tham khảo sách hướng dẫn sử dụng xe.
          </Typography>
          <Typography
            style={{
              fontSize: '20px',
              fontWeight: '400',
              marginBottom: '30px',
            }}
          >
            Thông thường, các cấp bảo dưỡng ô tô định kỳ được tính trên số km xe
            vận hành, hoặc được tính theo tháng như sau: 5.000 – 10.000 – 20.000
            – 40.000 – 80.000, hoặc 06 tháng/lần. Việc nắm bắt được các nội dung
            cần bảo dưỡng xe gồm những gì, sẽ giúp chủ xe có thể chủ động trong
            việc tính toán được chi phí tại các cấp bảo dưỡng. Nội dung chi tiết
            như sau:
          </Typography>
          <Typography
            sx={{ fontSize: '30px', fontWeight: '600', marginBottom: '30px' }}
          >
            1. Bảo dưỡng xe ô tô cấp 1: 5.000km
          </Typography>
          <Typography
            style={{
              fontSize: '20px',
              fontWeight: '400',
              marginBottom: '30px',
            }}
          >
            Tại cấp bảo dưỡng đầu tiên, đa phần tất cả các hạng xe đều sẽ là ở
            mốc 5.000 km. Mốc bảo dưỡng cấp 1 được xếp vào nhóm bảo dưỡng cấp
            nhỏ. Tại mốc bảo dưỡng cấp 1 này, rất nhiều chủ xe bỏ qua bởi nghĩ
            rằng xe đang còn mới và việc bảo dưỡng chỉ khiến bản thân tốn kém
            thêm chi phí sử dụng xe.
          </Typography>
          <Typography
            style={{
              fontSize: '20px',
              fontWeight: '400',
              marginBottom: '30px',
            }}
          >
            Tuy nhiên, bảo dưỡng cấp 1 đóng vai trò vô cùng quan trọng trong
            việc đảm bảo các chi tiết, bộ phận của xe đạt được tuổi thọ tối đa
            về sau. Đồng thời, ở mốc bảo dưỡng cấp 1 này sẽ giúp sớm phát hiện
            ra những lỗi có thể ảnh hưởng tới tính an toàn. Các hạng mục cần bảo
            dưỡng tại mốc bảo dưỡng cấp 1:
          </Typography>
          <Box>
            <Typography
              sx={{
                fontStyle: 'italic',
                fontSize: '16px',
                fontWeight: '400',
                color: '#ABABAB',
              }}
            >
              Thổi bụi vệ sinh khoang máy
            </Typography>
            <Typography
              sx={{
                fontStyle: 'italic',
                fontSize: '16px',
                fontWeight: '400',
                color: '#ABABAB',
              }}
            >
              Vệ sinh lọc gió động cơ.
            </Typography>
            <Typography
              sx={{
                fontStyle: 'italic',
                fontSize: '16px',
                fontWeight: '400',
                color: '#ABABAB',
              }}
            >
              Vệ sinh lọc gió điều hòa.
            </Typography>
            <Typography
              sx={{
                fontStyle: 'italic',
                fontSize: '16px',
                fontWeight: '400',
                color: '#ABABAB',
              }}
            >
              Thay nhớt động cơ.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
