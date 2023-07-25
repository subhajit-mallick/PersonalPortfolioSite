import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgba(0, 118, 193, 0.1)',
        color: '#fff',
        paddingY: 3,
        textAlign: 'center',
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <IconButton
          component="a"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          color='primary'
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          color='primary'
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://wa.me/7584937146"
          target="_blank"
          rel="noopener noreferrer"
          color='primary'
        >
          <WhatsAppIcon />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:subha.api.vf9p8@slmail.me"
          target="_blank"
          rel="noopener noreferrer"
          color='primary'
        >
          <EmailIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" component="p" mt={1} sx={{ color: 'primary.main' }}>
        &copy; {new Date().getFullYear()} subhajit mallick. all rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
