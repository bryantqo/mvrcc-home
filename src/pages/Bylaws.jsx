// Show some basic info about the kennel
// Props: none
// State: none

import React from 'react';

import { Box, Typography, Card, Grid, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

export default function Bylaws() {
    return (
        <Stack container spacing={2} flexShrink={1} sx={{ margin: 'auto', maxWidth: '850px' }}>
            <Typography variant="h3" component="h2" gutterBottom>
                Club Bylaws
            </Typography>

            <Box sx={{ height: 'auto', width: '100%', maxWidth: '850px', boxSizing: 'border-box', textAlign: 'left', textIndent: '1em' }} flexGrow={1} padding={1} xs={8} >
                <Typography variant="p" component="p" gutterBottom>
                    The club bylaws can be downloaded <a href="./Bylaws.pdf">here</a>.
                </Typography>                
            </Box>
        </Stack>
    );
}