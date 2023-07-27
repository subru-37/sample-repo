import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import FeatureCard from './FeatureCard';
import slide1 from '../assets/flside1.png';
import slide2 from '../assets/fslide2.png';
import slide3 from '../assets/fslide3.png';
import slide4 from '../assets/fslide4.png';
import SlideShow from './Slideshow';
const Features = () => {
  const [options, setOptions] = React.useState({
    op1: false,
    op2: true,
    op3: false,
  });
  const op1 = React.createRef<HTMLButtonElement>();
  const op2 = React.createRef<HTMLButtonElement>();
  const op3 = React.createRef<HTMLButtonElement>();
  function handleClick(refn: any) {
    const value = refn.current.id;
    setOptions({
      op1: false,
      op2: false,
      op3: false,
    });
    setOptions((preValue) => {
      return {
        ...preValue,
        [value]: true,
      };
    });
    console.log(options);
  }
  const slideshow = [
    <FeatureCard
      background={
        'url(), transparent 100% / cover no-repeat'.substring(0, 4) +
        slide1 +
        'url(), transparent 100% / cover no-repeat'.substring(4)
      }
      cardname="Loreum Ipsum, Loreum Ipsum,"
      discprice="200"
      price="300"
    />,
    <FeatureCard
      background={
        'url(), transparent 100% / cover no-repeat'.substring(0, 4) +
        slide2 +
        'url(), transparent 100% / cover no-repeat'.substring(4)
      }
      cardname="Loreum Ipsum, Loreum Ipsum,"
      discprice="200"
      price="300"
    />,
    <FeatureCard
      background={
        'url(), transparent 100% / cover no-repeat'.substring(0, 4) +
        slide3 +
        'url(), transparent 100% / cover no-repeat'.substring(4)
      }
      cardname="Loreum Ipsum, Loreum Ipsum,"
      discprice="200"
      price="300"
    />,
    <FeatureCard
      background={
        'url(), transparent 100% / cover no-repeat'.substring(0, 4) +
        slide4 +
        'url(), transparent 100% / cover no-repeat'.substring(4)
      }
      cardname="Loreum Ipsum, Loreum Ipsum,"
      discprice="200"
      price="300"
    />,
  ];
  return (
    <Box
      sx={{
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          minHeight: '90vh',
          //   minWidth: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            minHeight: '85px',
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: 'green.darker', fontSize: '45px' }}
          >
            Featured Products
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'green.darker',
              fontSize: '18px',
              fontFamily: 'Roboto Slab',
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer Lorem ispum.
          </Typography>
        </Box>
        <Box
          sx={{
            width: '80vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button id="op1" ref={op1} onClick={() => handleClick(op1)}>
            <Typography
              sx={{
                color: options.op1 ? 'green.darker' : 'green.dark',
                fontSize: '40px',
                fontWeight: '600',
                textTransform: 'none',
              }}
            >
              Staples
            </Typography>
          </Button>
          <Button id="op2" ref={op2} onClick={() => handleClick(op2)}>
            <Typography
              sx={{
                color: options.op2 ? 'green.darker' : 'green.dark',
                fontSize: '40px',
                fontWeight: '600',
                textTransform: 'none',
              }}
            >
              New Arrivals
            </Typography>
          </Button>
          <Button id="op3" ref={op3} onClick={() => handleClick(op3)}>
            <Typography
              sx={{
                color: options.op3 ? 'green.darker' : 'green.dark',
                fontSize: '40px',
                fontWeight: '600',
                textTransform: 'none',
              }}
            >
              Best Sellers
            </Typography>
          </Button>
        </Box>
        <Box sx={{ display: options.op1 ? 'block' : 'none' }}>
          <SlideShow components={slideshow} slscroll={1} slshow={4} />
        </Box>
        <Box sx={{ display: options.op2 ? 'block' : 'none' }}>
          <SlideShow components={slideshow} slscroll={1} slshow={4} />
        </Box>
        <Box sx={{ display: options.op3 ? 'block' : 'none' }}>
          <SlideShow components={slideshow} slscroll={1} slshow={4} />
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
