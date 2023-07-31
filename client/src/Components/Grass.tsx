import React, {useRef} from 'react';
import useNavbar from '../hooks/useNavbar';
import '../styles/grass.css';
import classNames from 'classnames';
const Grass = () => {
  const [scroll, open, toggleDrawer, width900, scrollp] = useNavbar();
  console.log(scrollp);
  const classnames = classNames({
    grass1forward: scrollp > 2200 && scrollp < 2700 && scroll === true, //
    grass2forward: scrollp > 2700 && scrollp < 4000 && scroll === true, //
    grass3forward: scrollp > 4000,
    grass3reverse: scrollp > 2700 && scrollp < 4000 && scroll === false, //
    grass2reverse: scrollp > 2200 && scrollp < 2700 && scroll === false, //
    grass1reverse: scrollp < 2200 && scroll === false,
  });
  console.log(classnames);
  return (
    <div
      className={
        // scrollp > 2200
        //     ? scrollp > 2700
        //         ? scrollp>4000
        //             ? 'grass3forward'
        //             : scroll===true ? 'grass3forward' : 'grass3reverse'
        //         : scroll === true ? 'grass2forward' : 'grass2reverse'
        //     : scroll === true ? 'grass1forward' : 'grass1reverse'
        classnames
      }
    ></div>
  );
};

export default Grass;
