import React, { useRef, useState } from 'react';
import useNavbar from '../hooks/useNavbar';
import '../styles/grass.css';
import classNames from 'classnames';
const Grass = () => {
  const [scroll, open, toggleDrawer, width900, scrollp] = useNavbar();
  const classnames = classNames({
    stage0: scrollp < 2000,
    stage1: scrollp >= 2000 && scrollp < 2850,
    stage2: scrollp > 2850 && scrollp < 4000,
    stage3: scrollp > 4000 && scrollp < 4104,
    stage4: scrollp >= 4104,
  });
  // console.log(scrollp);
  return <div className={classnames}></div>;
};

export default Grass;
