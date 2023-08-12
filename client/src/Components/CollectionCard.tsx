import { Box, Typography } from '@mui/material';
import React from 'react';
type props = {
  content: string;
};
const CollectionCard = (props: props) => {
  return (
    <Box
      sx={{
        borderRadius: '20px',
        display: 'flex',
        width: '367px',
        height: '451px',
        backgroundColor: 'green.lighter',
        alignItems:'flex-end',
        zIndex: '1200',
        position: 'relative', 
        justifyContent:'center'
      }}
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
        {props.content}
      </Typography>
    </Box>
  );
};

export default CollectionCard;
