import '../styles/globals.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import darkTheme from '../utils/theme';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Aplica el fondo negro y normaliza los estilos */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}