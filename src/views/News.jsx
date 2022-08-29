import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ScrollableFeed from '../components/ScrollableFeed.jsx';
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
            height="140"
            image={{}}
            alt="news"
          />
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card className="card-home">
          <CardMedia
            component="img"
            height="140"
            image={{}}
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
