import React, { Dispatch, SetStateAction } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import FilterBox from '../Components/FilterBox';
type props = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};
type filtertypes = {
  [key: string]: any;
};
const Products = (props: props) => {
  const categories = [
    'Loreum Ipsum 1',
    'Loreum Ipsum 2',
    'Loreum Ipsum 3',
    'Loreum Ipsum 4',
  ];
  const [slideValue, setSlideValue] = React.useState<number[]>([1000,2000])
  const [categoryFilters, setCategoryFilters] = React.useState<filtertypes>({
    'Loreum Ipsum 1': false,
    'Loreum Ipsum 2': false,
    'Loreum Ipsum 3': false,
    'Loreum Ipsum 4': false,
  });
  const payments = ['Loreum Ipsum 1', 'Loreum Ipsum 2', 'Loreum Ipsum 3'];
  const [paymentFilters, setPaymentFilters] = React.useState<filtertypes>({
    'Loreum Ipsum 1': false,
    'Loreum Ipsum 2': false,
    'Loreum Ipsum 3': false,
  });
  return (
    <Box
      sx={{
        marginTop: '75px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <TextField
        id="outlined-controlled"
        label=""
        sx={{
          width: '100vw',
          borderRadius: '35px',
          opacity: '0.5',
          backgroundColor: '#F5FCE7',
          boxShadow: '0px 4px 48px -13px rgba(46, 84, 37, 0.54)',
          filter: 'blur(0.25px)',
          backdropFilter: 'blur(7.5px)',
          '& .MuiOutlinedInput-root': {
            height: { xs: '50px', sm: 'auto' },
            backgroundColor: 'transparent',
            color: 'green.darker',
            '& fieldset': {
              border: 'none',
              color: 'green.darker',
            },
            '&.Mui-focused fieldset': {
              border: 'none',
              color: 'green.darker',
            },
          },
          '& .MuiOutlinedInput-root:hover': {
            '& fieldset': {
              border: 'none',
              color: 'green.darker',
            },
          },
        }}
        InputProps={{
          style: {
            color: 'green.darker',
            fontFamily: 'Plus Jakarta Sans',
            height: '100px',
          },
          inputProps: {
            style: { textAlign: 'center' },
          },
        }}
        InputLabelProps={{
          style: {
            color: '#3CA373',
            fontFamily: 'Plus Jakarta Sans',
            fontSize: '16px',
          },
        }}
        value={props.name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          props.setName(event.target.value);
        }}
      />
      <Box
        sx={{
          width: { md: '85vw' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <FilterBox
          categories={categories}
          payments={payments}
          setCategoryFilters={setCategoryFilters}
          setPaymentFilters={setPaymentFilters}
          paymentFilters={paymentFilters}
          categoryFilters={categoryFilters}
          slideValue={slideValue}
          setSlideValue={setSlideValue}
        />
        {/* Products grid*/}
        <Box sx={{ width: { md: '800px' } }}></Box>
      </Box>
    </Box>
  );
};

export default Products;
