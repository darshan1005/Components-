import { createTheme } from '@mui/material/styles';

const themeLight = createTheme({
  palette: {
    primary: {
      main: '#D3D3D3',
    },
    background: {
      default: '#f0f0f0',
      paper: '#fff',
    },
    text: {
      primary: '#000',
    },
  },
});

export default themeLight;
