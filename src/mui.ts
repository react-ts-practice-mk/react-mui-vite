import { createTheme, PaletteColor, PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    white: PaletteColor;
  }

  interface PaletteOptions {
    white?: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    white: true;
  }
}

const theme = createTheme({
  palette: {
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#0f172a',
    },
    white: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#0f172a',
    },
  },
});

export default theme;
