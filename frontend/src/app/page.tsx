import Layout from '@/components/layout/Layout';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { APP_CONFIG } from '@/constants';
import HooksExampleWrapper from '@/components/examples/HooksExampleWrapper';

export default function Home() {
  return (
    <Layout>
      <Box>
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
            color: 'white',
            borderRadius: 2,
            mb: 4,
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom>
              {APP_CONFIG.name}
            </Typography>
            <Typography variant="h5" component="p" sx={{ mb: 4, opacity: 0.9 }}>
              {APP_CONFIG.description}
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              Projeto Next.js moderno com Material-UI e hooks personalizados
            </Typography>
          </Container>
        </Box>

        {/* Features Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
            mb: 4,
          }}
        >
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                🚀 Next.js 15
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Framework React moderno com App Router, Server Components e otimizações de performance.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                🎨 Material-UI
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Biblioteca de componentes React seguindo o Material Design do Google.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                🪝 useHooks
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Coleção de hooks personalizados para funcionalidades comuns em React.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Hooks Examples */}
        <HooksExampleWrapper />
      </Box>
    </Layout>
  );
}