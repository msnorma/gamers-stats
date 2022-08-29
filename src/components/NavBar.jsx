import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import NavBarList from './NavBarList';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import '../styles/NavBar.css';
import '../styles/Button.css';

const NavBar = ({setLogin}) =>{

  const navigate = useNavigate();

  function handleLogOut(e){
    e.preventDefault();
    console.log("The home page")
    setLogin(false);
    navigate('/')
  }
 
  return(
    <div className="container-nav">
      <Box sx={{ width: '100%' }}>
        <Tabs indicatorColor="primary" sx={{padding:'0px'}} centered>
        {
          NavBarList.map((item, index) => (
            <Tab
              label={<span style={{color:'#474747'}}>{item.name}</span>}
              id={`simple-tab-${index}`}
              key={item.name}
              // iconPosition="start"
              // icon={<span style={{color:'#fff'}}>{item.icon}</span>}
              component={Link}
              to={item.route}
              disableRipple
            />
        ))}
        <Grid justify="flex-end">
          <Button onClick={handleLogOut} className='btn-login' variant="outlined" color="secondary" size="medium" disableRipple>
              Login out
          </Button>
        </Grid>
        </Tabs>
        {/* <Divider variant="inset" sx={{ bgcolor: "#F5F5F5" }}/> */}
      </Box>
    </div>
  )
}

export default NavBar;