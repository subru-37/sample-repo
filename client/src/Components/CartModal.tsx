import React from 'react';
import { Box, Typography, Drawer, Button } from '@mui/material';
import CartItem from './CartItem';
import Close from '../utils/Close';
import { cartitems } from '../sampledata/cartitem';
type props = {
  cartopen: boolean;
  setCartOpen: (open: boolean) => void;
};
const CartModal = ({ cartopen, setCartOpen }: props) => {
  const subTotal = cartitems
    .map((value, index) => Number(value.discprice.substring(2)))
    .reduce((total, value) => total + value);
  const delivery = 40;
  return (
    <Drawer
      anchor="right"
      open={cartopen}
      onClose={() => setCartOpen(false)}
      //   transitionDuration={500}
      PaperProps={{
        sx: {
          backgroundColor: '#F5FCE7',
        },
      }}
    >
      <Box
        sx={{
          width: { xs: '100vw', sm: '500px' },
          //   minHeight: '100vh',
          padding: '35px 35px 0 35px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          position: 'relative',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
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
            <Button
              sx={{
                fill: 'rgba(245, 252, 231, 0.55)',
                filter:
                  'drop-shadow(0px 4px 39px rgba(46, 84, 37, 0.75)) blur(0.25px)',
                backdropFilter: 'blur(2px)',
                zIndex: '1300',
                borderRadius: '100%',
                height: '50px',
                width: '50px',
                padding: '0px',
                minWidth: '0px',
              }}
              onClick={() => setCartOpen(false)}
            >
              <Close />
            </Button>
          </Typography>

          {/* Items */}
          <Box sx={{ width: '100%', marginTop: '30px' }}>
            {cartitems.map((value, index) => (
              <CartItem
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
                quanity={value.quanity}
              />
            ))}
          </Box>
          {/* checkout details */}
          <Box
            sx={{
              borderTopLeftRadius: '35px',
              borderTopRightRadius: '35px',
              background: 'var(--nav, rgba(217, 217, 217, 0.25))',
              boxShadow: ' 0px 4px 48px -13px rgba(0, 88, 74, 0.80)',
              filter: 'blur(0.25px)',
              backdropFilter: 'blur(50px)',
              padding: '40px 40px 35px 40px',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              //   position:'fixed',
              width: { xs: '100vw', sm: '500px' },
              bottom: '0',
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
                    ₹ {subTotal}
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
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
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
                    ₹ {subTotal + delivery}
                  </Typography>
                </Box>
                <Button
                  sx={{
                    backgroundColor: 'green.darker',
                    borderRadius: '5px',
                    border: '1px solid #00584A',
                    backdropFilter: 'blur(3px)',
                    '&:hover': {
                      backgroundColor: 'green.darker',
                    },
                    height:'50px',
                    width:'150px',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: 'capitalize',
                      color: '#F5FCE7',
                      fontSize: '16px',
                      fontWeight: '400',
                      letterSpacing: '-0.72px',
                      lineHeight: '19px',
                    }}
                  >
                    Checkout
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartModal;
