import { Box } from '@mui/material';
import React from 'react';
import collection1 from '../assets/flside1.png'
type sampleprops = {
  background: string;
};
const SampleCard = ({background}: sampleprops) => {
  return (
    <Box
      sx={{
        height:'466px',
        width: '285px',
        backgroundImage: `url(${background})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"285px auto",
        borderRadius:'10px', 
        zIndex: '1000', 
        position: 'relative',
        margin: {xs: '20px', lg: '0px'}
      }}
    ></Box>
  );
};

export default SampleCard;
