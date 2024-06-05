import { createTheme } from '@mui/material/styles';

const themeDark = createTheme({
  palette: {
    primary: {
      main: '#577B8D',
    },
    background: {
      default: '#000',
      paper: '#333',
    },
    text: {
      primary: '#fff',
    },
  },
});

export default themeDark;
