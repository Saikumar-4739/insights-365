import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">Insights 365</Typography>
          <div>
            <Button color="inherit" component={Link} to="home" smooth duration={500}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="about" smooth duration={500}>
              About
            </Button>
            <Button color="inherit" component={Link} to="services" smooth duration={500}>
              Services
            </Button>
            <Button color="inherit" component={Link} to="contact" smooth duration={500}>
              Contact
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
