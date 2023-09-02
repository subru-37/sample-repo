import React from 'react';
import { Box, Typography } from '@mui/material';
import CartButton from './CartButton';
import { useNavigate } from 'react-router-dom';
interface props {
  background: string;
  cardname: string;
  discprice: string;
  price: string;
  id: number;
  route: string;
}
const FeatureCard = (props: props) => {
  const navigation = useNavigate();
  const index: string | undefined = String(props.id);
  return (
    <Box
      sx={{
        // marginRight: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: { xs: 'row', sm: 'column' },
        cursor: 'pointer',
      }}
    >
      <Box
        sx={{
          width: { xs: '145px', sm: '290px' },
          height: { xs: '179px', sm: '358px' },
          flexShrink: '0',
          background: props.background,
          backgroundSize: { xs: '100% 179px', sm: '100% 358px' },
        }}
        onClick={() => navigation(`${props.route}/${props.id}`)}
      ></Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'column',
          minHeight:{xs:'179px', sm:'0px'}
        }}
      >
        <Box
          sx={{
            marginTop: '20px',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: {xs:'170px',sm:'290px'},
            borderBottom: '1px solid #00584A',
          }}
          onClick={() => navigation(`${props.route}/${props.id}`)}
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
              sx={{
                fontWeight: '700',
                color: 'green.darker',
                fontSize: '16px',
              }}
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
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            margin: '10px 0px',
          }}
        >
          <CartButton id={index} />
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureCard;
