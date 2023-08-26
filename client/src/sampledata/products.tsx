import FeatureCard from '../Components/FeatureCard';
import sampleprod from '../assets/productsample.png';
import { cartitems } from './cartitem';
// const products = [
//   <FeatureCard
//     background={
//       'url(), transparent 100% / cover no-repeat'.substring(0, 4) +
//       sampleprod +
//       'url(),lightgray -32.2px -6px / 112.96% 114.239% no-repeat'.substring(4)
//     }
//     cardname="Loreum Ipsum, Loreum Ipsum,"
//     discprice="200"
//     price="300"
//   />,
//   <FeatureCard
//     background={
//       'url(), transparent 100% / cover no-repeat'.substring(0, 4) +
//       sampleprod +
//       'url(),lightgray -32.2px -6px / 112.96% 114.239% no-repeat'.substring(4)
//     }
//     cardname="Loreum Ipsum, Loreum Ipsum,"
//     discprice="200"
//     price="300"
//   />,
//   <FeatureCard
//     background={
//       'url(), transparent 100% / cover no-repeat'.substring(0, 4) +
//       sampleprod +
//       'url(),lightgray -32.2px -6px / 112.96% 114.239% no-repeat'.substring(4)
//     }
//     cardname="Loreum Ipsum, Loreum Ipsum,"
//     discprice="200"
//     price="300"
//   />,
// ];
const products = cartitems.map((value, index) => {
  // console.log(value.price);
  return {
    element: <FeatureCard
    id={value.id}
    key={index}
    background={
      'url(), transparent 100% / cover no-repeat'.substring(0, 4) +
      value.image +
      'url(),transparent -32.2px -6px / 112.96% 114.239% no-repeat'.substring(4)
    }
    cardname={value.name}
    discprice={value.discprice}
    price={value.price}
  />,
  id: value.id
  };
});
export { products };
