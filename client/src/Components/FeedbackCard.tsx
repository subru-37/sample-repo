import React from 'react';
import { Box, Typography } from '@mui/material';
type styleprops = {
  bgcolor: string;
  titlecolor: string;
  rotate: string;
  name: string;
  profession: string;
  feedback: string;
};
const FeedbackCard = (props: styleprops) => {
  return (
    <Box
      sx={{
        width: { xs: '100vw', sm: '400px' },
        height: '550px',
        borderRadius: '40px',
        backgroundColor: props.bgcolor,
        transform: `rotate(${props.rotate})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '25px',
        boxSizing:'border-box'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: '65%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          <Typography
            component={'h4'}
            sx={{
              color: props.titlecolor,
              textAlign: 'center',
              fontSize: '28px',
              fontWeight: '700',
              letterSpacing: '-1.28px',
            }}
          >
            {props.name}
          </Typography>
          <Typography
            component={'h4'}
            sx={{
              color: props.titlecolor,
              textAlign: 'center',
              fontSize: '20px',
              fontWeight: '300',
              letterSpacing: '-0.96px',
              fontStyle: 'italic',
            }}
          >
            {props.profession}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '0.5px',
            backgroundColor: props.titlecolor,
          }}
        />
        <Typography
          component={'h4'}
          sx={{
            color: props.titlecolor,
            textAlign: 'center',
            fontSize: '28px',
            fontWeight: '500',
            letterSpacing: '-1.28px',
          }}
        >
          {props.feedback}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeedbackCard;
