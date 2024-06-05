import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: '#96bed3',
      main: '#3c7a96',
      dark: '#003041',
      contrastText: '#FFFFFF',

    },
    secondary: {
      light: '#88d3ca',
      main: '#24a493',
      dark: '#12594a',
      contrastText: '#000000',
    },
    text: {
      primary: '#2c363f',
      secondary: '#2c3f3e',
      disabled: '#72665c',
    },
    error: {
      main: '#EC4A4A',
    },
    success: {
      main: '#2794BF',
    },
    warning: {
      main: '#fbc42c',
    },
    background: {
      default: '#DDDDDD',
    },
  }
});

export default theme;