import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import SlideShow from './Slideshow';
import { cartitems } from '../sampledata/cartitem';
import { useParams } from 'react-router-dom';
import highqualitysample from '../assets/highqualitysample.jpg';
import { useImageSize } from 'react-image-size';
import { useMediaQuery } from '@mui/material';
import CartButton from './CartButton';
type props = {
  height: string;
  width: string;
  bgsize: string;
};
const ProductDetail = ({ height, width, bgsize }: props) => {
  const width600 = useMediaQuery('(max-width: 600px)');
  const [wishlist, setWishList] = React.useState<boolean>(false);
  const { id } = useParams();
  const index = Number(id);
  //temporary slides
  const details = cartitems[Number(id)];
  const slides = cartitems.map((value, mapindex) => {
    const [dimensions, { loading, error }] = useImageSize(value.image);
    // console.log(error)
    const aspectratio = error === null ? Number(dimensions?.width) / Number(dimensions?.height): 0;
    if (value.id === index) {
      return (
        <Box
          key={mapindex}
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
            backgroundImage: `url(${value.image})`,
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
    }
  });
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
        paddingBottom:'75px'
      }}
    >
      <SlideShow
        components={slides.filter((value)=>value !== undefined)}
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
            {/* <Typography
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
            </Typography> */}
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
            {/* {wishlist ? (
              <FavoriteIcon
                onClick={() => setWishList(!wishlist)}
                sx={{ color: 'green.darker' }}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={() => setWishList(!wishlist)}
                sx={{ color: 'green.darker' }}
              />
            )} */}
            {/* <Button
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
            </Button> */}
            <CartButton id={id} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
