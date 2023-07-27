import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../styles/SlideShow.css'
import NavigationIcon from '@mui/icons-material/Navigation';
type props = {
  components: any;
  color?: string;
  indicators?: boolean;
  arrows?: boolean;
  slshow: number;
  slscroll:number;
};

export default function SlideShow(props: props) {
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
        slidesToScroll={props.slscroll}
        slidesToShow={props.slshow}
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
