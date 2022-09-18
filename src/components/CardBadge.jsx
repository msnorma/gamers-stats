import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import '../styles/App.css';
import '../styles/Card.css';
import '../styles/Layout.css';

const CardBadge=()=>{
  return(
    <div className="card-profile-container">
      <Card className="card-right-dashboard">
        <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          Achievements
        </Typography>
        </CardContent>
        <CardActionArea disableRipple>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default CardBadge;