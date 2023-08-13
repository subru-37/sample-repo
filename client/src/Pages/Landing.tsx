import React, { Dispatch, SetStateAction, createRef } from 'react';
import { Box } from '@mui/material';
import Hero from '../Components/Hero';
import '../styles/Landing.css';
import Features from '../Components/Features';
import Leaves from '../Components/Leaves';
import Collections from '../Components/Collections';
import Grass from '../Components/Grass';
import AboutUs from '../Components/AboutUs';
import Feedback from '../Components/Feedback';
import Faq from '../Components/Faq';
import useOnScreen from '../hooks/useOnScreen';
type props = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}
const Landing = (props: props) => {
  const ref1 = createRef<HTMLDivElement>();
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
      <Hero name={props.name} setName={props.setName}/>
      <Features/>
      <Leaves/>
      {/* <Grass checkposn={onscreen}/> */}
      <Collections ref1={ref1}/>
      <AboutUs/>
      <Feedback/>
      <Faq/>
    </Box>
  );
};

export default Landing;
