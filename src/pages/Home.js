import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box id="home" sx={{ my: 4 }}>
        <Typography variant="h3">Welcome to Insights 365</Typography>
        <Typography sx={{ my: 2 }}>
          Insights 365 is your trusted partner in delivering cutting-edge solutions to help you achieve success.
        </Typography>
        <Button variant="contained" color="primary" href="#about">
          Learn More
        </Button>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ my: 6 }}>
        <Typography variant="h4">About Us</Typography>
        <Typography sx={{ my: 2 }}>
          At Insights 365, we specialize in helping businesses succeed through innovation and expertise.
        </Typography>
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ my: 6 }}>
        <Typography variant="h4">Our Services</Typography>
        <Typography sx={{ my: 2 }}>
          We provide Business Consulting, Data Analytics, Digital Marketing, and Technology Solutions.
        </Typography>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ my: 6 }}>
        <Typography variant="h4">Contact Us</Typography>
        <Typography sx={{ my: 2 }}>
          Have questions? Reach out to us via email or call our support team for assistance.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
