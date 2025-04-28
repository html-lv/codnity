'use client';

import { Box, Container, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const socialLinks = [
    { icon: <FacebookIcon />, url: 'https://facebook.com' },
    { icon: <TwitterIcon />, url: 'https://twitter.com' },
    { icon: <InstagramIcon />, url: 'https://instagram.com' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            mb: 2,
          }}
        >
          {socialLinks.map((link, index) => (
            <IconButton
              key={index}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </IconButton>
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Codnity task.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 