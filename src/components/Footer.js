import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ textAlign: 'center', py: 3, backgroundColor: '#003c8f', color: 'white' }}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Insights 365. All Rights Reserved.
      </Typography>
      <Typography variant="body2">
        Follow us on{' '}
        <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" color="inherit">
          YouTube
        </Link>.
      </Typography>
    </Box>
  );
};

export default Footer;
