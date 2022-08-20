import React, { useState } from 'react';
import {
  Box,
  Typography,
  Input,
  Avatar,
  Button,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export default function ProductInCart({ item, setItems }) {
  const [quantity, setQuantity] = useState(item?.quantity);

  const handleIncrease = () => {
    console.log(quantity);
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    console.log(quantity);
    setQuantity(quantity - 1);
  };

  const handleDeleteItem = () => {
    const items = JSON.parse(localStorage.getItem('items'));
    const newItems = items?.filter(
      (value) => value.productId !== item?.productId
    );
    localStorage.setItem('items', JSON.stringify(newItems));
    setItems(newItems);
  };

  return (
    <Box
      width="80.4%"
      m="auto"
      sx={{ display: 'flex', justifyContent: 'space-evenly' }}
    >
      <Box
        width="20%"
        sx={{
          border: '1px solid #DEDEDE',
          height: '180px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          width="150px"
          height="130px"
          src={require('../../assets/images/bg1.png')}
        />
      </Box>
      <Box
        width="40%"
        sx={{
          border: '1px solid #DEDEDE',
          height: '180px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>
          {item?.name}
        </Typography>
      </Box>
      <Box
        width="15%"
        sx={{
          border: '1px solid #DEDEDE',
          height: '180px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button onClick={handleDecrease}>-</Button>
        <TextField
          color="secondary"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Button onClick={handleIncrease}>+</Button>
      </Box>
      <Box
        width="15%"
        sx={{
          border: '1px solid #DEDEDE',
          height: '180px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {item?.price}
      </Box>
      <Box
        width="10%"
        sx={{
          border: '1px solid #DEDEDE',
          height: '180px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button onClick={handleDeleteItem}>
          <img
            width="35px"
            height="35px"
            src={require('../../assets/images/deleteIcon.png')}
          />
        </Button>
      </Box>
    </Box>
  );
}
