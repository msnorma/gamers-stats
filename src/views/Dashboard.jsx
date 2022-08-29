import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CardProfile from '../components/CardProfile';
import CardBadge from '../components/CardBadge';
import '../styles/Card.css';
import '../styles/Layout.css';

function Dashboard() {
  return (
    <div className="container-dashboard">
     <Grid container spacing={2}>
        <Grid className="col-1-dashboard" item xs={3}>
         <CardProfile/>
         <CardBadge/>
        </Grid>
        <Grid className="col-2-dashboard" item xs={9}>
          <Card className="card-dashboard">
            <CardActionArea disableRipple>
              <CardMedia
                className="card-img-home"
                component="img"
                image={{}}
                alt="home"
              />
            </CardActionArea>
          </Card>
          <Card className="card-info-dashboard">
            <CardActionArea disableRipple>
              <CardMedia
                className="card-img-home"
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

export default Dashboard;
