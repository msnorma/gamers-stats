import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import badge from '../assets/badge1.png';
import '../styles/App.css';
import '../styles/Card.css';
import '../styles/Layout.css';

const CardBadge=()=>{
  return(
    <div className="card-profile-container">
      <Card className="card-badge-dashboard">
        <CardContent>
        <Typography sx={{color: '#8F8F8F', marginBottom: '20px'}} gutterBottom variant="subtitle1" component="div">
          Badges
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={3}>
          <img className="badges-img" src={badge} alt="badge"/>
        </Grid>
        <Grid item xs={3}>
          {/* <h6>test</h6> */}
        </Grid>
        </Grid>
        </CardContent>
        <CardActionArea disableRipple>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default CardBadge;