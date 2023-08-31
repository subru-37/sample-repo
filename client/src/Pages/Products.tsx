import React, { Dispatch, SetStateAction } from 'react';
import {
  Box,
  TextField,
  Typography,
  Grid,
  Drawer,
  InputAdornment,
  Button,
} from '@mui/material';
import FilterBox from '../Components/FilterBox';
import { products } from '../sampledata/products';
import useNavbar from '../hooks/useNavbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Search from '../utils/Search';
type props = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};
type filtertypes = {
  [key: string]: any;
};
const Products = (props: props) => {
  const [value, open, setValue, width900] = useNavbar();
  const categories = [
    'Whole Grains (millets )',
    'Whole grain (cereals)',
    'Ready to eat',
    'Oil (ghana/ non processed)',
    'Milk produts',
    'Honey and jaggery',
    'Dal',
    'Masala',
    'Missceleneous',
  ];
  const [slideValue, setSlideValue] = React.useState<number[]>([1000, 2000]);
  const [categoryFilters, setCategoryFilters] = React.useState<filtertypes>({
    'Whole Grains (millets )': false,
    'Whole grain (cereals)': false,
    'Ready to eat': false,
    'Oil (ghana/ non processed)': false,
    'Milk produts': false,
    'Honey and jaggery': false,
    Dal: false,
    Masala: false,
    Missceleneous: false,
  });
  const payments = ['Loreum Ipsum 1', 'Loreum Ipsum 2', 'Loreum Ipsum 3'];
  const productItems = products('/products');
  console.log(productItems)
  const [drawer, setDrawer] = React.useState<boolean>(false);
  return (
    <Box
      sx={{
        // marginTop: '75px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <TextField
        id="outlined-controlled"
        label=""
        placeholder="Search.."
        sx={{
          width: '100vw',
          borderBottomLeftRadius: '35px',
          borderBottomRightRadius: '35px',
          //   opacity: '0.5',
          backgroundColor: '#F5FCE7',
          minHeight: '175px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          boxShadow: '0px 4px 48px -13px rgba(46, 84, 37, 0.54)',
          //   filter: 'blur(0.25px)',
          //   backdropFilter: 'blur(7.5px)',
          '& .MuiOutlinedInput-root': {
            height: { xs: '50px', sm: 'auto' },
            backgroundColor: 'transparent',
            color: 'green.darker',
            '& fieldset': {
              border: 'none',
              color: 'green.darker',
              minWidth: '300px',
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
            style: { textAlign: 'center', fontSize: '20px', fontWeight: '500' },
          },
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
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
          width: '90vw',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          marginTop: {xs:'20px', md:'75px'},
        }}
      >
        {width900 ? (
          <FilterBox
            categories={categories}
            payments={payments}
            setCategoryFilters={setCategoryFilters}
            // setPaymentFilters={setPaymentFilters}
            // paymentFilters={paymentFilters}
            categoryFilters={categoryFilters}
            slideValue={slideValue}
            setSlideValue={setSlideValue}
          />
        ) : (
          <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}>
            <FilterBox
              categories={categories}
              payments={payments}
              setCategoryFilters={setCategoryFilters}
              // setPaymentFilters={setPaymentFilters}
              // paymentFilters={paymentFilters}
              categoryFilters={categoryFilters}
              slideValue={slideValue}
              setSlideValue={setSlideValue}
            />
          </Drawer>
        )}
        {/* Products grid*/}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 6, lg: 6 }}
          sx={{
            width: { xs: '95%', md: '65%', lg: '75%' },
            display: 'flex',
            justifyContent: 'center',
            margin: '0px !important',
          }}
        >
          <Grid item sx={{padding:'0px !important'}}>
            <Button
              onClick={() => setDrawer(true)}
              sx={{
                color: 'green.darker',
                display: { xs: 'flex', md: 'none' },
                justifyContent:'center',
                alignItems:'center',
                padding:'0px 0px !important'
              }}
            >
              <MenuIcon /> Filters
            </Button>
          </Grid>
          {productItems.map((value, index) => (
            <Grid
              item
              key={index}
              xs={4}
              sm={3.7}
              md={3}
              lg={2}
              sx={{
                padding: '25px !important',
              }}
            >
                {value.element}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;
