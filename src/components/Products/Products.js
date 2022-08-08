import { Box, Grid } from "@mui/material";
import ProductItem from "./ProductItem";
import { ExampleProducts } from "./utils";

const Products = () => {
  const products = ExampleProducts();

  return (
    <Box sx={{ flexGrow: 1, mb: 12, mt: 2 }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={6} md={3}>
            {ProductItem(product)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
