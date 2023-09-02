import React, { Dispatch, SetStateAction, createRef } from 'react';
import { Box } from '@mui/material';
import Hero from '../Components/Hero';
import '../styles/Landing.css';
import Features from '../Components/Features';
import Leaves from '../Components/Leaves';
import Collections from '../Components/Collections';
import AboutUs from '../Components/AboutUs';
import Feedback from '../Components/Feedback';
import Faq from '../Components/Faq';
type props = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}
const Landing = (props: props) => {
  // const onscreen = useOnScreen(ref1);
  // console.log(onscreen)
  return (
    <Box
      sx={{
        background: '#F5FCE7',
        backgroundImage: 'url("../src/assets/finalbg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw 100vh',
        // minHeight:'800vh', 
        position:'relative'
      }}
    >
      <Hero/>
      <Features/>
      <Leaves/>
      {/* <Grass checkposn={onscreen}/> */}
      <Collections/>
      <AboutUs/>
      <Feedback/>
      <Faq/>
    </Box>
  );
};

export default Landing;
