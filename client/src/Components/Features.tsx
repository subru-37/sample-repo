import React from 'react';
import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import FeatureCard from './FeatureCard';
import slide1 from '../assets/flside1.png';
import slide2 from '../assets/fslide2.png';
import slide3 from '../assets/fslide3.png';
import slide4 from '../assets/fslide4.png';
import SlideShow from './Slideshow';
import RightArrow from '../utils/RightArrow';
import ExploreMore from '../utils/ExploreMore';
import { products } from '../sampledata/products';
import { Link } from 'react-router-dom';
const Features = () => {
  const [options, setOptions] = React.useState({
    op0: false,
    op1: true,
    op2: false,
  });
  const op0 = React.createRef<HTMLButtonElement>();
  const op1 = React.createRef<HTMLButtonElement>();
  const op2 = React.createRef<HTMLButtonElement>();
  const ref1 = React.createRef<HTMLButtonElement>();
  //   const menuItems = ['Staples', 'New Arrivals', 'Best Sellers'];
  const menuItems = [
    { name: 'Staples', ref: op0 },
    { name: 'New Arrivals', ref: op1 },
    { name: 'Best Sellers', ref: op2 },
  ];
  const [value, setValue] = React.useState(menuItems[0].name);
  function handleClick(refn: any) {
    const value = refn.current.id;
    setOptions({
      op0: false,
      op1: false,
      op2: false,
    });
    setOptions((preValue) => {
      return {
        ...preValue,
        [value]: true,
      };
    });
    // console.log(options);
  }
  function handleChange(event: any) {
    const value = 'op' + event.target.id.charAt(12);
    setValue(menuItems[event.target.id.charAt(12)].name);
    // console.log(value);
    setOptions({
      op0: false,
      op1: false,
      op2: false,
    });
    setOptions((preValue) => {
      return {
        ...preValue,
        [value]: true,
      };
    });
  }
  const filtered = products.filter((value, index) => value.id > 2);
  const slideshow = filtered.map((value, index) => (
    <Link style={{ textDecoration: 'none' }} to={`/products/${value.id}`}>
      {value.element}
    </Link>
  ));
  // console.log(slideshow);
  return (
    <Box
      sx={{
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
      }}
      id="features"
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
            sx={{
              color: 'green.darker',
              fontSize: { xs: '40px', sm: '45px' },
              textAlign: 'center',
            }}
          >
            Featured Products
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'green.darker',
              fontSize: '20px',
              fontFamily: 'Roboto Slab',
              maxWidth: { xs: '350px', sm: '100vw' },
              textAlign: 'center',
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer Lorem ispum.
          </Typography>
        </Box>
        {/* <Box
          sx={{
            width: '80vw',
            alignItems: 'center',
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'space-between',
            margin: '30px 0',
          }}
        >
          <Button id="op0" ref={op0} onClick={() => handleClick(op0)}>
            <Typography
              sx={{
                color: options.op0 ? 'green.darker' : 'green.dark',
                fontSize: { sm: '30px', md: '40px' },
                display: { xs: 'none', sm: 'flex' },
                fontWeight: '600',
                textTransform: 'none',
              }}
            >
              Staples
            </Typography>
          </Button>
          <Button id="op1" ref={op1} onClick={() => handleClick(op1)}>
            <Typography
              sx={{
                color: options.op1 ? 'green.darker' : 'green.dark',
                fontSize: { sm: '30px', md: '40px' },
                fontWeight: '600',
                textTransform: 'none',
              }}
            >
              New Arrivals
            </Typography>
          </Button>
          <Button id="op2" ref={op2} onClick={() => handleClick(op2)}>
            <Typography
              sx={{
                color: options.op2 ? 'green.darker' : 'green.dark',
                fontSize: { sm: '30px', md: '40px' },
                display: { xs: 'none', sm: 'flex' },
                fontWeight: '600',
                textTransform: 'none',
              }}
            >
              Best Sellers
            </Typography>
          </Button>
        </Box> */}
        {/* <Autocomplete
          value={value}
          ref={ref1}
          onChange={handleChange}
          options={menuItems.map((value) => value.name)}
          sx={{ display: { xs: 'flex', sm: 'none' } }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select your option"
              InputLabelProps={{
                style: {
                  color: 'green.darker',
                  fontFamily: 'Plus Jakarta Sans',
                },
              }}
              sx={{
                width: '80vw',
                margin: '20px 0',
                '& .MuiOutlinedInput-root': {
                  // height: {xs: '50px', sm: 'auto'},
                  backgroundColor: 'transparent',
                  color: 'green.darker',
                  '& fieldset': {
                    border: '2px solid #00584A',
                    color: 'green.darker',
                  },
                  '&.Mui-focused fieldset': {
                    border: '2px solid #00584A',
                    color: 'green.darker',
                  },
                },
                '& .MuiOutlinedInput-root:hover': {
                  '& fieldset': {
                    border: 'green.darker',
                    color: 'green.darker',
                  },
                },
              }}
            />
          )}
        /> */}
        {/* <Box sx={{ display: options.op0 ? 'block' : 'none' }}>
          <SlideShow
            show1100={4}
            show900={3}
            show600={2}
            show400={1}
            components={slideshow}
            arrows={false}
            width="95vw"
          />
        </Box> */}
        <Box sx={{ display: options.op1 ? 'block' : 'none' }}>
          <SlideShow
            show1100={4}
            show900={3}
            show600={2}
            show400={1}
            components={slideshow}
            width="95vw"
            arrows={false}
          />
        </Box>
        {/* <Box sx={{ display: options.op2 ? 'block' : 'none' }}>
          <SlideShow
            show1100={4}
            show900={3}
            show600={2}
            show400={1}
            components={slideshow}
            width="95vw"
            arrows={false}
          />
        </Box> */}
      </Box>
      <ExploreMore />
    </Box>
  );
};

export default Features;
