import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  reduceProduct,
  incrementProduct,
  addToCart,
  CartItemType,
} from '../Redux/features/CartSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { cartitems as sampleData } from '../sampledata/cartitem';
import Plus from '../utils/Plus';

type BoxProps = {
  id: string | undefined;
};
const CartButton = ({ id }: BoxProps) => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart);
  const index = sampleData.findIndex((item: any) => Number(id) === item.id);
  const cartindex = products.cart.findIndex(
    (item: any) => item.id === sampleData[index].id
  );
    // console.log(products)
  // const index = Number(id);
  // console.log(index);
  const removeProductHandler = (product: any) => {
    dispatch(reduceProduct(product));
  };
  const addProductHandler = (product: any) => {
    dispatch(addToCart(product));
  };
  const Notdefined = products.cart[cartindex] === undefined;
  if (Notdefined) {
    return (
      <Button
        sx={{
          '&:hover': {
            backgroundColor: 'green.darker',
          },
          backgroundColor: 'green.darker',
          minHeight: {xs:'30px',sm:'50px'},
          minWidth: {xs:'90px',sm:'120px'},
          // marginLeft: '25px',
          padding: '0px',
          cursor: 'pointer',
        }}
        onClick={() => {
          addProductHandler(sampleData[index]);
        }}
      >
        <Typography
          sx={{
            color: '#F5FCE7',
            fontSize: {xs:'12px',sm:'16px'},
            fontWeight: '500',
            marginRight: '25px',
          }}
        >
          {'Cart'}
        </Typography>
        <Plus />
      </Button>
    );
  } else {
    return (
      <Box
        sx={{
          backgroundColor: 'green.darker',
          height: {xs:'30px',sm:'50px'},
          width: {xs:'90px',sm:'120px'},
          borderRadius: '5px',
          backdropFilter: 'blur(3px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <RemoveIcon
          sx={{
            color: '#F5FCE7',
            borderRight: '0.5px solid #F5FCE7',
            fontSize: '5px',
            height: '75%',
            width: '33%',
            cursor: 'pointer',
          }}
          onClick={() => removeProductHandler(products.cart[cartindex])}
        />

        <Typography
          sx={{
            color: '#F5FCE7',
            fontSize: {xs:'14px',sm:'16px'},
            fontWeight: '400',
            height: '75%',
            width: '33%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {products.cart[cartindex].quantity}
        </Typography>
        <AddIcon
          sx={{
            color: '#F5FCE7',
            borderLeft: '0.5px solid #F5FCE7',
            fontSize: '5px',
            height: '75%',
            width: '33%',
            cursor: 'pointer',
          }}
          onClick={() => addProductHandler(products.cart[cartindex])}
        />
      </Box>
    );
  }
};

export default CartButton;
