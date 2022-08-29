import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
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

    <Grid className="grid-home" container spacing={2}>
      <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Card className="sm-card-img-home">
          <CardActionArea disableRipple>
            <CardMedia
              component="img"
              image={{}}
              alt="home"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className="sm-card-img-home">
          <CardActionArea disableRipple>
            <CardMedia
              component="img"
              image={{}}
              alt="home"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className="sm-card-img-home">
          <CardActionArea disableRipple>
            <CardMedia
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
