'use client';

import { Paper, Typography, Box, Chip, Button } from '@mui/material';
import Storage from '@mui/icons-material/Storage';
import Build from '@mui/icons-material/Build';
import Link from '@mui/icons-material/Link';
import { useTheme } from '@mui/material/styles';

interface ProjectLink {
  name: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  responsibilities: string[];
  technologies: string[];
  links?: ProjectLink[];
}

export default function ProjectCard({ title, responsibilities, technologies, links }: ProjectCardProps) {
  const theme = useTheme();

  return (
    <Paper elevation={3} sx={{ 
      p: 3,
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: 6
      }
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Storage sx={{ mr: 1, color: theme.palette.primary.main, verticalAlign: 'middle' }} />
        <Typography variant="h5" sx={{ color: theme.palette.primary.main, display: 'inline-block' }}>
          {title}
        </Typography>
      </Box>
      
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Build sx={{ mr: 1, color: theme.palette.secondary.main, verticalAlign: 'middle' }} />
          <Typography variant="subtitle1" sx={{ display: 'inline-block' }}>
            Main Responsibilities:
          </Typography>
        </Box>
        <ul>
          {responsibilities.map((responsibility, idx) => (
            <li key={idx}>
              <Typography>{responsibility}</Typography>
            </li>
          ))}
        </ul>
      </Box>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Technologies Used:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {technologies.map((tech, idx) => (
            <Chip
              key={idx}
              label={tech}
              color="primary"
              variant="outlined"
              size="small"
              sx={{ 
                '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText
                }
              }}
            />
          ))}
        </Box>
      </Box>

      {links && links.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            Project Links:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {links.map((link, idx) => (
              <Button
                key={idx}
                variant="outlined"
                size="small"
                startIcon={<Link />}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText
                  }
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>
        </Box>
      )}
    </Paper>
  );
} 