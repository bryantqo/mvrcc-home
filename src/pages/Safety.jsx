// Show some basic info about the kennel
// Props: none
// State: none

import React from 'react';

import { Box, Typography, Card, Grid, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

export default function Safety() {
    return (
        <Stack container spacing={2} flexShrink={1} sx={{ margin: 'auto', maxWidth: '850px' }}>
            <Typography variant="h3" component="h2" gutterBottom>
                Safety
            </Typography>

            <Box sx={{ height: 'auto', width: '100%', maxWidth: '850px', boxSizing: 'border-box', textAlign: 'left', textIndent: '1em' }} flexGrow={1} padding={1} xs={8} >
                <Typography variant="p" component="p" gutterBottom>
                    At the MVRCC field we strive to maintain a safe environment for all members and guests.  We have a few rules that we ask everyone to follow to ensure that we can all enjoy our hobby safely.
                </Typography>                
            </Box>

            <Stack spacing={1} sx={{ height: 'auto', width: '100%', maxWidth: '850px', boxSizing: 'border-box', textAlign: 'left', textIndent: '1em' }} flexGrow={1} padding={1} xs={8} >
                <Typography variant="h5" component="h4" gutterBottom>
                    FIELD AND SAFETY RULES (2014)
                </Typography>


                <Typography variant="p" component="p" gutterBottom>
                    Club Safety Rules. Written or common safety and operational practices are to be followed at all times. MVRCC members are responsible for maintaining safe flying conditions while at the field and instructors are responsible for students during instruction.  The arbitration rules/guidelines will apply to disputes between MVRCC members resulting from violations of Club safety rules, damage to property or persons, resulting from the operation of radio control models, or conduct unbecoming to MVRCC members.
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    Only transmitters using AMA-approved frequencies are allowed for operation of remote controlled aircraft at MVRCC fields. The frequency control board is to be used by all flyers using channel-specific radios and their current AMA card must be placed in the respective channel slot BEFORE turning on any such transmitter.
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    The flight line is the designed area along the length of the runway, and is away from the pit/parking for operation of radio-controlled aircraft by pilots, instructors, students, assistants or other authorized personnel. Only AMA members will be allowed on the flight line
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    Operation of aircraft shall be in front of the flight line. The flight line extends the full length of the runway and extending from the ends of "active runway". Pilots and spotters will stand in the designated area just to the rear of the flight line. Intentionally flying behind the flight line, over the taxiways or pit/parking area, or over public roadways is prohibited.
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    STARTING of Glow or Gas Engines:
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    Fixed-wing Models will be restrained by either a ground anchor or the use of an assistant.  Aircraft engines will only be started and run-up in the designated starting areas between each taxi lane or on the flight line.
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    Electric Models: Arming of throttle/Speed control (connecting battery) will be allowed in the pits, but motor testing must be done in the starting area.
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    Turbines are permitted
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    First Person View (FPV) - Pilots using video equipment to operate aircraft must comply with current AMA FPV policy.
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    Pit/Parking line area is designated for aircraft, equipment, member/guest parking and limited access during open flying and sanctioned events. Taxing, launching aircraft, or hovering of aircraft is prohibited in the pit/parking area. If necessary, any member should advise guests, visitors and spectators of safety rules.
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    Taxiways are the designated paths from the pit/parking area to the flight line and to be used for access to the flight line and returning to the pit/parking area for all aircraft.  Airplanes may be taxied FROM the starting area TO the Flight line. Airplanes may be taxied FROM the flight line to a point just PRIOR to entering the pits. Take-off or landing from a taxiway is prohibited. Rotary winged aircraft will be carried to and from the pits.
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    Control Line - Control line flying will be done in an area that is located far enough from the pits and flight line as to be safe and will not interfere with radio control flight. Pilots desiring to fly control line will coordinate with other pilots prior to flying.
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    Only Club members and their AMA guests shall be allowed use of the fields. Pilots must maintain both AMA and MVRCC paid membership. Anyone not a member or guest, may be asked to leave. Flyers will present their MVRCC membership card if requested by a Club member. Guests may fly a maximum of three times before MVRCC membership is required. The Board of Directors may authorize exceptions.
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    Pets are allowed at the field provided that they are on leash or firmly tied to a stationary object.  Pets are not allowed on the taxiways, flying area or runway at any time.  Owners assume responsibility for pets.
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    Flight Training/Certification: New pilots must be observed by a club member and will be certified by demonstrating the following:
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    <ol>
                        <li>Safe starting, demonstrate safety rules by starting/operating in the correct area</li>
                        <li>Controlled and safe take off/ Hand launch/ hover (Rotary wing/ multirotor)</li>
                        <li>Straight and level flight</li>
                        <li>Left and right banking turn during forward flight</li>
                        <li>Landing approach and touch down</li>
                    </ol>
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    When a new pilot has completed these tasks, they will be able to fly on their own and receive a key to the gate lock.
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    No alcoholic beverages or intoxicating substances of any kind shall be brought to or consumed at the field. Violations may result in loss of MVRCC membership.
                </Typography>

                <Typography variant="p" component="p" gutterBottom>
                    Any accident involving personal injury or property damage (other than aircraft) shall be reported to a Club Officer who, if required, will report it to AMA Headquarters.
                </Typography>
            </Stack>
        </Stack>
    );
}