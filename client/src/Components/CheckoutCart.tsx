import { Button } from '@mui/base';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Close from '../utils/Close';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
const CheckoutCart = () => {
  const delivery = 40;
  const products = useSelector((state: any) => state.cart);
  const totalPrice =
    products.cart.length > 0
      ? products.cart
          .map(
            (value: any) =>
              Number(value.discprice.substring(2)) * value.quantity
          )
          .reduce((total: any, value: any) => total + value)
      : 0;
  const shipping = 4.9;
  const gst = 9;
  return (
    <Box
      sx={{
        width: { xs: '100%', md: '90%' },
        //   minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: { xs: '70vh', md: '80vh' },
          flexDirection: 'column',
          padding: '35px 35px 0 35px',
          boxSizing: 'border-box',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              fontSize: '35px',
              fontWeight: '500',
              color: 'green.darker',
              width: '100%',
              borderBottom: '2px solid #00584A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            Cart
          </Typography>

          {/* Items */}
          <Box
            sx={{
              width: '100%',
              marginTop: '30px',
              maxHeight: '500px',
              overflowY: 'scroll',
              overflowX: 'hidden',
              position: 'relative',
            }}
          >
            {products.cart.length > 0 &&
              products.cart.map((value: any, index: any) => (
                <CartItem
                  id={value.id}
                  image={
                    'url(), lightgray -32.2px -6px / 112.96% 114.239% no-repeat'.substring(
                      0,
                      4
                    ) +
                    value.image +
                    'url(), lightgray -32.2px -6px / 112.96% 114.239% no-repeat'.substring(
                      4
                    )
                  }
                  price={value.price}
                  discprice={value.discprice}
                  name={value.name}
                  quantity={value.quantity}
                />
              ))}
          </Box>
        </Box>

        {/* checkout details */}
        <Box
          sx={{
            // borderTopLeftRadius: '35px',
            // borderTopRightRadius: '35px',
            // background: 'var(--nav, rgba(217, 217, 217, 0.25))',
            // boxShadow: ' 0px 4px 48px -13px rgba(0, 88, 74, 0.80)',
            // filter: 'blur(0.25px)',
            // backdropFilter: 'blur(50px)',
            padding: '0px 40px 35px 40px',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // position: 'sticky',
            width: '100%',
            // bottom: '0',
          }}
        >
          <Box sx={{ width: '100%' }}>
            {/* split up */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column',
                width: '100%',
                paddingBottom: '20px',
                borderBottom: '2px solid #00584A',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: '100%',
                }}
              >
                <Typography
                  sx={{
                    color: 'green.darker',
                    fontSize: '20px',
                    fontWeight: '500',
                  }}
                >
                  Sub Total:
                </Typography>
                <Typography
                  sx={{
                    color: 'green.darker',
                    fontSize: '20px',
                    fontWeight: '500',
                  }}
                >
                  ₹ {totalPrice}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: '100%',
                }}
              >
                <Typography
                  sx={{
                    color: 'green.darker',
                    fontSize: '20px',
                    fontWeight: '500',
                  }}
                >
                  Delivery Fee:
                </Typography>
                <Typography
                  sx={{
                    color: 'green.darker',
                    fontSize: '20px',
                    fontWeight: '500',
                  }}
                >
                  ₹ {delivery}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: '100%',
                }}
              >
                <Typography
                  sx={{
                    color: 'green.darker',
                    fontSize: '20px',
                    fontWeight: '500',
                  }}
                >
                  GST:
                </Typography>
                <Typography
                  sx={{
                    color: 'green.darker',
                    fontSize: '20px',
                    fontWeight: '500',
                  }}
                >
                  ₹ {gst}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: '100%',
                }}
              >
                <Typography
                  sx={{
                    color: 'green.darker',
                    fontSize: '20px',
                    fontWeight: '500',
                  }}
                >
                  Shipping
                </Typography>
                <Typography
                  sx={{
                    color: 'green.darker',
                    fontSize: '20px',
                    fontWeight: '500',
                  }}
                >
                  ₹ {shipping}
                </Typography>
              </Box>
            </Box>
            {/* grand total */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginTop: '10px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'green.darker',
                  }}
                >
                  Grand Total:
                </Typography>
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'green.main',
                  }}
                >
                  ₹ {totalPrice + delivery + gst + shipping}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutCart;
