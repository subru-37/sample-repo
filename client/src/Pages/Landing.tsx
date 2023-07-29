import React from 'react';
import { Box } from '@mui/material';
import Hero from '../Components/Hero';
import '../styles/Landing.css';
import Features from '../Components/Features';
import Leaves from '../Components/Leaves';
const Landing = () => {
  return (
    <Box
      sx={{
        background: '#F5FCE7',
        backgroundImage: 'url("../src/assets/finalbg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw 100vh',
      }}
    >
      <Hero />
      <Features/>
      <Leaves/>
    </Box>
  );
};

export default Landing;
