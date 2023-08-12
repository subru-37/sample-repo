import { Box } from '@mui/material';
import React from 'react';
type sampleprops = {
  type1: boolean;
};
const SampleCard = (props: sampleprops) => {
  return (
    <Box
      sx={{
        height: props.type1 ? '395px' : '466px',
        width: '285px',
        backgroundColor: props.type1 ? '#ADDCAF' : '#3CA373',
        borderRadius:'10px', 
        zIndex: '1000', 
        position: 'relative',
        margin: {xs: '20px', lg: '0px'}
      }}
    ></Box>
  );
};

export default SampleCard;
