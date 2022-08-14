import { Divider, styled, Typography, Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ProductItem from "./Product";

import { getProductByTypeAPI } from "../../services/index";
const TitleCustom = styled(Typography)(({ theme }) => ({
  position: "relative",
  "&:after": {
    position: "absolute",
    content: '""',
    background: "#1A6B96",
    width: 100,
    height: 5,
    bottom: -20,
    borderRadius: 4,
    left: "50%",
    transform: "translateX(-50%)",
  },
}));
const ServicesComponent = () => {
  const { search } = useLocation();
  const [services, setServices] = React.useState([]);
  const navigate = useNavigate();
  const id = search.split("?")[1];

  async function getProductByType(id) {
    const res = await getProductByTypeAPI(id);
    if (res?.status === 200) {
      setServices(res?.data);
    }
  }

  useEffect(() => {
    getProductByType(id);
  }, [id]);
  useEffect(() => {}, []);
  return (
    <Box width="90.4%" m="auto">
      <TitleCustom variant="h4" fontWeight="700" align="center" mt={8}>
        DỊCH VỤ
      </TitleCustom>
      <Typography variant="h5" fontWeight="700">
        {services[0]?.productTypeId?.productTypeName}
      </Typography>
      <Divider />
      <Box sx={{ flexGrow: 1, mb: 12, mt: 2 }}>
        <Grid container spacing={2}>
          {services.map((product) => (
            <Grid
              item
              xs={6}
              md={3}
              onClick={() => navigate(`/gear/detail/?${product?.productId}`)}
            >
              {ProductItem(product)}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default ServicesComponent;
