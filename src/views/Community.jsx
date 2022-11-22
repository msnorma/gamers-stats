import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardProfile from '../components/CardProfile';
import CardBadge from '../components/CardBadge';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import CardTournaments from '../components/CardTournament';
import CardChallenges from '../components/CardChallenges';

import '../styles/Card.css';
import '../styles/App.css';
import '../styles/Button.css';

export default function Community({stats}) {
  
  const [categories, setCategories]=useState("");
  const [isSelected, setSelected]=useState("");

  const changeCategory = (e,value) => {
    setCategories(value);
    // TODO: fix invalid value provided on render
    console.log(categories)
  }

  const handleChange = (e,newValue) => {
    setSelected(newValue);
  };

  return (
    <div className="container-community">
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <CardProfile/>
          <CardBadge/>
        </Grid>
        <Grid className="col-2-dashboard" item xs={9}>
          <div className="row-card-catergories">
          <Card className="card-categories-community">
            <CardActionArea style={{outline: 'none', height: '22vh'}} value={categories} onClick={e=>changeCategory(e,"Battle Royale")} disableRipple>
              <Typography className="cartegory-text" style={{textAlign: 'center'}} gutterBottom variant="subtitle1" component="div">
                Battle Royale
              </Typography>
            </CardActionArea>
          </Card>
          </div>
          <Box sx={{ width: '100%', typography: 'body1', marginTop: '20px' }}>
            <TabContext value={isSelected}>
              <Box sx={{ borderColor: 'none' }}>
                <TabList onChange={handleChange} indicatorColor="transparent" aria-label="lab API tabs example">
                  <Tab className="btn-tab" sx={{'&.Mui-selected': {outline: 'none'}}} label="Tournaments" value="1" disableRipple/>
                  <Tab className="btn-tab" sx={{'&.Mui-selected': {outline: 'none'}}} label="Challenges" value="2" disableRipple/>
                </TabList>
              </Box>
              <TabPanel value="1"><CardTournaments/></TabPanel>
              <TabPanel value="2"><CardChallenges/></TabPanel>
            </TabContext>
          </Box>
        </Grid>

      </Grid>
    </div>
  );
}
