import React, { useEffect, useState } from "react";
import { Box, Typography, Input, Avatar, Button, Popper } from "@mui/material";
import TitleGearDetail from "./TitleGearDetail";
import { styled } from "@mui/material/styles";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { getProductByIDAPI } from "../../services/index";
const mockData = [
  {
    type: "title",
    content: "Gói dịch vụ bọc ghế da cho Ford Ranger ",
  },
  {
    type: "childrenTitle",
    content: "Có nên bọc ghế da cho Ford Ranger? ",
  },
  {
    type: "content",
    content:
      "Chiếc Ranger của bạn sẽ mất đi 1 điểm cộng mạnh mẽ nếu vẫn sử dụng ghế nỉ nguyên bản đấy. Ngoài ra, ghế nỉ là chất liệu dễ bám bụi, nhanh cũ, bạc màu nếu sử dụng thường xuyên. Ghế nỉ khó vệ sinh làm sạch, là nơi trú ẩn của các vi khuẩn gây hại tạo cảm giác khó chịu khi ngồi, nhất là di chuyển đường dài.",
  },
  {
    type: "image",
    image: require("../../assets/images/bg1.png"),
    titleImage: "Nội thất Ford Ranger sang trọng với chất liệu da",
  },
];

export default function GearDetail() {
  const { search } = useLocation();
  const [product, setProduct] = React.useState([]);
  const navigate = useNavigate();
  const id = search.split("?")[1];

  async function getProductByID(id) {
    const res = await getProductByIDAPI(id);
    if (res?.status === 200) {
      setProduct(res?.data);
    }
  }

  useEffect(() => {
    getProductByID(id);
  }, [id]);

  const RenderStyleText = (value) => {
    switch (value?.type) {
      case "title":
        return (
          <Typography
            style={{
              fontSize: "35px",
              fontWeight: "700",
              marginBottom: "54px",
            }}
          >
            {value?.content}
          </Typography>
        );
      case "childrenTitle":
        return (
          <Typography
            style={{
              fontSize: "35px",
              fontWeight: "700",
              marginBottom: "30px",
              color: "#FF0000",
            }}
          >
            {value?.content}
          </Typography>
        );

      case "content":
        return (
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "400",
              marginBottom: "30px",
            }}
          >
            {value?.content}
          </Typography>
        );
      case "image":
        return (
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "36px",
                marginBottom: "20px",
              }}
            >
              <img
                //   width="500px"
                height="500px"
                src={value?.image}
              />
            </Box>
            <Typography textAlign="center">{value?.titleImage}</Typography>
          </Box>
        );
    }
  };

  return (
    <Box>
      <Box>
        <Typography
          style={{
            fontSize: "55px",
            fontWeight: "700",
            marginBottom: "55px",
            marginTop: "102px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {/* {product?.[0]?.productTypeId?.productTypeName} */}
          GARAGE 247
        </Typography>
      </Box>
      <TitleGearDetail product={product?.[0]} />
      <Box width="90.4%" m="auto">
        {mockData?.map((item) => RenderStyleText(item))}
      </Box>
    </Box>
  );
}
