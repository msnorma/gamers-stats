import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardProfile from '../components/CardProfile';
import CardBadge from '../components/CardBadge';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import GamerCard from '../components/GamerCard';

import '../styles/Card.css';
import '../styles/App.css';

function Community({stats}) {
  
  const [categories, setCategories]=useState("");

  const changeCategory = (e,value) => {
    setCategories(value);
    // TODO: fix invalid value provided on render
    console.log(categories)
  } 

  return (
    <div className="container-community">
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <CardProfile/>
          <CardBadge/>
        </Grid>
        <Grid className="col-2-dashboard" item xs={9}>
          <div className="row-card-catergories">
          <Card className="card-categories-community" sx={{marginRight: '30px'}}>
            <CardActionArea style={{outline: 'none', height: '22vh'}} value={categories} onClick={e=>changeCategory(e,"Battle Royale")} disableRipple>
              <Typography className="cartegory-text" style={{textAlign: 'center'}} gutterBottom variant="subtitle1" component="div">
                Battle Royale
              </Typography>
            </CardActionArea>
          </Card>
          <Card className="card-categories-community">
            <CardActionArea style={{outline: 'none', height: '22vh'}} value={categories} onClick={e=>changeCategory(e,"Sports")} disableRipple>
              <Typography className="cartegory-text" style={{textAlign: 'center'}} gutterBottom variant="subtitle1" component="div">
                Sports
              </Typography>
            </CardActionArea>
          </Card>
          </div>
          <Stack className="community-button-toggle-group" spacing={2} direction="row">
          <Button className="btn-community" variant="standard" color="secondary" size="small" disableRipple>
          Tournaments
          </Button>
          <Button className="btn-community" variant="standard" color="secondary" size="medium" disableRipple>
          Challenges
          </Button>
          </Stack>
          { categories === "Sports" ? 
          <div className="row-card-catergories">
            <Card className="card-tournaments-community">
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Sports
                </Typography>
              </CardContent>
              <CardActionArea disableRipple>
              </CardActionArea>
            </Card>
          </div>
          :
          <div className="row-card-catergories">
            <GamerCard fortniteStats={stats}/>
          </div>
          }
        </Grid>

      </Grid>
    </div>
  );
}

export default Community;
