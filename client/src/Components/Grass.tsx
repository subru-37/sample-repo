import React, { useRef, useState } from 'react';
import useNavbar from '../hooks/useNavbar';
import '../styles/grass.css';
import classNames from 'classnames';
type props = {
  checkposn: boolean;
}
const Grass = (props: props) => {
  const [scroll, open, toggleDrawer, width900, scrollp] = useNavbar();
  console.log(props.checkposn, scrollp)
  // console.log(scroll === false ? (props.checkposn ? 'stage0' : 'stage1') :'')
  const classnames = classNames({
    // stage0: scrollp < 2000,
    stage0:scrollp<2700 && props.checkposn === false,
    // stage1: scrollp >= 2000 && scrollp < 3047,
    stage1: props.checkposn === true,
    // stage2: scrollp >= 3047 && scrollp < 4900,
    stage2: scrollp >= 2700 && props.checkposn === false,
    // stage3: scrollp >= 4900 && scrollp < 5046,
    // stage4: scrollp >= 5046,
  });
  // console.log(scrollp);
  return <div className={classnames}></div>;
};

export default Grass;
