
import React from 'react';
import { Paper, Chip } from '@mui/material/';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
// import { motion } from "framer-motion"

function QCard(props) {
  return (
    // <motion.div
    // drag
    // dragConstraints={{ left: 1, right: 1, top: 1, bottom: 1 }}
    // dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
    // dragElastic={1}>
    <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
        {props.time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} sx={{ width: '24vw', borderRadius: 5, ml: 0.5, mr: 5 }}>
          <p style={{ padding: "1rem" }}>
            <strong>{props.title}</strong>
            <br />{props.subtitle}<p></p>
            <Chip label={props.chiptext} variant="outlined" color='success' />
          </p>
        </Paper>
      </TimelineContent>
    </TimelineItem>
    // </motion.div>
  );
}



function Qualification() {


  return (
    <section id='qualification'>

      <Divider><h2>Qualification</h2></Divider>


      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          p: 1,
        }}
      >

        <Timeline position="right" sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.3,
          },
        }}>
          <QCard
            title="B.Tech (Computer Science & Engineering)"
            subtitle="Kalyani Government Engineering College"
            chiptext="CGPA: 9.53"
            time="2023"
          />
          <QCard
            title="Diploma (Electric Engineering)"
            subtitle="BPC Institute of Technology"
            chiptext="OGPA: 8.83"
            time="2020"
          />
        </Timeline>


        <Timeline position="right" sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.1,
          },
        }}>
          <QCard
            title="Higher Secondary (CISCE)"
            subtitle="Krishnagar Academy"
            chiptext="ISC-2017: 69.1 %"
            time="2017"
          />
          <QCard
            title="Secondary (CISCE)"
            subtitle="Krishnagar Academy"
            chiptext="ICSE-2015: 79.8 %"
            time="2015"
          />
        </Timeline>

      </Box>

    </section>
  );
}

export default Qualification;
