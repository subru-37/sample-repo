import React from 'react';
import Landing from './Pages/Landing';
import Navbar from './Components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Palette {
    green: Palette['primary'];
  }

  interface PaletteOptions {
    green?: PaletteOptions['primary'];
  }
  interface PaletteColorOptions {
    lighter: string,
    light: string,
    main:string,
    dark: string,
    darker: string
  }
}
const App = () => {
  const theme = createTheme({
    palette:{
      green: {
        lighter: '#C5E9C7',
        light: '#5AB65F',
        main: '#00584A',
        dark: '#5AB65F',
        darker: '#00584A;',  
    },
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Landing />
    </ThemeProvider>
  );
};

export default App;
