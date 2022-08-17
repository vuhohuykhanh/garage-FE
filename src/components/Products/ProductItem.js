import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';

const ProductItem = (product) => {
  return (
    <>
      <Card sx={{ backgroundColor: '#FFF2DB', height: '300px' }}>
        <CardHeader
          title={
            <Typography variant="subtitle1" fontWeight={600} align="center">
              {product.title}
            </Typography>
          }
        />
        <CardMedia
          component="img"
          height="140"
          image={product.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" marginTop="16px">
            {product.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductItem;
