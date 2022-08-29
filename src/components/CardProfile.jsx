import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import '../styles/App.css';
import '../styles/Card.css';
import '../styles/Layout.css';

const CardProfile=()=>{
  return(
    <div className="card-profile-container">
       <Card className="card-profile-dashboard">
          <CardActionArea disableRipple>
            <CardMedia
              className="card-img-home"
              component="img"
              image={{}}
              alt="home"
            />
          </CardActionArea>
        </Card>
    </div>
  );
}

export default CardProfile;