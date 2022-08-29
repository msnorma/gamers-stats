import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TopNavList from './DashboardNavList';
import '../styles/Home.css';
import '../styles/NavBar.css';
import '../styles/Button.css';

const DashboardNav = () => {

  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();
    console.log("The register form opens")
    navigate('/register')
  }

  return (
    <div className="container-nav">
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
          <Button onClick={handleLogin} className="btn-login" variant="outlined" color="secondary" size="medium" disableRipple>
            Login
          </Button>
        </Grid>
        </Tabs>
      </Box>
    </div>
  );
}

export default DashboardNav;
