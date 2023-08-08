import React from 'react';
import { Box, Typography } from '@mui/material';
import FeedbackCard from './FeedbackCard';
const Feedback = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: {xs:'column', sm: 'row'},
        minHeight: '100vh',
        minWidth: '100vw',
        marginTop:'100px'
      }}
    >
      <FeedbackCard
        bgcolor="#F8E6CA"
        titlecolor="#9C823F"
        rotate="5deg"
        name="John Doe"
        profession="profession"
        feedback="Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit "
      />
      <FeedbackCard
        bgcolor="#C2D76D"
        titlecolor="#7C903F"
        rotate="-5deg"
        name="John Doe"
        profession="profession"
        feedback="Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit "
      />
      <FeedbackCard
        bgcolor="#B18655"
        titlecolor="#75553E"
        rotate="5deg"
        name="John Doe"
        profession="profession"
        feedback="Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit "
      />
    </Box>
  );
};

export default Feedback;
