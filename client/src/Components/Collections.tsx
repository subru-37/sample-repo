import React, { LegacyRef, createRef, useRef } from 'react';
import CollectionCard from './CollectionCard';
import { Box, Typography } from '@mui/material';
import SlideShow from './Slideshow';
import ExploreMore from '../utils/ExploreMore';
import SampleCard from './SampleCard';
import useOnScreen from '../hooks/useOnScreen';
import Grass from './Grass';
import collection1 from '../assets/flside1.png';
import collection2 from '../assets/fslide2.png';
import collection3 from '../assets/fslide3.png';
import collection4 from '../assets/fslide4.png';
const Collections = (props: any) => {
  console.log(`url(${collection1}) no-repeat 285px auto/auto`);
  const contentItems = [
    { name: 'Loreum Ipsum, Loreum Ipsum',background: collection1 },
    { name: 'Loreum Ipsum, Loreum Ipsum',background: collection2 },
    { name: 'Loreum Ipsum, Loreum Ipsum',background: collection3 },
  ];
  const collectionItems = contentItems.map((value) => {
    console.log(value)
    return <CollectionCard content={value.name} background={value.background}/>;
  });
  const slides = [
    <SampleCard background={collection1} />,
    <SampleCard background={collection2} />,
    <SampleCard background={collection3} />,
    <SampleCard background={collection4} />,
  ];
  const ref1 = props.ref1;
  const onscreen = useOnScreen(ref1);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100dvh',
        position: 'relative',
        width: '100vw',
      }}
    >
      <Grass checkposn={onscreen} />
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
          width="95vw"
          components={collectionItems}
          // ref1={ref1}
        />
        <ExploreMore ref1={ref1} />
        {/* sample boxes */}
      </Box>
      <Box
        sx={{
          marginTop: { xs: '100px', lg: '200px' },
          width: { xs: '350px', sm: '600px', md: '80vw' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <SlideShow
          components={slides}
          indicators={false}
          arrows={false}
          show1100={4}
          show900={3}
          show600={2}
          show400={1}
          width="95vw"
        />
      </Box>
    </Box>
  );
};

export default Collections;
