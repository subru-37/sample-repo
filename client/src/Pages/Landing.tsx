import React from 'react';
import { Box } from '@mui/material';
import Hero from '../Components/Hero';
import '../styles/Landing.css';
import Features from '../Components/Features';
const Landing = () => {
  return (
    <Box
      sx={{
        background: '#F5FCE7',
        minHeight: '100vh',
        backgroundImage: 'url("../src/assets/finalbg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw 100vh',
      }}
    >
      <Hero />
      <Features/>
    </Box>
  );
};

export default Landing;
