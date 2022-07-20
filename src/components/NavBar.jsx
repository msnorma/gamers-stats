import React from 'react';
import {Link} from 'react-router-dom';
import NavBarList from './NavBarList';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import '../styles/NavBar.css';

function NavBar(){
 
  return(
    <div style={{width: '100%'}}>
      <Box sx={{ width: '100%', bgcolor: '#1f1f1f' }}>
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
            />
        ))}
        </Tabs>
      </Box>
    </div>
  )
}

export default NavBar;