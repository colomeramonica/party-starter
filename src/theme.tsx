import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#124559',
    },
    secondary: {
      main: '#24a493',
    },
    text: {
      secondary: '#2c3f3e',
      primary: '#2c363f',
      disabled: '#72665c',
    },
    error: {
      main: '#b71c1c',
    },
    success: {
      main: '#2794BF',
    },
    warning: {
      main: '#ffc400',
    },
    info: {
      main: '#6a1b9a',
    },
    background: {
      default: '#efeeee',
    },
  }
});

export default theme;