import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Lottie from "lottie-react";
import programmerAnim from "../static/lotties/programmer-anim.json";
import { myAdjectives, aboutMe, cvLink } from "../static/data/content";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Avatar from '@mui/material/Avatar';
import avatarImg from '../static/images/myavatar.png'

function MenuItem(props) {
  const menuItem = props.name;

  return (
    <p justifyContent="center" className="menu-item" onClick={() => {
      document.getElementById(menuItem).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }}>{menuItem.length > 9 ?
      menuItem.substring(0, 9).toUpperCase() + `.`
      : menuItem.toUpperCase()}</p>
  );
}


export function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };





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
    <>
      <section id='home'>

        <Grid container spacing={0.5} justifyContent="center" margin={5} alignItems="center">

          {/* Intro */}
          <Grid item xs={12} sm={6}>
            <div style={{ paddingRight: '10px' }}>
              <h1>
                <em>Hello! I am <span style={{ color: "darkgreen" }}>Subhajit</span><br />I am a <span>{text}</span>
                  <Cursor cursorBlinking={!helper.isDone} />
                </em></h1>
              <p style={{ textAlign: 'justify' }}>{aboutMe}</p>


              <Button variant="outlined" startIcon={<OpenInNewIcon />} size="large" href={cvLink} target="_blank" rel="noopener noreferrer">
                Resume
              </Button>
            </div>
          </Grid>

          {/* Animation */}
          <Grid item xs={0} sm={6}>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Lottie
                id="lottie1"
                animationData={programmerAnim}
                loop={true}
                lottieRef={lottieRef}
                autoplay={false} />
            </div>
          </Grid>

        </Grid>
      </section>

      <div className='swipe-up-menu'>

        <SwipeableDrawer
          anchor="bottom"
          open={isOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={30}
        >

          {/* swipe up menu - close bar */}
          <Box
            sx={{
              height: 56,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f0f0',
            }}
          >
            <Button onClick={toggleDrawer(false)}>Close</Button>

          </Box>



          {/* Scrollable content */}
          <Box sx={{ p: 2 }}>
            <nav style={{ textAlign: "center" }}>
              <MenuItem name="home" />
              <MenuItem name="qualification" />
              <MenuItem name="skills" />
              <MenuItem name="projects" />
              <MenuItem name="contact" />
            </nav>
          </Box>


        </SwipeableDrawer>

        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '0px',
            borderTop: '1px solid #ccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 5,
            borderTopLeftRadius: '22px',
            borderTopRightRadius: '22px',
          }}
        >

          <Grid container alignItems="center" justifyContent="center" spacing={1.5}
            onClick={toggleDrawer(true)}>
            <Grid item>
              <Avatar alt="subhajit" src={avatarImg} />
            </Grid>
            <Grid item>
              <h4>
                <em>Subhajit <br /> Mallick</em>
              </h4>
            </Grid>
          </Grid>

        </div >
      </div>

    </>
  );
}

export default Home;