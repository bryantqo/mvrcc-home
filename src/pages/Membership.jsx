// Show some basic info about the kennel
// Props: none
// State: none

import React from 'react';

import { Box, Typography, Card, Grid, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

export default function Membership() {
    return (
        <Stack container spacing={2} flexShrink={1} sx={{ margin: 'auto', maxWidth: '850px' }}>
            <Typography variant="h3" component="h2" gutterBottom>
                Membership
            </Typography>

            <Box sx={{ height: 'auto', width: '100%', maxWidth: '850px', boxSizing: 'border-box', textAlign: 'left', textIndent: '1em' }} flexGrow={1} padding={1} xs={8} >
                <Typography variant="h5" component="h4" gutterBottom>
                    Membership Requirements
                </Typography>


                <Typography variant="p" component="p" gutterBottom>
                    <ol>
                        <li>Must be a current AMA member</li>
                        <li>Must be sponsored by a current member</li>
                        <li>Must attend a club meeting to be voted in</li>
                        <li>Must pay the annual dues</li>
                        <li>Must be voted in by the club</li>
                    </ol>

                </Typography>
            </Box>

            <Box sx={{ height: 'auto', width: '100%', maxWidth: '850px', boxSizing: 'border-box', textAlign: 'left', textIndent: '1em' }} flexGrow={1} padding={1} xs={8} >
                <Typography variant="h5" component="h4" gutterBottom>
                    Membership Dues
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    <ol>
                        <li>Yearly Membership Fee: $100</li>
                        <li>Non-Mowing Fee: $25</li>
                        <li>New Member Fee: $25</li>
                    </ol>
                </Typography>
            </Box>

            <Box sx={{ height: 'auto', width: '100%', maxWidth: '850px', boxSizing: 'border-box', textAlign: 'left', textIndent: '1em' }} flexGrow={1} padding={1} xs={8} >
                <Typography variant="h5" component="h4" gutterBottom>
                    Joining
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    To join MVRCC please fill out this <a href="https://docs.google.com/f/forms/d/e/1FAI" target="_blank" rel="noopener noreferrer">form</a> and attend a club meeting.
                </Typography>
            </Box>

        </Stack>
    );
}