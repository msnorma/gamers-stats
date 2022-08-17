import React from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TopNavList from './TopNavList';
import '../styles/Home.css';
import '../styles/NavBar.css';

function TopNav() {
  return (
    <div className="container-home">
      <Box className="topNav" sx={{ width: '100%' }}>
        <Tabs sx={{padding:'0px'}} centered>
        {
          TopNavList.map((item, index) => (
            <Tab
              label={<span style={{color:'#474747'}}>{item.name}</span>}
              id={`simple-tab-${index}`}
              key={item.name}
              // iconPosition="start"
              // icon={<span style={{color:'#fff'}}>{item.icon}</span>}
              component={Link}
              to={item.route}
              style={{marginRight:'50px'}}
              disableRipple
            />
        ))}
        <Grid justify="flex-end">
          <Button className='btn-login' variant="outlined" color="inherit" size="medium">
            Login
          </Button>
        </Grid>
        </Tabs>
      </Box>
    </div>

  );
}

export default TopNav;
