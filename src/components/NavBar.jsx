import React from 'react';
import {Link} from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import NavBarList from './NavBarList';
import '../styles/NavBar.css';
import noobLogo from "../assets/noob.png";
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';

 
function NavBar(){

  return(
    <div>
      
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            width: 260,
            boxSizing: 'border-box',
            backgroundColor:"#282c34",
            overflowX:"hidden",
            height:"100vh",
            position: "relative"
          },
        }}
        variant="permanent"
        open={true}
      >
        <Container sx={{display: 'flex'}}>
          <img src={noobLogo} alt="noob" style={{width: '20%', margin: '30px 0px 80px 20px'}}/>
          <Typography variant="h6" sx={{color: '#fff',margin: '40px 0px 0px 20px'}}>Noob Watch</Typography>
        </Container>
        <List>
        {
          NavBarList.map((item, index)=> {
          return (
            <li key={index} className="nav-item">
              <Link to={item.route} className="nav-link">
                <span style={{width: '20px'}}>{item.icon}</span>
                <small style={{marginLeft: '20px'}}>{item.name}</small>
              </Link>
            </li>
          );})
        }
        </List>
      </Drawer>
    </div>
  )
}

export default NavBar;