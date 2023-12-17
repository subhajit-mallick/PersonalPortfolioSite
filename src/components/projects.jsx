import React from 'react';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip/Chip';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Grid from '@mui/material/Unstable_Grid2';
import { motion } from "framer-motion"
import ProjectItems from '../static/data/content'
import { alertMsgForDelay } from '../static/data/content'


function ProjCard(props) {

  return (

    <motion.div whileHover={{ x: 2, y: -10 }}
      transition={{ duration: 0.3 }}>
      <Grid xs={"auto"}>
        <Card sx={{ maxWidth: 345, margin: 0.5 }}>
          <CardMedia
            component="img"
            height="194"
            image={props.img}
          // sx={{ filter: "blur(1px)" }}
          />
          <CardContent>
            <p><strong>{props.name}</strong></p>
            <Typography variant="body2" color="text.secondary">
              {props.desc}
            </Typography>
          </CardContent>
          <CardActions sx={{ margin: "0  10px 10px" }}>
            <Chip
              icon={<GitHubIcon />}
              label="GitHub Repo"
              variant="outlined"
              color='secondary'
              onClick={() => { window.open(props.urlRepo, '_blank') }}
            />
            <Chip
              icon={<OpenInNewIcon />}
              label={props.isLive ? "Live Demo" : "Documentation"}
              variant="outlined"
              color='primary'
              onClick={() => {
                if(props.delayInStart) alert(alertMsgForDelay);
                window.open(props.urlLive, '_blank');
              }}
            />
          </CardActions>
        </Card>
      </Grid>
    </motion.div>
  );
}



export default function Projects() {
  return (
    <section id='projects'>
      <Divider><h2>Projects</h2></Divider>

      <Grid container spacing={0.5} display="flex" justifyContent="center" alignItems="center">
        {
          ProjectItems.map((item, i) =>
            <ProjCard key={i} img={item.img} name={item.name} desc={item.desc} isLive={item.isLive} delayInStart={item.delayInStart} urlRepo={item.urlRepo} urlLive={item.urlLive} />)
        }
      </Grid>

    </section>
  );
}