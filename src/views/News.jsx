import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ScrollableFeed from '../components/ScrollableFeed.jsx';
import homePicture1 from '../assets/homePicture1.png';
import "../styles/Card.css";
import "../styles/Home.css";

function News() {
  return (
    <div className="container-home">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <Card className="card-home">
          <CardMedia
            component="img"
            image={homePicture1}
            alt="news"
          />
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card className="card-home">
          <CardMedia
            component="img"
            image={homePicture1}
            alt="news"
          />
        </Card>
        </Grid>
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
    </Box>
    <ScrollableFeed/>
    </div>
  );
}

export default News;
