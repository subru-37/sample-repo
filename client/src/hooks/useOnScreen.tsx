import { RefObject, useEffect, useMemo, useState } from 'react';

export default function useOnScreen(ref: RefObject<HTMLDivElement>, rootmargin: string) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer1 = new IntersectionObserver(
    ([entry]) => {
      setIntersecting(entry.isIntersecting);
      console.log(entry);
    },
    { rootMargin: rootmargin }
  );
//   console.log(observer1);
  useEffect(() => {
    observer1.observe(ref.current);
    return () => observer1.disconnect();
  }, []);
  //   console.log(isIntersecting)
  return isIntersecting;
}
//   import { createRef, RefObject, useEffect, useState } from "react";
// import throttle from "lodash.throttle";

// /**
//  * Check if an element is in viewport

//  * @param {number} offset - Number of pixels up to the observable element from the top
//  * @param {number} throttleMilliseconds - Throttle observable listener, in ms
//  */
// export default function useVisibility<Element extends HTMLElement>(
//   offset: number = 0,
//   throttleMilliseconds: number = 100
// ): [boolean, RefObject<Element>] {
//   const [isVisible, setIsVisible] = useState(false);
//   const currentElement = createRef<Element>();

//   const onScroll = throttle(() => {
//     if (!currentElement.current) {
//       setIsVisible(false);
//       return;
//     }
//     const top = currentElement.current.getBoundingClientRect().top;
//     setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
//   }, throttleMilliseconds);

//   useEffect(() => {
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   });
//   console.log(isVisible)
//   return [isVisible, currentElement];
// }
