import React from 'react';
import CollectionCard from './CollectionCard';
import { Box, Typography } from '@mui/material';
import SlideShow from './Slideshow';
import ExploreMore from '../utils/ExploreMore';
import SampleCard from './SampleCard';
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
        <SlideShow
          show1100={3}
          show900={3}
          show600={2}
          show400={1}
          arrows={false}
          width="100%"
          components={collectionItems}
        />
        <ExploreMore />
        {/* sample boxes */}

        <Box
          sx={{
            marginTop: '300px',
            width: { xs: '350px', sm: '600px', md: '80vw' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'space-between', sm: 'center' },
              alignItems: 'center',
              flexDirection: { sm: 'column', md: 'row' },
              width: { xs: '95vw', sm: '80vw' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: {
                  xs: 'center',
                  sm: 'flex-start',
                },
                flexWrap: 'wrap',
              }}
            >
              <SampleCard type1={true} />
              <SampleCard type1={false} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: {
                  xs: 'center',
                  sm: 'flex-end',
                },
                flexWrap: 'wrap',
              }}
            >
              <SampleCard type1={true} />
              <SampleCard type1={false} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Collections;
