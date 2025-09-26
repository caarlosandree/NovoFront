import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import { APP_CONFIG } from '@/constants';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'grey.100',
        borderTop: 1,
        borderColor: 'grey.300',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {APP_CONFIG.name}. Todos os direitos reservados.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="#" color="text.secondary" variant="body2">
              Política de Privacidade
            </Link>
            <Link href="#" color="text.secondary" variant="body2">
              Termos de Uso
            </Link>
            <Link href="#" color="text.secondary" variant="body2">
              Contato
            </Link>
          </Box>
        </Box>
        
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
          Versão {APP_CONFIG.version}
        </Typography>
      </Container>
    </Box>
  );
}
