import React from 'react';
import { Box } from '@mui/material';
import Hero from '../Components/Hero';
import '../styles/Landing.css';
import Features from '../Components/Features';
import Leaves from '../Components/Leaves';
import Collections from '../Components/Collections';
import Grass from '../Components/Grass';
import AboutUs from '../Components/AboutUs';
import Feedback from '../Components/Feedback';
const Landing = () => {
  return (
    <Box
      sx={{
        background: '#F5FCE7',
        backgroundImage: 'url("../src/assets/finalbg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw 100vh',
        minHeight:'800vh', 
        position:'relative'
      }}
    >
      <Hero />
      <Features/>
      <Leaves/>
      <Collections/>
      <Grass/>
      <AboutUs/>
      <Feedback/>
    </Box>
  );
};

export default Landing;
