import { createTheme } from '@mui/material/styles';

const themeGreen = createTheme({
  palette: {
    primary: {
      main: '#388e3c',
    },
    background: {
      default: '#e8f5e9',
      paper: '#c8e6c9',
    },
    text: {
      primary: '#000',
    },
  },
});

export default themeGreen;
