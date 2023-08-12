import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Button, TextField, InputAdornment } from '@mui/material';
import Search from '../utils/Search';
const Hero = () => {
  const [name, setName] = React.useState('');
  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: { xs: 'center', sm: 'flex-start' },
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          minHeight: { xs: '45vh', sm: '250px', md: '270px' },
          display: 'flex',
          alignItems: { xs: 'center', sm: 'flex-start' },
          justifyContent: 'space-between',
          flexDirection: 'column',
          margin: { xs: '0px 0px 40px 0px', sm: '0 35px', md: '0 100px' },
          padding: { xs: '10px', sm: '0px' },
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontSize: {
              xs: '40px !important',
              sm: '50px !important',
              md: '64px',
            },
            width: { xs: '90vw', sm: '500px', md: '650px' },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'green.light',
            fontSize: { xs: '16px', sm: '20px' },
            textAlign: { xs: 'center', sm: 'left' },
            marginBottom: { xs: '50px', sm: '0px' },
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column-reverse', sm: 'row' },
            width: { xs: '90vw', sm: '500px', md: '700px' },
            alignItems: 'center',
            minHeight: { xs: '120px', sm: '0px' },
          }}
        >
          <Button
            sx={{
              bgcolor: 'green.dark',
              borderRadius: '10px',
              transition: '0.25s',
              height: { xs: '45px', sm: '55px' },
              width: { xs: '125px', sm: '150px' },
              '&:hover': {
                bgcolor: '#DDA15E !important',
                transition: '0.25s',
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'green.darker',
                fontSize: '16px',
                textTransform: 'none',
              }}
            >
              Shop Now
            </Typography>
          </Button>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <Button
              sx={{
                bgcolor: 'green.darker',
                height: { xs: '50.5px', sm: '57px', md: '56.5px' },
                transition: '0.25s',
                borderRadius: '10px',
                position: 'relative',
                zIndex: '100',
                left: '10px',
                '&:hover': {
                  bgcolor: '#DDA15E !important',
                  transition: '0.25s',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#ACD2AE',
                  textTransform: 'none',
                  fontSize: '16px',
                  '&:hover': {
                    color: '#00584A; !important',
                    transition: '0.25s',
                  },
                }}
              >
                Search by Category
              </Typography>
            </Button>
            <TextField
              id="outlined-controlled"
              label="Search By Product"
              sx={{
                height: { xs: '50px', sm: 'auto' },
                width: { sm: '300px', md: '350px' },
                '& .MuiOutlinedInput-root': {
                  height: { xs: '50px', sm: 'auto' },
                  backgroundColor: 'transparent',
                  color: 'green.darker',
                  '& fieldset': {
                    borderTop: '2px solid #00584A',
                    borderLeft: 'none',
                    borderRight: '2px solid #00584A',
                    borderBottom: '2px solid #00584A',
                    borderTopLeftRadius: '0px !important',
                    borderBottomLeftRadius: '0px !important',
                    color: 'green.darker',
                  },
                  '&.Mui-focused fieldset': {
                    borderTop: '2px solid #00584A',
                    borderLeft: 'none',
                    borderRight: '2px solid #00584A',
                    borderBottom: '2px solid #00584A',
                    borderTopLeftRadius: '0px !important',
                    borderBottomLeftRadius: '0px !important',
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
              InputProps={{
                style: {
                  color: 'green.darker',
                  fontFamily: 'Plus Jakarta Sans',
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style: {
                  color: '#3CA373',
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: '16px',
                },
              }}
              value={name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value);
              }}
            ></TextField>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
