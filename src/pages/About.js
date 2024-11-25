import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" className="container">
      <Typography variant="h4" sx={{ my: 4 }}>About Insights 365</Typography>
      <Typography variant="body1">
        At Insights 365, we are committed to providing world-class solutions for your business. Our team of experts
        ensures that every project delivers value and drives success for our clients.
      </Typography>
    </Container>
  );
};

export default About;
