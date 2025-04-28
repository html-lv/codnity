'use client';

import { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        const data = await response.json();
        setPosts(data);
        setImages([
          `https://picsum.photos/1200/900?random=${Math.random()}`,
          `https://picsum.photos/1200/900?random=${Math.random()}`,
          `https://picsum.photos/1200/900?random=${Math.random()}`
        ]);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const sections = [
    {
      title: "Random User API",
      content: "Fetching random user data from the Random User Generator API. This API provides random user information including name, email, location, and profile pictures.",
      icon: <CodeIcon sx={{ fontSize: 40, color: '#DD0031' }} />,
      image: images[0]
    },
    {
      title: "Quotes API",
      content: "Accessing inspirational quotes from the Quotes API. This service provides a collection of motivational and thought-provoking quotes from various authors.",
      icon: <BuildIcon sx={{ fontSize: 40, color: '#61DAFB' }} />,
      image: images[1]
    },
    {
      title: "Random Images API",
      content: "Using Picsum Photos API to display high-quality random images. This service provides a collection of professional stock photos that can be used for various applications and projects.",
      icon: <StorageIcon sx={{ fontSize: 40, color: '#3F51B5' }} />,
      image: images[2]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Welcome on home page
      </Typography>
      <Grid container spacing={4}>
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 6
              }
            }}>
              <CardMedia
                component="img"
                height="300"
                image={section.image}
                alt={section.title}
                sx={{
                  objectFit: 'cover',
                  width: '100%',
                  backgroundColor: '#f5f5f5',
                  p: 2
                }}
              />
              <CardContent sx={{ 
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 2
              }}>
                {section.icon}
                <Typography gutterBottom variant="h5" component="h2">
                  {section.title}
                </Typography>
                <Typography>
                  {section.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
