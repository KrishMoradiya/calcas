import { createTheme, responsiveFontSizes } from '@mui/material';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#00305E',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#14819E',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#000000',
    },
    divider: '#FFFFFF',
  },
  typography: {
    fontFamily: 'Roboto, Raleway',
    fontSize: 16,
    button:{
      textTransform:'none'
    }
  },
});

export default responsiveFontSizes(customTheme);
