import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Drawer,
  Button,
  Autocomplete,
  TextField,
  Link,
} from '@mui/material';
import FormSample from '../Components/FormSample';
import CartModal from '../Components/CartModal';
import CheckoutCart from '../Components/CheckoutCart';
import LeftArrow from '../utils/LeftArrow';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
type formData = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  landmark: string;
  phoneNumber: string | number | undefined;
};
type shippingProps = {
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  formData: formData;
  setFormData: React.Dispatch<React.SetStateAction<formData>>;
  options: string[];
};

const Shipping = ({
  value,
  setValue,
  formData,
  setFormData,
  options,
}: shippingProps) => {
  const redirect = (event: Event | undefined) => {
    // navigation(whatsappUrl)
    event.preventDefault()
    window.location.href = whatsappUrl
  }
  const navigation = useNavigate();
  const products = useSelector((state: any) => state.cart);
  const whatsappUrl = `https://wa.me/917356029354?text=${JSON.stringify(
    products.cart
  )}%20${value}%20${JSON.stringify(formData)}`;
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
              width: { xs: '100%', md: '55%' },
              justifyContent: 'space-between',
              flexDirection: 'column',
              height: '100%',
            }}
            component={'form'}
            onSubmit={()=> redirect(event)}
          >
            {/* email address box */}
            <Box sx={{ width: { xs: '80%', md: '100%' }, margin: '50px 0' }}>
              <Typography
                sx={{ width: '80%', color: 'green.darker', fontSize: '24px' }}
              >
                Email Address
              </Typography>
              <FormSample
                id="email"
                label="Email Address"
                height="50px"
                width={{ xs: '100%', md: '80%' }}
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
                value={formData.email}
                onChange={setFormData}
                name={'email'}
                generalcolor="#00584A"
                margin="20px 0"
              />
              <FormSample
                id="Address"
                label="Address Line"
                height="50px"
                width={{ xs: '100%', md: '80%' }}
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
                margin="20px 0"
              />
            </Box>
            {/* shipping details */}
            <Box sx={{ width: '80%' }}>
              <Typography
                sx={{ width: '80%', color: 'green.darker', fontSize: '24px' }}
              >
                Payment Method
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  color: '#5AB65F',
                  fontStyle: 'italic',
                }}
              >
                Shipped in 3-4 bussines days
              </Typography>
              <Autocomplete
                value={value}
                onChange={(event: any, newValue: string | null) => {
                  setValue(newValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: '100%', margin: '50px 0' }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Your payment method"
                    //   InputProps={{
                    //     style: {
                    //       color: '#00584A',
                    //       fontFamily: 'Plus Jakarta Sans',
                    //     },
                    //   }}
                    InputLabelProps={{
                      style: {
                        color: '#5AB65F',
                        fontFamily: 'Plus Jakarta Sans',
                        fontSize: '14px',
                      },
                    }}
                    sx={{
                      height: '50px',
                      width: { xs: '100%', md: '80%' },
                      '& .MuiOutlinedInput-root': {
                        height: '50px',
                        backgroundColor: '#F5FCE7',
                        color: '#00584A',
                        '& fieldset': {
                          border: '1px solid #ACD2AE',
                          borderRadius: '8px',
                          color: '#00584A',
                        },
                        '&.Mui-focused fieldset': {
                          border: '1px solid #ACD2AE',
                          borderRadius: '8px',
                          color: '#00584A',
                        },
                      },
                      '& .MuiOutlinedInput-root:hover': {
                        '& fieldset': {
                          border: '1px solid #ACD2AE',
                          color: '#00584A',
                        },
                      },
                    }}
                  />
                )}
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
                onClick={() => navigation('/checkout')}
              >
                <Typography component={'span'} sx={{ marginRight: '10px' }}>
                  <LeftArrow />
                </Typography>
                Return to Checkout
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
                type='submit'
                // href={whatsappUrl}
                // target='_blank'
              >
                  <Typography
                    sx={{
                      color: '#F5FCE7',
                      textTransform: 'none',
                      fontSize: '12px',
                      lineHeight: '14px',
                    }}
                  >
                    Confirm Order
                  </Typography>
              </Button>
            </Box>
          </Box>
          {/* cart column */}

          <Box
            sx={{
              width: { xs: '100%', md: '45%' },
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

export default Shipping;
export type { formData };
