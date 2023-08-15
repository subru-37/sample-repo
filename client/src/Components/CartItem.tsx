import React from 'react';
import { Box, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import WasteCan from '../utils/WasteCan';
type props = {
  price: string;
  discprice: string;
  name: string;
  quanity: number;
  image: string;
};
const CartItem = ({ price, discprice, name, quanity, image }: props) => {
  console.log(image);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap:'wrap',
        margin:'30px 0',
        width: '100%',
      }}
    >
      {/* row */}
      {/* picture */}
      <Box
        sx={{
          width: '180px', //180
          height: '222px', //x
          borderRadius: '20px',
          background: image,
          backgroundSize: '180px 222px',
        }}
      />
      {/* product details */}
      <Box
        sx={{
          height: '222px',
          width: '180px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <Box sx={{ marginBottom: '30px' }}>
          <Typography
            sx={{ color: 'green.darker', fontSize: '12px', fontWeight: '300' }}
          >
            {name}
          </Typography>
          {/* price */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}
          >
            <Typography
              //   component={'h6'}
              sx={{
                color: 'green.darker',
                fontSize: '14px',
                margin: '10px 5px',
                fontWeight: '600',
              }}
            >
              {discprice}
            </Typography>
            <Typography
              //   component={'h6'}
              sx={{
                color: '#C2D76D',
                fontSize: '12px',
                margin: '10px 5px',
                fontWeight: '600',
                textDecorationLine: 'line-through',
              }}
            >
              {price}
            </Typography>
          </Box>
          {/* quanity */}
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection:'row'}}>
            <Box
              sx={{
                backgroundColor: 'green.darker',
                height: '50px',
                width: '120px',
                borderRadius: '5px',
                backdropFilter: 'blur(3px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row'
              }}
            >
              <RemoveIcon
                sx={{
                  color: '#F5FCE7',
                  borderRight: '0.5px solid #F5FCE7',
                  fontSize:'5px',
                  height: '75%',
                  width: '33%',
                }}
              />
              <Typography
                sx={{
                  color: '#F5FCE7',
                  fontSize: '16px',
                  fontWeight: '400',
                  height: '75%',
                  width: '33%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {quanity}
              </Typography>
              <AddIcon
                sx={{
                  color: '#F5FCE7',
                  borderLeft: '0.5px solid #F5FCE7',
                  fontSize:'5px',
                  height: '75%',
                  width: '33%',
                }}
              />
            </Box>
            <WasteCan/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
