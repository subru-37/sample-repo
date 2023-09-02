import React from 'react';
import Landing from './Pages/Landing';
import Navbar from './Components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Routes, Route } from 'react-router-dom';
import Products from './Pages/Products';
import CartModal from './Components/CartModal';
import ProductDetail from './Components/ProductDetail';
import Checkout from './Pages/Checkout';
import Shipping from './Pages/Shipping';
import Footer from './Components/Footer';
import { Box } from '@mui/material';
AOS.init();
declare module '@mui/material/styles' {
  interface Palette {
    green: Palette['primary'];
  }

  interface PaletteOptions {
    green?: PaletteOptions['primary'];
  }
  interface PaletteColorOptions {
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
  }
}
type formData = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  landmark: string;
  phoneNumber: string | number | undefined;
};
const App = () => {
  const options = ['Cash On Delivery'];
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [formData, setFormData] = React.useState<formData>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    landmark: '',
    phoneNumber: undefined,
  });
  const [cartopen, setCartOpen] = React.useState(false);
  const theme = createTheme({
    palette: {
      green: {
        lighter: '#C5E9C7',
        light: '#5AB65F',
        main: '#00584A',
        dark: '#5AB65F',
        darker: '#00584A;',
      },
    },
  });
  const [name, setName] = React.useState('');

  return (
    <Box sx={{position:'relative'}}>
      <ThemeProvider theme={theme}>
        <Navbar cartopen={cartopen} setCartOpen={setCartOpen} />
        <CartModal cartopen={cartopen} setCartOpen={setCartOpen} />
        <Routes>
          <Route path="/" element={<Landing name={name} setName={setName} />} />
          <Route
            path="/products"
            element={<Products name={name} setName={setName} />}
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetail width="100vw" height="100vh" bgsize="50vw 100vh" />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/shipping"
            element={
              <Shipping
                formData={formData}
                setFormData={setFormData}
                options={options}
                value={value}
                setValue={setValue}
              />
            }
          />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Box>
  );
};

export default App;
