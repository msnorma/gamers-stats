import React from 'react';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import '../styles/App.css';
import '../styles/Typography.css';
import '../styles/Card.css';

function Home() {
  return (
    <div className="container-home">
     <Typography className="title-home" variant="h2" gutterBottom>
        Say what we do.
      </Typography>
      <h5 className="title-home-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
    </div>

  );
}

export default Home;
