// This shows our landing page

import React from 'react';

import { Box, Typography, Stack, Card } from '@mui/material';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h2" component="h2" gutterBottom>
        Mid-Virginia Radio Control Club
      </Typography>
      <img src="./logo.svg" alt="MVRCC Logo" style={{ height: '100%', maxHeight: '600px', width: 'auto' }} />

      <Card>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Welcome to the MVRCC Website!
          </Typography>
          {//Show wehn we were established
          }
          <Typography variant="body1" gutterBottom>
            The Mid-Virginia Radio Control Club was established in 1970.
          </Typography>
          <Typography variant="body1" gutterBottom>
            This is the website for the Mid-Virginia Radio Control Club. We are a group of RC enthusiasts who fly at the Petersburg RC Club field. We fly all types of RC aircraft, including fixed wing, helicopters, and multirotors.
          </Typography>
          <Typography variant="body1" gutterBottom>
            If you are interested in joining the club, please visit the <Link to="/membership">Membership</Link> page for more information.
          </Typography>
        </Box>
      </Card>
    </Stack>)
}

export default Home;