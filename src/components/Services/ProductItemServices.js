import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Divider,
  Box,
} from "@mui/material";

const ProductItemService = (product) => {
  return (
    <>
      <Card sx={{ backgroundColor: "#FFFFFF" }}>
        <CardMedia
          component="img"
          height="140"
          image={product.img}
          alt="green iguana"
        />
        <CardHeader
          title={
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "18px", fontWeight: "700", color: "#000000" }}
            >
              {product.title}
            </Typography>
          }
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{ fontSize: "16px", fontWeight: "400", color: "#B4B4B4" }}
            >
              {product.price}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "25px", fontWeight: "700", color: "#0486FF" }}
            >
              {product.priceSale}
            </Typography>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img src={require("../../assets/images/iconSale.png")} />
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {product.sale}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductItemService;
