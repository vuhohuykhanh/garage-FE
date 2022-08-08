import { Divider, styled, Typography, Box, Grid } from "@mui/material";
import ProductItem from "./ProductItemServices";
import { ExampleProducts } from "./utils";
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
  const products = ExampleProducts();
  return (
    <>
      <TitleCustom variant="h4" fontWeight="700" align="center" mt={8}>
        DỊCH VỤ
      </TitleCustom>
      <Typography variant="h5" fontWeight="700">
        Bảo dưỡng định kì
      </Typography>
      <Divider />
      <Box sx={{ flexGrow: 1, mb: 12, mt: 2 }}>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={6} md={3}>
              {ProductItem(product)}
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default ServicesComponent;
