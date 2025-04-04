import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { useRouter } from 'next/router';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
            Caballeros del Zodiaco
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default Layout;