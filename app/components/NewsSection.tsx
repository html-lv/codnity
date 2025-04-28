'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';
import Link from 'next/link';

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

export default function NewsSection() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=8816d2a7a4cb46b880de49ad40938b96');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.articles && Array.isArray(data.articles)) {
          setNews(data.articles.slice(0, 3));
        } else {
          setError('Invalid data format received from API');
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: 2,
        minHeight: '300px',
        justifyContent: 'center'
      }}>
        <CircularProgress />
        <Typography>Loading news...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center">
        Error: {error}
      </Typography>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {news.map((article, index) => (
        <Card key={index} sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          height: { xs: 'auto', sm: 200 },
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 6
          }
        }}>
          {article.urlToImage && (
            <CardMedia
              component="img"
              sx={{ 
                width: { xs: '100%', sm: 200 },
                height: { xs: 200, sm: '100%' },
                objectFit: 'cover'
              }}
              image={article.urlToImage}
              alt={article.title}
            />
          )}
          <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="h3" gutterBottom>
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
              {article.description}
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="caption" color="text.secondary">
                {new Date(article.publishedAt).toLocaleDateString()}
              </Typography>
              <Link href={article.url} target="_blank" rel="noopener noreferrer">
                <Typography variant="button" color="primary">
                  Read More
                </Typography>
              </Link>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
} 