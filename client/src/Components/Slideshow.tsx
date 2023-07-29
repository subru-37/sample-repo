import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../styles/SlideShow.css';
import NavigationIcon from '@mui/icons-material/Navigation';
type props = {
  components: any;
  color?: string;
  indicators?: boolean;
  arrows?: boolean;
};
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SlideShow(props: props) {
  const width1100 = useMediaQuery('(min-width:1100px)');
  const width900 = useMediaQuery('(min-width:900px)');
  const width600 = useMediaQuery('(min-width:600px)');
  const width400 = useMediaQuery('(min-width:400px)');
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',
  };
  return (
    <div className="slide-container">
      <Slide
        duration={2500}
        transitionDuration={700}
        slidesToScroll={1}
        slidesToShow={!width1100 ? (!width900 ? (!width600 ? 1 : 2) : 3) : 4}
        prevArrow={
          <NavigationIcon
            sx={{
              transform: 'rotate(270deg)',
              color: props.color,
              fontSize: '25px',
            }}
          />
        }
        nextArrow={
          <NavigationIcon
            sx={{
              transform: 'rotate(90deg)',
              color: props.color,
              fontSize: '25px',
            }}
          />
        }
        indicators={props.indicators}
        arrows={props.arrows}
        autoplay={false}
      >
        {props.components.map((value: any, index: any) => (
          <div key={index}>{value}</div>
        ))}
      </Slide>
    </div>
  );
}
