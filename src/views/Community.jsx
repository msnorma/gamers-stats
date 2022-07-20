import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabList} from '@mui/lab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Challenge from "./Challenges";
import EventList from "../components/List";
import Tournaments from "./Tournaments";
import Stats from "./Stats";
import "../styles/Community.css";
import gameCard from "../assets/fortnite.jpeg";
import '../styles/Card.css';

function Community({stats}) {

  const [state, setState]=useState('0');

   const handleOnclick = (e, value) => {
    e.preventDefault();
    setState(value);
    console.log(state)
  }

  return (
    <div className="container-community">
      <Card sx={{ width: '100%', height: '40vh', borderRadius: '15px', backgroundColor: '#596173'}}>
          <CardMedia
            component="img"
            image={gameCard}
            alt="fortnite"
          />
      </Card>
     
      <div style={{marginTop: '20px', marginRight: '20px', marginLeft: '20px'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabContext value={state}>
          <TabList onChange={handleOnclick} aria-label="basic tabs example" centered>
          {
            EventList.map((item, index) => (
              <Tab
                label={<span style={{color:'#fff'}}>{item.name}</span>}
                id={`simple-tab-${index}`}
                key={item.name}
                value={index}
              />
          ))}
          </TabList>
        
        {
          EventList.map((item, index) => (
          <TabPanel key={item.name} value={item.index}>{item.name}</TabPanel>
          ))}
        
      </TabContext>
      </Box>
    </div>
    </div>
  );
}

export default Community;
