import React from 'react';
import Typography from '@mui/material/Typography';
import "../styles/Typography.css";

function About() {
  return (
    <div className="container-about">
     <Typography className="title-about" variant="h2" gutterBottom>
        Something about what we do with stats.
      </Typography>
      <h5 className="title-about-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
    </div>
  );
}

export default About;
