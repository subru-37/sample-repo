import React from 'react';
import { Box, Typography } from '@mui/material';
import CartButton from './CartButton';
interface props {
  background: string;
  cardname: string;
  discprice: string;
  price: string;
  id: number;
}
const FeatureCard = (props: props) => {
  const index: string | undefined = String(props.id);
  return (
    <Box
      onClick={() => console.log(index)}
      sx={{
        // marginRight: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '290px',
          height: '358px',
          flexShrink: '0',
          background: props.background,
          backgroundSize: '100% 358px',
        }}
      ></Box>
      <Box
        sx={{
          marginTop: '20px',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderBottom: '1px solid #00584A',
        }}
      >
        <Typography
          sx={{
            color: 'green.darker',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '19.44px',
          }}
        >
          {props.cardname}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Typography
            sx={{ fontWeight: '700', color: 'green.darker', fontSize: '16px' }}
          >
            {props.discprice}
          </Typography>
          <Typography
            sx={{
              fontWeight: '600',
              color: '#ACD2AE',
              fontSize: '12px',
              textDecoration: 'line-through',
              marginLeft: '15px',
            }}
          >
            {props.price}
          </Typography>
        </Box>
        <Box sx={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', margin:'10px 0px'}}>
          <CartButton id={index} />
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureCard;
