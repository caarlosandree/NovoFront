import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { BaseComponentProps } from '@/types';

interface LayoutProps extends BaseComponentProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

export default function Layout({ children, maxWidth = 'lg', className }: LayoutProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
      className={className}
    >
      <Header />
      
      <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Container maxWidth={maxWidth}>
          {children}
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
}
