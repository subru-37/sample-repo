import React, { LegacyRef, RefObject } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../styles/SlideShow.css';
import NavigationIcon from '@mui/icons-material/Navigation';
type props = {
  components: any;
  color?: string;
  indicators?: boolean;
  arrows?: boolean;
  show1100: number;
  show900: number;
  show600: number;
  show400: number;
  width: string;
  ref1?:RefObject<HTMLDivElement>
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
    <div
      className="slide-container"
      ref={props.ref1}
      style={{ width: props.width, zIndex: '1000', position: 'relative' }}
    >
      <Slide
        duration={2500}
        transitionDuration={700}
        slidesToScroll={1}
        slidesToShow={
          !width1100
            ? !width900
              ? !width600
                ? props.show400
                : props.show600
              : props.show900
            : props.show1100
        }
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
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {value}
          </div>
        ))}
      </Slide>
    </div>
  );
}
