import React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Lottie from "lottie-react";
import SkillAnim from "../static/lotties/prog-skill-anim.json";
import { motion } from "framer-motion"
import Pagination from '@mui/material/Pagination';


function SkCard(props) {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.1, 1.09] }}
      transition={{ duration: 0.3 }}>
      <Paper elevation={3} sx={{ border: 1, m: 2, boxShadow: 2 }}>
        <p style={{ padding: "2vh" }}>
          <strong>{props.title}</strong>
          <br /><br />
          <Chip label={props.subtitle} variant="outlined" color='secondary' />
        </p>
      </Paper>
    </motion.div>
  );
}



function Skills() {

  const lottieRef = React.useRef();
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.2, 0.45],
        type: "seek",
        frames: [0, 30],
      },
    ],
  };


  return (
    <>
      <section id='skills'>
        <Divider><h2>Skills</h2></Divider>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            p: 1,
            m: 1,
          }}
        >
          <Lottie
            animationData={SkillAnim}
            loop={false}
            autoplay={true}
            lottieRef={lottieRef}
            interactivity={interactivity}
          />
          <div>
            <SkCard title="C++, Java, Python, C#" subtitle="Programming Language" />
            <SkCard title="HTML, CSS, JavaScript, Bootstrap, React" subtitle="Frontend" />
            <SkCard title="MySQL, Oracle SQL, MongoDB" subtitle="Backend" />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Pagination count={2} variant="outlined" shape="rounded" />
            </div>
          </div>
        </Box>


      </section >
    </>
  );
}

export default Skills;
