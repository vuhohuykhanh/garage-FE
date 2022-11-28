import { Box, Grid } from '@mui/material';
import ProductItem from './ProductItem';
import { ExampleProducts, ExampleProducts2 } from './utils';

const Products = ({ data }: any) => {
  let products;
  if (data === 'suachua') {
    products = ExampleProducts();
  } else {
    products = ExampleProducts2();
  }

  return (
    <Box sx={{ flexGrow: 1, mb: 12, mt: 2 }}>
      <Grid container spacing={6}>
        {products?.map((product) => (
          <Grid item xs={6} md={3} key={product.id}>
            {ProductItem(product)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
