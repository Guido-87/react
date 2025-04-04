import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }} onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
            Caballeros del Zodiaco
          </Typography>
          <Button color="inherit" onClick={() => alert('Simulación de pelea')}>
            Simular Pelea
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 2, p: 3 }}>{children}</Box>
      <Box
        sx={{
          textAlign: 'center',
          py: 2,
          mt: 3,
          backgroundColor: 'background.paper',
          color: 'text.secondary',
        }}
      >
        <Typography variant="body2">© 2025 Caballeros del Zodiaco. Todos los derechos reservados.</Typography>
      </Box>
    </Box>
  );
};

export default Layout;