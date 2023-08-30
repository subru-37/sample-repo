import React, { useEffect } from 'react';
import { Box, Typography, Drawer, Button } from '@mui/material';
import FormSample from '../Components/FormSample';
import CartModal from '../Components/CartModal';
import CheckoutCart from '../Components/CheckoutCart';
import LeftArrow from '../utils/LeftArrow';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import '../styles/Landing.css';
type formData = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  landmark: string;
  phoneNumber: string | number | undefined;
};
type checkoutProps = {
  formData: formData;
  setFormData: React.Dispatch<React.SetStateAction<formData>>;
};
const Checkout = ({ formData, setFormData }: checkoutProps) => {
  const navigation = useNavigate();
  const products = useSelector((state: any) => state.cart);

  useEffect(() => {
    if (products.cart.length === 0) {
      navigation('/products');
    }
  }, [products.cart]);
  return (
    <Box
      sx={{
        marginTop: '75px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
          minHeight: '80vh',
          minWidth: '85vw',
        }}
      >
        <Typography
          sx={{
            color: 'green.darker',
            width: '100%',
            borderBottom: '1px solid #00584A',
            padding: '5px 0px',
            fontSize: '40px',
            fontWeight: '500',
            textAlign:'center'
          }}
        >
          Checkout
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'space-between',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            marginTop: { xs: '0', md: '50px' },
          }}
        >
          {/* form column */}
          <Box
            sx={{
              display: 'flex',
              alignItems: { xs: 'center', md: 'flex-start' },
              width: { xs: '100%', md: '50%' },
              justifyContent: 'space-between',
              flexDirection: 'column',
              height: '100%',
            }}
            component={'form'}
            onSubmit={() => navigation('/shipping')}
          >
            {/* email address box */}
            <Box sx={{ width: { xs: '80%', md: '100%' }, margin: '50px 0' }}>
              <Typography
                sx={{ width: '80%', color: 'green.darker', fontSize: '24px' }}
              >
                Contact
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  color: '#5AB65F',
                  fontStyle: 'italic',
                }}
              >
                Let us know how to contact you
              </Typography>
              <FormSample
                id="phoneNumber"
                label="Phone Number"
                height="50px"
                type="number"
                width={{ xs: '100%', md: '80%' }}
                generalbgcolor="#F5FCE7"
                fieldsetbgcolor="#F5FCE7"
                fieldsetborder="1px solid #ACD2AE"
                fieldsetborderradius="8px"
                InputProps={{
                  style: {
                    color: '#00584A',
                    fontFamily: 'Plus Jakarta Sans',
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: '#5AB65F',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: '12px',
                  },
                }}
                value={formData.phoneNumber}
                onChange={setFormData}
                name={'phoneNumber'}
                generalcolor="#00584A"
                margin="10px 0"
              />
            </Box>
            {/* shipping details */}
            <Box sx={{ width: '80%' }}>
              <Typography
                sx={{ width: '80%', color: 'green.darker', fontSize: '24px' }}
              >
                Shipping Details
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  color: '#5AB65F',
                  fontStyle: 'italic',
                }}
              >
                Where do we send your package?
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                }}
              >
                <FormSample
                  id="First Name"
                  label="First Name"
                  height="50px"
                  width={{ xs: '100%', md: '49.5%' }}
                  generalbgcolor="#F5FCE7"
                  fieldsetbgcolor="#F5FCE7"
                  fieldsetborder=" 1px solid #ACD2AE"
                  fieldsetborderradius="8px"
                  InputProps={{
                    style: {
                      color: '#00584A',
                      fontFamily: 'Plus Jakarta Sans',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: '#5AB65F',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: '12px',
                    },
                  }}
                  value={formData.firstName}
                  onChange={setFormData}
                  name={'firstName'}
                  generalcolor="#00584A"
                  margin="10px 0"
                />
                <FormSample
                  id="Last Name"
                  label="Last Name"
                  height="50px"
                  width={{ xs: '100%', md: '49.5%' }}
                  generalbgcolor="#F5FCE7"
                  fieldsetbgcolor="#F5FCE7"
                  fieldsetborder=" 1px solid #ACD2AE"
                  fieldsetborderradius="8px"
                  InputProps={{
                    style: {
                      color: '#00584A',
                      fontFamily: 'Plus Jakarta Sans',
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: '#5AB65F',
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: '12px',
                    },
                  }}
                  value={formData.lastName}
                  onChange={setFormData}
                  name={'lastName'}
                  generalcolor="#00584A"
                  margin="10px 0"
                />
              </Box>
              <FormSample
                id="Address"
                label="Address"
                height="50px"
                width="100%"
                generalbgcolor="#F5FCE7"
                fieldsetbgcolor="#F5FCE7"
                fieldsetborder=" 1px solid #ACD2AE"
                fieldsetborderradius="8px"
                InputProps={{
                  style: {
                    color: '#00584A',
                    fontFamily: 'Plus Jakarta Sans',
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: '#5AB65F',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: '12px',
                  },
                }}
                value={formData.address}
                onChange={setFormData}
                name={'address'}
                generalcolor="#00584A"
                margin="0 0 10px 0"
              />
              <FormSample
                id="Landmark"
                label="Landmark"
                height="50px"
                width="100%"
                generalbgcolor="#F5FCE7"
                fieldsetbgcolor="#F5FCE7"
                fieldsetborder=" 1px solid #ACD2AE"
                fieldsetborderradius="8px"
                InputProps={{
                  style: {
                    color: '#00584A',
                    fontFamily: 'Plus Jakarta Sans',
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: '#5AB65F',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: '12px',
                  },
                }}
                value={formData.landmark}
                onChange={setFormData}
                name={'landmark'}
                generalcolor="#00584A"
                margin="0 0 10px 0"
              />
              <FormSample
                id="Email"
                label="Email"
                type="email"
                height="50px"
                width="100%"
                generalbgcolor="#F5FCE7"
                fieldsetbgcolor="#F5FCE7"
                fieldsetborder=" 1px solid #ACD2AE"
                fieldsetborderradius="8px"
                InputProps={{
                  style: {
                    color: '#00584A',
                    fontFamily: 'Plus Jakarta Sans',
                  },
                  inputProps: {
                    max: 10000000000,
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: '#5AB65F',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: '12px',
                  },
                }}
                value={formData.email}
                onChange={setFormData}
                name={'email'}
                generalcolor="#00584A"
                margin="0 0 10px 0"
              />
            </Box>
            <Box
              sx={{
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}
            >
              <Typography
                sx={{
                  color: 'green.darker',
                  fontSize: '16px',
                  fontStyle: 'italic',
                  lineHeight: '14px',
                  cursor: 'pointer',
                }}
                onClick={() => navigation('/products')}
              >
                <Typography component={'span'} sx={{ marginRight: '10px' }}>
                  <LeftArrow />
                </Typography>
                Return to Shopping
              </Typography>
              <Button
                sx={{
                  backgroundColor: 'green.darker',
                  borderRadius: '5px',
                  border: '1px solid #00584A',
                  backdropFilter: 'blur(3px)',
                  '&:hover': {
                    backgroundColor: 'green.darker',
                  },
                  height: '50px',
                  width: '150px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                // onClick={() => navigation('/shipping')}
                type="submit"
              >
                <Typography
                  sx={{
                    color: '#F5FCE7',
                    textTransform: 'none',
                    fontSize: '12px',
                    lineHeight: '14px',
                  }}
                >
                  Continue to shipping
                </Typography>
              </Button>
            </Box>
          </Box>
          {/* cart column */}

          <Box
            sx={{
              width: { xs: '100%', md: '42%' },

              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              borderLeft: { md: '1px solid #ACD2AE' },
            }}
          >
            <CheckoutCart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
export type { formData };
