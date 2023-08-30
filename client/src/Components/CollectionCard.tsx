import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
type props = {
  content: string | undefined;
  background: string | undefined;
};
const CollectionCard = ({content,background}: props) => {
  const navigation = useNavigate();
  return (
    <Box
      sx={{
        borderRadius: '20px',
        display: 'flex',
        width: {xs: '350px',sm: '300px',md: '367px'},
        height: '451px',
        backgroundImage: `url(${background})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"285px auto",
        backgroundPosition:'top center',
        alignItems:'flex-end',
        zIndex: '1200',
        position: 'relative', 
        justifyContent:'center',
        cursor:'pointer'
      }}
      onClick={()=> navigation('/products')}
    >
      <Typography
        component="p"
        sx={{
          color: 'green.darker',
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: '600',
          margin:'20px 0px'
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default CollectionCard;
