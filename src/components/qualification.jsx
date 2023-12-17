
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
import { myQualification } from '../static/data/content';

function QCard(props) {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="textSecondary">
        {props.time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} sx={{
          position: 'relative',
          width: { xs: "60vw", sm: "50vw", md: "40vw", lg: "24vw" },
          height: { xs: "20vh", sm: "19vh", md: "19vh", lg: "19vh" },
          borderRadius: 5, ml: 0.5, mr: 5
        }}>
          <p style={{ padding: "1rem" }}>
            <strong>{props.title}</strong>
            <br />{props.subtitle}<p></p>
            <Chip
              sx={{
                position: 'absolute',
                bottom: '15px', // Adjust this value to fine-tune the positioning
                left: '15px', // Adjust this value to fine-tune the positioning
              }}
              label={props.chiptext} variant="outlined" color='success' />
          </p>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
}



function Qualification() {

  const halfIndex = Math.ceil(myQualification.length / 2);
  const qf1 = myQualification.slice(0, halfIndex);
  const qf2 = myQualification.slice(halfIndex);

  return (
    <section id='qualification'>

      <Divider><h2>Qualification</h2></Divider>


      <Box
        id="qualification-box-lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Use space-between to separate the Timelines
          flexDirection: 'row', // Display Timelines side by side
          p: 1,
          flexWrap: 'wrap', // Allow items to wrap to the next line on smaller screens
        }}
      >
        <Timeline
          position="right"
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.3,
            },
          }}
        >
          {qf1.map((item, index) => (
            <QCard
              key={index} // Add a key prop to QCard to suppress React warning
              title={item.title}
              subtitle={item.subtitle}
              chiptext={item.chiptext}
              time={item.time}
            />
          ))}
        </Timeline>

        <Timeline
          position="right"
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.3, // Adjust the flex value as needed
            },
          }}
        >
          {qf2.map((item, index) => (
            <QCard
              key={index} // Add a key prop to QCard to suppress React warning
              title={item.title}
              subtitle={item.subtitle}
              chiptext={item.chiptext}
              time={item.time}
            />
          ))}
        </Timeline>
      </Box>


      <Timeline
        id='qualification-box-sm'
        position="right" sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.3,
          },
        }}>
        {
          myQualification.map((item, index) => (
            <QCard
              title={item.title}
              subtitle={item.subtitle}
              chiptext={item.chiptext}
              time={item.time}
            />
          ))
        }
      </Timeline>

    </section>
  );
}

export default Qualification;
