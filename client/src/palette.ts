import { PaletteOptions, SimplePaletteColorOptions, TypeText } from "@mui/material"

interface ExtendedPaletteColorOptions extends SimplePaletteColorOptions {
    darker?: string,
    lighter?: string
  }
  
  interface ExtendedPaletteOptions extends PaletteOptions {
    primary: ExtendedPaletteColorOptions
    // secondary: ExtendedPaletteColorOptions
    // text: Partial<TypeText>
    // error: ExtendedPaletteColorOptions
    // warning: ExtendedPaletteColorOptions
    // info: ExtendedPaletteColorOptions
    // success: ExtendedPaletteColorOptions
    // And your custom palette options if you defined them, e.g:
    // brand: ExtendedPaletteColorOptions
  }
  
  const palette: ExtendedPaletteOptions = {
      // Our palette, which now supports the new `lighter`, for example:
      primary: {
          lighter: '#C5E9C7',
          light: '#5AB65F',
          main: '#00584A',
          dark: '#5AB65F',
          darker: '#00584A;',
      },

  }
export default palette;