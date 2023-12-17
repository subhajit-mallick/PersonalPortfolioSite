import React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
// import Box from '@mui/material/Box';
import Lottie from "lottie-react";
import SkillAnim from "../static/lotties/prog-skill-anim.json";
import { motion } from "framer-motion"
import Pagination from '@mui/material/Pagination';
import { mySkills } from '../static/data/content';
import Grid from '@mui/material/Unstable_Grid2';


function SkCard(props) {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.1, 1.09] }}
      transition={{ duration: 0.3 }}>
      <Paper elevation={3} sx={{
        border: 1, m: 2, boxShadow: 2,
        width: { xs: "80vw", sm: "50vw", md: "30vw", lg: "25vw" }
      }}>
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

  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };



  return (
    <>
      <section id='skills'>
        <Divider><h2>Skills</h2></Divider>


        <Grid container spacing={0.5} display="flex" justifyContent="center" margin={5} alignItems="center">


          <Lottie
            animationData={SkillAnim}
            loop={false}
            autoplay={true}
            lottieRef={lottieRef}
            interactivity={interactivity}
            className="lottie-skill-anim"
          />


          <div style={{ position: 'relative' }}>
            {
              mySkills[currentPage - 1].map((item, index) => (
                <SkCard title={item.title} subtitle={item.subtitle} />
              ))
            }

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: "2vh" }}>

              <Pagination style={{ position: 'absolute', bottom: -20 }} count={mySkills.length} page={currentPage}
                onChange={handlePageChange} variant="outlined" shape="rounded" />

            </div>
          </div>
        </Grid>

      </section >
    </>
  );
}

export default Skills;
