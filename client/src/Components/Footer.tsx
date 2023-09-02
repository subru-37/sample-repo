import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const year = 2023;
  return (
    <Box
      sx={{
        minHeight: '75px',
        minWidth: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '0px',
        zIndex:'1000'
      }}
    >
      <Typography sx={{ color: 'green.dark', fontSize: '20px' }}>
        Copyright © {year} Subscribe Nature
      </Typography>
    </Box>
  );
};

export default Footer;
