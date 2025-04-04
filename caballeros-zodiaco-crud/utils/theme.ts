import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Activa el tema oscuro
    primary: {
      main: '#90caf9', // Color principal
    },
    secondary: {
      main: '#f48fb1', // Color secundario
    },
    background: {
      default: '#121212', // Fondo principal
      paper: '#1e1e1e', // Fondo de tarjetas y elementos
    },
    text: {
      primary: '#ffffff', // Texto principal
      secondary: '#b0bec5', // Texto secundario
    },
  },
});

export default darkTheme;