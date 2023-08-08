import React from 'react';
import { Box, Typography } from '@mui/material';
import MUIAccordion from './MUIAccordion';
const Faq = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '1000',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: { xs: '100vw', sm: '90vw', md: '80vw' },
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          sx={{
            width: { xs: '95vw', sm: '45%', md: '30%' },
            display: 'flex',
            justifyContent: 'center',
            padding: { xs: '10px', sm: '20px' },
            flexDirection: 'column',
            marginTop: {xs:'0px', sm: '20px', md: '80px'}
          }}
        >
          <Typography
            component={'h4'}
            sx={{
              color: '#FBFCFB',
              fontSize: '45px',
              fontWeight: '600',
              lineHeight: '68px',
            }}
          >
            FAQ
          </Typography>
          <Typography
            component={'h4'}
            sx={{
              color: '#FFE8C0',
              fontFamily: 'Lucida Sans',
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: 'normal',
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: '95vw', sm: '55%', md: '70%' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: { xs: '10px', sm: '20px', md: '80px' },
            flexDirection:'column'
          }}
        >
          <MUIAccordion
            question="Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
            answer="Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam."
          />
          <MUIAccordion
            question="Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
            answer="Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          Aliquam eget maximus est, id dignissim quam."
          />
          <MUIAccordion
            question="Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
            answer="Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam."
          />
          <MUIAccordion
            question="Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
            answer="Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
      Aliquam eget maximus est, id dignissim quam."
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Faq;
