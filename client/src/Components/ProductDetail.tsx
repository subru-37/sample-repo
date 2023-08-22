import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import SlideShow from './Slideshow';
import { cartitems } from '../sampledata/cartitem';
import { useParams } from 'react-router-dom';
import highqualitysample from '../assets/highqualitysample.jpg';
import { useImageSize } from 'react-image-size';
type props = {
  height: string;
  width: string;
  bgsize: string;
};
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Plus from '../utils/Plus';
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, addToCart } from '../Redux/features/CartSlice';
import { cartitems as sampleData} from '../sampledata/cartitem';
import { sample } from 'lodash';
const ProductDetail = ({ height, width, bgsize }: props) => {
  const width600 = useMediaQuery('(max-width: 600px)');
  const [wishlist, setWishList] = React.useState<boolean>(false);
  const { id } = useParams();
  const index = Number(id);
  //temporary slides
  const details = cartitems[Number(id)];
  const slides = cartitems.map((value, index) => {
    const [dimensions, { loading, error }] = useImageSize(
      'https://s3-alpha-sig.figma.com/img/8626/c029/16041bebadaa211a5e4a01c642f2f2fc?Expires=1693180800&Signature=dyWUnVcEWhUVTC87u~pI38Ek~XIku0m7rgAC66IrdPc5Yp2WHQ0e14bXrUgkCtqFVGZMFQ9JZbzdb-aHcaj4~Hx4dbSbvmRneK61BhgitkpSnUpfCECAdYhWUfu~~xHAzikJxpGkaUCBtqsaqMmGhN4qHvte8XjAYeibZs5elIhi7OtgwJW6P~omCc75hUE178VLygMi8FQxi8ZBJA9cZOnMKoM597Hhp15-Jp5QIe~rOp4A~HiRRVs1onLqQF8z5LlBau63uNO51htJ5SW58~9cq26W8xgo1M7wC0XowAE~YYuUp6MBPisDLsrbDnZ9FDWkfAuAIClyyFBYIcJMfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    );
    const aspectratio = dimensions?.width / dimensions?.height;
    // console.log(aspectratio);
    // width / height = 0.8
    return (
      <Box
        sx={{
          height: {
            xs: '50vh',
            sm: `calc(300px/${aspectratio})`,
            md: `calc(450px/${aspectratio})`,
            lg: `calc(550px/${aspectratio})`,
          },
          width: {
            xs: `calc(50vh*${aspectratio})`,
            sm: `300px`,
            md: '450px',
            lg: '550px',
          },
          backgroundImage: `url(${highqualitysample})`,
          //   backgroundColor: 'green.darker',
          backgroundSize: {
            xs: `50vh calc(50vh/${aspectratio})`,
            sm: `300px calc(300px/${aspectratio})`,
            md: `450px calc(450px/${aspectratio})`,
            lg: `550px calc(550px/${aspectratio})`,
          },
          borderRadius: '20px',
          backgroundRepeat: 'no-repeat',
        }}
      ></Box>
    );
  });
  // console.log(slides);
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart);
  // const totalPrice = products
  //   .map((value: any) => Number(value.discprice.substring(2)) * value.quanity)
  //   .reduce((total: any, value: any) => total + value);
  const removeProductHandler = (product: any) => {
    dispatch(removeFromCart(product));
  };
  const addProductHandler = (product: any) => {
    dispatch(addToCart(product));
  };
  return (
    <Box
      sx={{
        borderRadius: '20px',
        backgroundColor: '#F5FCE7',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', sm: 'row' },
        height: height,
        width: width,
      }}
    >
      <SlideShow
        components={slides}
        indicators={false}
        arrows={false}
        show1100={1}
        show400={1}
        show600={1}
        show900={1}
        width={!width600 ? '50%' : '100vw'}
        // height='80vh'
      />
      {/* product content  */}
      <Box
        sx={{
          height: { xs: '50vh', sm: '100%' },
          width: { xs: '100vw', sm: '50%' },
          backgroundColor: '#F5FCE7',
          padding: { xs: '0 20px', sm: '0px 50px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            color: 'green.darker',
            width: '100%',
          }}
        >
          <Typography
            component={'h3'}
            sx={{
              fontSize: { xs: '20px', sm: '32px' },
              fontWeight: '500',
              fontFamily: 'Roboto Slab !important',
              letterSpacing: '-0.96px',
              lineHeight: '38px',
              width: '100%',
              textAlign: 'left',
            }}
          >
            Lorem ipsum dolor
          </Typography>
          {/* price */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            <Typography
              //   component={'h6'}
              sx={{
                color: 'green.darker',
                fontSize: '32px',
                margin: '10px 5px',
                fontWeight: '600',
              }}
            >
              {details.discprice}
            </Typography>
            <Typography
              //   component={'h6'}
              sx={{
                color: '#ACD1AE',
                fontSize: '24px',
                margin: '10px 5px',
                fontWeight: '600',
                textDecorationLine: 'line-through',
              }}
            >
              {details.price}
            </Typography>
            <Typography
              sx={{
                width: '100%',
                color: 'green.light',
                fontStyle: 'italic',
                letterSpacing: '-0.42px',
                lineHeight: '17px',
              }}
            >
              {details.summary}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: 'green.darker',
                fontSize: '14px',
                lineHeight: '1rem',
                letterSpacing: '-0.42px',
                padding: '50px 0 40px 0',
                borderBottom: '2px solid #00584A',
              }}
            >
              {details.desc}
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: '75px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              width: '100%',
            }}
          >
            {wishlist ? (
              <FavoriteIcon
                onClick={() => setWishList(!wishlist)}
                sx={{ color: 'green.darker' }}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={() => setWishList(!wishlist)}
                sx={{ color: 'green.darker' }}
              />
            )}
            <Button
              sx={{
                '&:hover': {
                  backgroundColor: 'green.darker',
                },
                backgroundColor: 'green.darker',
                minHeight: '50px',
                minWidth: '150px',
                marginLeft: '25px',
              }}
             onClick={()=> {
              addProductHandler(sampleData[index]);
             }}
            >
              <Typography
                sx={{
                  color: '#F5FCE7',
                  fontSize: '1rem',
                  fontWeight: '500',
                  marginRight: '25px',
                }}
              >
                {'Cart'}
              </Typography>
              <Plus />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
