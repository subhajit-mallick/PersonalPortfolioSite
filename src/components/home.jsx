
import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Lottie from "lottie-react";
import programmerAnim from "../static/lotties/programmer-anim.json";
import { myAdjectives, aboutMe, cvLink } from "../static/data/content";

function Home() {

  const lottieRef = React.useRef();
  const [text, helper] = useTypewriter({
    words: myAdjectives,
    loop: 1,
    typeSpeed: 200,
  });

  const handleMouseEnter = () => {
    lottieRef.current.play();
  };

  const handleMouseLeave = () => {
    lottieRef.current.pause();
  };

  return (
    <div id='home'>
      <Grid container spacing={2}>
        <Grid id="greeting-text" item xs={6}>

          <h1><em>Hello! I am <span style={{ color: "darkgreen" }}>Subhajit</span><br />I am a
            <span>{text}</span><Cursor cursorBlinking={!helper.isDone} />
          </em></h1>
          <p>{aboutMe}</p>

          <Button variant="outlined" startIcon={<OpenInNewIcon />} size="large" href={cvLink} target="_blank" rel="noopener noreferrer">Resume</Button>
      
        </Grid>
        <Grid item xs={6}>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Lottie
              animationData={programmerAnim}
              loop={true}
              lottieRef={lottieRef}
              autoplay={false}
            />
          </div>
        </Grid>
      </Grid >
    </div >
  );
}

export default Home;
