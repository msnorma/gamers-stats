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
      
      <Box sx={{ width: '100%', bgcolor: '#282c34' }}>
        
        <Tabs textColor="primary" indicatorColor="primary" centered>
        {
          NavBarList.map((item, index) => (
            <Tab
              label={item.name}
              id={`simple-tab-${index}`}
              key={item.name}
              ariaControls={`simple-tabpanel-${index}`}
              iconPosition="start"
              icon={item.icon}
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