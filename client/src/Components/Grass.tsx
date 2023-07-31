import React, { useRef, useState } from 'react';
import useNavbar from '../hooks/useNavbar';
import '../styles/grass.css';
import classNames from 'classnames';
const Grass = () => {
  const [scroll, open, toggleDrawer, width900, scrollp] = useNavbar();
  const [state, setState] = useState({
    stage1: false,
    stage2: false,
    stage3: false,
  });
  const classnames = classNames('grass',{
    grass1forward: scrollp > 2000 && scrollp < 2700 , //
    grass2forward: scrollp > 2700 && scrollp < 4000 , //
    grass3forward: scrollp > 4000,
    grass3reverse: scrollp > 2700 && scrollp < 4000 && scroll === false, //
    grass2reverse: scrollp > 2000 && scrollp < 2700 && scroll === false , //
    grass1reverse: scrollp < 2000 && scroll === false,
  });
//   function classes() {
//     if (scrollp > 2000 && scrollp < 2700 && scroll === true) {
//       setState({ stage1: true, stage2: false, stage3: false });
//     } else if (scrollp > 2700 && scrollp < 4000 && scroll === true && state.stage1 === true) {
//       setState({ stage1: true, stage2: true, stage3: false });
//     } else if (scrollp > 4000 && state.stage2 === true) {
//       setState({ stage1: true, stage2: true, stage3: true });
//     } else if (scrollp > 2000 && scrollp < 2700 && scroll === false && state.stage3 === true) {
//       setState({ stage1: true, stage2: true, stage3: false });
//     } else if (scrollp > 2700 && scrollp < 4000 && scroll === false && state.stage2 === true) {
//       setState({ stage1: true, stage2: false, stage3: false });
//     } else if (scrollp < 2000 && scroll === false && state.stage1 === true) {
//       setState({ stage1: false, stage2: false, stage3: false });
//     }
//   }
//   console.log(classnames);
//   React.useEffect(() => {
//     classes();
//     console.log(state);
//   }, [scrollp]);
  return (
    <div
      className={
        // scrollp > 2000
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
