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
        justifyContent:'center'
      }}
    >
      <Typography
        component="body"
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
