import React, { useEffect } from 'react';
import { Box, Typography, Drawer, Button } from '@mui/material';
import FormSample from '../Components/FormSample';
import CartModal from '../Components/CartModal';
import CheckoutCart from '../Components/CheckoutCart';
import LeftArrow from '../utils/LeftArrow';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import '../styles/Landing.css';
import { setUserData } from '../Redux/features/FormSlice';
import { TotalPriceMain } from '../Components/TotalPrice';
type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  landmark: string;
  phoneNumber: string | number | undefined;
};
type checkoutProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};
const Checkout = ({ formData, setFormData }: checkoutProps) => {
  const navigation = useNavigate();
  const products = useSelector((state: any) => state.cart);
  useEffect(() => {
    if (products.cart.length === 0) {
      navigation('/products');
    }
  }, [products.cart]);
  const delivery = 40;
  const totalPrice =
    products.cart.length > 0
      ? TotalPriceMain(products.cart)
      : 0;
  const shipping = 4.9;
  const gst = 9;
  const formComponents = [
    {
      id: 'First Name',
      label: 'First Name',
      width: { xs: '100%', md: '49.5%' },
      value: formData.firstName,
      name: 'firstName',
      margin: '10px 0',
    },
    {
      id: 'Last Name',
      label: 'Last Name',
      width: { xs: '100%', md: '49.5%' },
      value: formData.lastName,
      name: 'lastName',
      margin: '10px 0',
    },
    {
      id: 'Address',
      label: 'Address',
      width: '100%',
      value: formData.address,
      name: 'address',
      margin: '0 0 10px 0',
    },
    {
      id: 'Landmark',
      label: 'Landmark',
      width: '100%',
      value: formData.landmark,
      name: 'landmark',
      margin: '0 0 10px 0',
    },
    {
      id: 'Email',
      label: 'Email',
      width: '100%',
      value: formData.email,
      name: 'email',
      margin: '0 0 10px 0',
    },
  ];

  const dispatch = useDispatch();
  function handleSubmit() {
    navigation('/shipping');
    dispatch(setUserData(formData));
  }
  return (
    <Box
      sx={{
        marginTop: '75px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        paddingBottom: '75px',
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
            textAlign: 'center',
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
              width: { xs: '100%', md: '50%', lg: '60%' },
              justifyContent: 'space-between',
              flexDirection: 'column',
              height: '100%',
            }}
            component={'form'}
            onSubmit={handleSubmit}
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
                {formComponents.map((value, index) => {
                  if (index <= 1) {
                    return (
                      <FormSample
                        id={value.id}
                        label={value.label}
                        height="50px"
                        width={value.width}
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
                        value={value.value}
                        onChange={setFormData}
                        name={value.name}
                        generalcolor="#00584A"
                        margin={value.margin}
                      />
                    );
                  }
                })}
              </Box>
              {formComponents.map((value, index) => {
                if (index > 1) {
                  return (
                    <FormSample
                      id={value.id}
                      label={value.label}
                      height="50px"
                      width={value.width}
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
                      value={value.value}
                      onChange={setFormData}
                      name={value.name}
                      generalcolor="#00584A"
                      margin={value.margin}
                    />
                  );
                }
              })}
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
              width: { xs: '100%', md: '50%', lg: '550px' },
              display: { xs: 'none', md: 'flex' },
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              borderLeft: { md: '1px solid #ACD2AE' },
            }}
          >
            <CheckoutCart
              gst={gst}
              delivery={delivery}
              totalPrice={totalPrice}
              shipping={shipping}
              products={products}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
export type { FormData };
