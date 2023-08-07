import React from 'react';
import { Box, Typography } from '@mui/material';
const AboutUs = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        position: 'relative',
        zIndex: '1000',
      }}
    >
      {/* container */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80vh',
          width: { xs: '95vw', sm: '90vw' },
          flexDirection: 'column',
          marginTop: '150px'
        }}
      >
        {/* title */}
        <Box
          sx={{
            width: { xs: '350px', sm: '450px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            height: '200px',
          }}
        >
          <Typography
            sx={{
              color: 'green.dark',
              textAlign: 'center',
              fontSize: { xs: '20px', sm: '40px', md: '55px' },
              fontWeight: '500',
              lineHeight: '97.27px',
              letterSpacing: '-3.6px',
              marginRight: '10px',
            }}
          >
            Cultivating
          </Typography>
          {/* health */}

          <Typography
            component="h3"
            sx={{
              color: '#FEFAE0',
              fontFamily: 'Plus Jakarta Sans',
              fontSize: { xs: '20px', sm: '40px', md: '55px' },
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '121.5%',
              letterSpacing: '-3.6px',
              textDecorationLine: 'underline',
            }}
          >
            health,
          </Typography>

          <Typography
            component="h3"
            sx={{
              color: '#FEFAE0',
              fontFamily: 'Plus Jakarta Sans',
              fontSize: { xs: '20px', sm: '40px', md: '55px' },
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '121.5%',
              letterSpacing: '-3.6px',
              textDecorationLine: 'underline',
              paddingLeft: '20px',
            }}
          >
            one order
          </Typography>
          <Typography
            sx={{
              color: 'green.dark',
              textAlign: 'center',
              fontSize: { xs: '20px', sm: '40px', md: '55px' },
              fontWeight: '500',
              lineHeight: '97.27px',
              letterSpacing: '-3.6px',
              marginLeft: '10px',
            }}
          >
            at a time
          </Typography>
        </Box>
        <Box
          sx={{ width: '100vw', height: '1px', backgroundColor: '#FEFAE0;' }}
        />
        {/* content */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', sm: 'row' },
            width: { xs: '100vw', sm: '600px', md: '80vw' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-around',
              width: { xs: '95vw', sm: '30%' },
              flexDirection: 'column',
              height: '50%', 

            }}
          >
            <Typography
              sx={{
                color: '#FFE8C0',
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '24.3px',
                textDecorationLine: 'underline',
              }}
            >
              Contact us
            </Typography>
            <Typography
              sx={{
                color: '#FFE8C0',
                fontFamily: 'Plus Jakarta Sans',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '24.3px',
                textDecorationLine: 'underline',
              }}
            >
              About Us
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: '95vw', sm: '60%' },
              padding: { xs: '7px', sm: '20px', md: '75px' },
            }}
          >
            <Typography
              sx={{
                color: '#FEFAE0',
                fontFamily: 'Plus Jakarta Sans',
                fontSize: { xs: '18px', sm: '25px', md: '30px' },
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '121.5%',
              }}
            >
              Our experts are above all passionate about organizational
              efficiency powered by the valuation of data. This passion has
              driven us to specialize in advanced methods of process automation
              and data analytics.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
