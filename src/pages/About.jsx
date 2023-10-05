// Show some basic info about the kennel
// Props: none
// State: none

import React from 'react';

import { Box, Typography, Card, Grid, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

export default function About() {
    return (
        <Stack container spacing={2} flexShrink={1} sx={{ margin: 'auto', maxWidth: '850px' }}>
            <Typography variant="h3" component="h2" gutterBottom>
                About
            </Typography>

            <Box sx={{ height: 'auto', width: '100%', maxWidth: '850px', boxSizing: 'border-box', textAlign: 'left', textIndent: '1em' }} flexGrow={1} padding={1} xs={8} >
                <Typography variant="p" component="p" gutterBottom>
                    The Mid-Virginia Radio Control Club (MVRCC) is a group of RC enthusiasts who fly at the Chesterfield County RC Club field. We fly all types of RC aircraft, including fixed wing, helicopters, and multirotors. We also have a few members who fly RC cars and boats.
                </Typography>
            </Box>

            <Box sx={{ height: 'auto', width: '100%', maxWidth: '850px', boxSizing: 'border-box', textAlign: 'left', textIndent: '1em' }} flexGrow={1} padding={1} xs={8} >
                <Typography variant="h5" component="h4" gutterBottom>
                    At MVRCC we strive to
                </Typography>


                <Typography variant="p" component="p" gutterBottom>
                    <ol>
                        <li> Foster and develop interest in radio control modeling in the Richmond and Tri-Cities Area.</li>
                        <li> Provide and maintain a suitable flying site for MVRC club members.</li>
                        <li> Develop, maintain, and enforce safety rules to insure safe flying practices.</li>
                    </ol>

                </Typography>
            </Box>

            <Box sx={{ height: 'auto', width: '100%', maxWidth: '850px', boxSizing: 'border-box', textAlign: 'left', textIndent: '1em' }} flexGrow={1} padding={1} xs={8} >
                <Typography variant="h5" component="h4" gutterBottom>
                    MVRC  CLUB GOAL:
                </Typography>

                <Typography variant="p" component="p" gutterBottom>

                    Communicate National, Regional, District  and local information concerning Radio Control modeling to MVRC members through monthly meetings and newsletters.
                </Typography>

            </Box>
            <Box sx={{ height: 'auto', width: '100%', maxWidth: '850px', boxSizing: 'border-box', textAlign: 'left', textIndent: '1em' }} flexGrow={1} padding={1} xs={8} >
                <Typography variant="h5" component="h4" gutterBottom>
                    MONTHLY MEETINGS
                </Typography>
                <Typography variant="p" component="p" gutterBottom>
                    MVRC Club monthly meetings are held on the 2nd Thursday of each month from January through November. They are held in the Conference room at the Holiday Inn Express in Chester and start at 7:30pm. The address is 1911 West Hundred Road. contact an MVRCC officer for details.
                </Typography>
            </Box>

        </Stack>
    );
}