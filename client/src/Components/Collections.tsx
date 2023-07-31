import React from 'react';
import CollectionCard from './CollectionCard';
import { Box, Typography } from '@mui/material';
import SlideShow from './Slideshow';
import ExploreMore from '../utils/ExploreMore';
const Collections = () => {
  const contentItems = [
    { name: 'Loreum Ipsum, Loreum Ipsum' },
    { name: 'Loreum Ipsum, Loreum Ipsum' },
    { name: 'Loreum Ipsum, Loreum Ipsum' },
  ];
  const collectionItems = contentItems.map((value) => {
    return <CollectionCard content={value.name} />;
  });
//   console.log(collectionItems);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100dvh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '70vh',
          flexDirection: 'column',
          width: '80vw',
        }}
      >
        <Typography
          sx={{
            width: '100%',
            textAlign: 'left',
            color: 'green.darker',
            fontSize: '40px',
            fontWeight: '500',
            lineHeight: '47.4px',
          }}
        >
          Collections
        </Typography>
        <SlideShow show1100={3} show900={3} show600={2} show400={1} arrows={false} width='100%' components={collectionItems} />
        <ExploreMore/>
      </Box>
    </Box>
  );
};

export default Collections;
