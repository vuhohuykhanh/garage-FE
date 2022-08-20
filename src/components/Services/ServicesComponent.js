import { Divider, styled, Typography, Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ProductItem from './ProductItemServices';
import { ExampleProducts } from './utils';
import { getAServiceByTypeAPI } from '../../services/index';
const TitleCustom = styled(Typography)(({ theme }) => ({
  position: 'relative',
  '&:after': {
    position: 'absolute',
    content: '""',
    background: '#1A6B96',
    width: 100,
    height: 5,
    bottom: -20,
    borderRadius: 4,
    left: '50%',
    transform: 'translateX(-50%)',
  },
}));
const ServicesComponent = () => {
  const { search } = useLocation();
  const products = ExampleProducts();

  const [services, setServices] = React.useState([]);
  const navigate = useNavigate();
  const id = search.split('?')[1];

  async function getAServiceByType(id) {
    const res = await getAServiceByTypeAPI(id);
    if (res?.status === 200) {
      setServices(res?.data);
    }
  }

  useEffect(() => {
    getAServiceByType(id);
  }, [id]);
  useEffect(() => {}, []);
  return (
    <>
      <TitleCustom variant="h4" fontWeight="700" align="center" mt={8} mb={16}>
        DỊCH VỤ
      </TitleCustom>
      <Typography variant="h5" fontWeight="700">
        {services[0]?.serviceTypeId?.serviceTypeName}
      </Typography>
      <Divider />
      <Box sx={{ flexGrow: 1, mb: 12, mt: 6 }}>
        <Grid container spacing={6}>
          {services?.map((service) => (
            <Grid
              item
              xs={6}
              md={3}
              onClick={() =>
                navigate(`/services/detail/?${service?.serviceId}`)
              }
              key={service.serviceId}
            >
              {ProductItem(service)}
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default ServicesComponent;
