import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="lg" className="container">
      <Typography variant="h4" sx={{ my: 4 }}>Contact Us</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Have questions or need assistance? Fill out the form below, and we’ll get back to you soon.
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ display: 'grid', gap: 2 }}>
        <TextField label="Your Name" variant="outlined" fullWidth required />
        <TextField label="Your Email" variant="outlined" fullWidth required />
        <TextField label="Your Message" variant="outlined" fullWidth multiline rows={4} required />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </Box>
    </Container>
  );
};

export default Contact;
