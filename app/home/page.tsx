'use client';

import { Container, Typography, Box } from '@mui/material';
import NewsSection from '../components/NewsSection';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ 
            color: 'primary.main',
            fontWeight: 'bold',
            mb: 3
          }}>
            Latest Technology News
          </Typography>
          <NewsSection />
        </Box>
      </Box>
    </Container>
  );
} 