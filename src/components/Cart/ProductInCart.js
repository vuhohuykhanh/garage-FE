import React, { useState } from "react";
import {
  Box,
  Typography,
  Input,
  Avatar,
  Button,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export default function ProductInCart({ item }) {
  const [quantity, setQuantity] = useState(item?.quantity);
  return (
    <Box
      width="80.4%"
      m="auto"
      sx={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <Box
        width="20%"
        sx={{
          border: "1px solid #DEDEDE",
          height: "180px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width="150px"
          height="130px"
          src={require("../../assets/images/bg1.png")}
        />
      </Box>
      <Box
        width="40%"
        sx={{
          border: "1px solid #DEDEDE",
          height: "180px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
          {item?.nameProduct}
        </Typography>
      </Box>
      <Box
        width="15%"
        sx={{
          border: "1px solid #DEDEDE",
          height: "180px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button>-</Button>
        <TextField
          color="secondary"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Button>+</Button>
      </Box>
      <Box
        width="15%"
        sx={{
          border: "1px solid #DEDEDE",
          height: "180px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {item?.price}
      </Box>
      <Box
        width="10%"
        sx={{
          border: "1px solid #DEDEDE",
          height: "180px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button>
          <img
            width="35px"
            height="35px"
            src={require("../../assets/images/deleteIcon.png")}
          />
        </Button>
      </Box>
    </Box>
  );
}
