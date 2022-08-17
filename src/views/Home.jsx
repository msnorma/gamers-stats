import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import '../styles/Home.css';

function Home() {
  return (
    <div className="container-home">

      <Card className="card-home">
        <CardActionArea disableRipple>
          <CardMedia
            className="card-img-home"
            component="img"
            image={{}}
            alt="home"
          />
        </CardActionArea>
      </Card>

    <Grid className="grid-home" container spacing={2}>
      <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardActionArea disableRipple>
            <CardMedia
              className="sm-card-img"
              component="img"
              image={{}}
              alt="home"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardActionArea disableRipple>
            <CardMedia
              className="sm-card-img"
              component="img"
              image={{}}
              alt="home"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card>
          <CardActionArea disableRipple>
            <CardMedia
              className="sm-card-img"
              component="img"
              image={{}}
              alt="home"
            />
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>

    </div>

  );
}

export default Home;
