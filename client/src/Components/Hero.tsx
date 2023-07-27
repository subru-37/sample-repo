import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Button, TextField, InputAdornment } from '@mui/material';
import Search from '../utils/Search';
const Hero = () => {
  const [name, setName] = React.useState('');
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          minHeight: '270px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexDirection: 'column',
          marginLeft: { xs: '0px', md: '100px' },
        }}
      >
        <Typography variant="h3" component="div">
          Lorem ipsum dolor sit amet, consectetuer
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: 'green.darker', fontSize: '16px' }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            minWidth: '700px',
          }}
        >
          <Button
            sx={{
              bgcolor: 'green.dark',
              borderRadius: '10px',
              height: '55px',
              width: '150px',
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
                height: '56px',
                borderRadius: '10px',
                position: 'relative',
                left: '10px',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#ACD2AE',
                  textTransform: 'none',
                  fontSize: '16px',
                }}
              >
                Search by Category
              </Typography>
            </Button>
            <TextField
              id="outlined-controlled"
              label="Search By Product"
              sx={{
                width: '350px',
                '& .MuiOutlinedInput-root': {
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
                    <Search/>
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
