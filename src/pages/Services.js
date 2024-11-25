import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Services = () => {
  return (
    <Container maxWidth="lg" className="container">
      <Typography variant="h4" sx={{ my: 4 }}>Our Services</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Business Consulting" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Data Analytics" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Digital Marketing" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Technology Solutions" />
        </ListItem>
      </List>
    </Container>
  );
};

export default Services;
