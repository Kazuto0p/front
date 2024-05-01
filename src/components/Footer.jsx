import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'green', color: 'white', p: 2, textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
      <Typography variant="body1">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
