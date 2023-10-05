// Show some basic info about the kennel
// Props: none
// State: none

import React from 'react';

import { Box, Typography, Card, Grid, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';




export default function Field() {
    return (
        <Stack container spacing={2} flexShrink={1} sx={{ margin: 'auto', maxWidth: '850px' }}>
            <Typography variant="h3" component="h2" gutterBottom>
                Field Information
            </Typography>

            <Box sx={{ height: 'auto', width: '100%', maxWidth: '850px', boxSizing: 'border-box', textAlign: 'left', textIndent: '1em' }} flexGrow={1} padding={1} xs={8} >
                <Typography variant="h5" component="h4" gutterBottom>
                    Address
                </Typography>


                <Typography variant="p" component="p" gutterBottom>
                    { // Show the address and link to it for directions
                    }
                    <a href="https://goo.gl/maps/pucFLx5JV3s5QebQA" target="_blank" rel="noopener noreferrer">
                        1161 Wagner Rd
                        <br />
                        Petersburg, VA 23803
                    </a>
                </Typography>
            </Box>

            <Box sx={{ height: 'auto', width: '100%', maxWidth: '850px', boxSizing: 'border-box', textAlign: 'left', textIndent: '1em' }} flexGrow={1} padding={1} xs={8} >
                <Typography variant="h5" component="h4" gutterBottom>
                    Directions
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    From I-95 use exit 48A-East towards 460.  Proceed past AGRI SUPPLY Company (on the left) and over the Railroad Bridge (you can see the flying field--LOOKING TO YOUR LEFT-- from the top of the bridge).  The entrance will be at the bottom of the overpass, on the left (left turn lane) 2/10s mile before 460 intersection. 
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    When approaching the entrance, the Club’s lock is on the right side of the chain, the hunting club’s locks are on the left. If   the chain is up on arrival, enter by unlocking the Club’s lock.  If the chain is down and hunting club’s lock is open, leave the chain down when you leave. If the chain is down and the Club’s lock is open, last member to depart will raise and lock the chain.
                </Typography>
            </Box>

            <Box sx={{ height: 'auto', width: '100%', maxWidth: '850px', boxSizing: 'border-box', textAlign: 'left', textIndent: '1em', marginBottom: '1em' }} flexGrow={1} padding={1} xs={8} >
                <Typography variant="h5" component="h4" gutterBottom>
                    Field Rules
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    Excepted as noted below, members may fly from daylight until dark Monday through Sunday.  Absolutely no flying after dark except with the expressed written permission of Wagner Properties. During the regular hunting season, members will not be allowed on the property before 10:00 AM & after 3:00 PM, Monday thru Saturday.
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    For more information about safety, please see the <a href="/safety">safety page</a>.
                </Typography>
            </Box>


            <Box sx={{ height: 'auto', width: '100%', maxWidth: '850px', boxSizing: 'border-box', textAlign: 'left', textIndent: '1em', marginBottom: '1em' }} flexGrow={1} padding={1} xs={8} >
                <Typography variant="h5" component="h4" gutterBottom>
                    Recovery of Model Aircraft
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    We may recover crashed aircraft from the field’s area at any time during the hours of use. We may recover crashed aircraft from the woods area at any time during the hours of use except during hunting restricted hours. During hunting hours we may recover their aircraft from the woods area only on Sunday. Contact a club officer for any exceptions to this policy.
                </Typography>
            </Box>


            <Box sx={{ height: 'auto', width: '100%', maxWidth: '850px', boxSizing: 'border-box', textAlign: 'left', textIndent: '1em', marginBottom: '1em' }} flexGrow={1} padding={1} xs={8} >
                <Typography variant="h5" component="h4" gutterBottom>
                    Hunting
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    Your board of directors also wishes to remind you that hunting privileges are not part of our lease. MVRCC members are not permitted to hunt or disturb game animals on Wagner property, in any way, at any time.
                </Typography>
            </Box>
        </Stack>
    );


}