'use client';

import { Container, Typography, Grid, Paper, Box, useTheme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ProjectCard from '../components/ProjectCard';

export default function About() {
  const theme = useTheme();
  
  const projects = [
    {
      title: "Online Casinos Platform",
      responsibilities: [
        "Maintained and optimized online casino platforms",
        "Resolved bugs and performance issues",
        "Developed and integrated new features",
        "Enhanced user experience and platform functionality"
      ],
      technologies: [
        "Angular 13-16",
        "TypeScript",
        "JavaScript",
        "AngularJS",
        "WebApi",
        "Dbeaver",
        "Postgresql",
        "Postman"
      ],
      links: [
        { name: "Pledoo", url: "https://www.pledoo.com/" },
        { name: "Roy Spins", url: "https://royspins.com/" },
        { name: "Bet It All", url: "https://www.betitall.com/en" },
        { name: "Welle Casino", url: "https://www.welle.casino/" }
      ]
    },
    {
      title: "User Management System",
      responsibilities: [
        "Developed new projects including Fundist-like platform",
        "Migrated projects from Angular 16 to Angular 18",
        "Implemented backend logic for user bonus calculations",
        "Integrated database systems for user data retrieval",
        "Conducted unit testing for code quality assurance"
      ],
      technologies: [
        "Angular 16/18",
        "TypeScript",
        "JavaScript",
        "WebApi",
        "Dbeaver",
        "Postgresql",
        "Postman",
        "CI/CD",
        "Tailwind",
        "NestJs",
        "Node",
        "Jasmine",
        "Karma"
      ]
    },
    {
      title: "University Project - Post Tracking Application",
      responsibilities: [
        "Developed a comprehensive post tracking system for delivery management",
        "Implemented real-time status updates and tracking functionality",
        "Created user-friendly interface for post management",
        "Designed and implemented robust backend system",
        "Conducted thorough API testing and documentation"
      ],
      technologies: [
        "C#",
        "PostgreSQL",
        "Docker",
        "Postman"
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ 
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        mb: 4
      }}>
        About Me
      </Typography>
      
      <Paper elevation={3} sx={{ 
        p: 4, 
        mb: 4,
        background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.background.paper} 100%)`
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <CodeIcon sx={{ mr: 1, color: theme.palette.primary.main, verticalAlign: 'middle' }} />
          <Typography variant="h5" sx={{ color: theme.palette.primary.main, display: 'inline-block' }}>
            Professional Summary
          </Typography>
        </Box>
        <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          Experienced and detail-oriented Front-End Developer with a strong background in building online casinos and management
          systems. Proficient in creating scalable, reusable components, implementing best practices, and ensuring smooth user experiences
          through responsive and maintainable code. Skilled in unit testing and familiar with backend technologies, including database
          integration and business logic development. Passionate about continuous learning and consistently staying updated with the latest
          advancements in web technologies to deliver high-quality, modern solutions.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 