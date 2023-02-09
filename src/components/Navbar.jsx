import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import SecondNavBarList from './NavbarList';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import '../styles/NavBar.css';
import '../styles/Button.css';

const NavBar = ({setLogin}) =>{

  const navigate = useNavigate();

  function handleLogOut(e){
    e.preventDefault();
    console.log("The home page")
    setLogin(false);
    navigate('/register')
  }
 
  return(
    <div className="container-nav">
      <Box className="nav__box" sx={{ width: '100%' }}>
        <ul className="nav__list">
        {
          SecondNavBarList.map((item, index) => {
            return (
              <li key={index} className="nav__list-item">
                <Link to={item.route}>
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })
        }
        <div className="btn-container">
          <Button onClick={handleLogOut} className="btn-login" variant="standard" color="secondary" size="medium" disableRipple>
            Logout
          </Button>
        </div>
        
        </ul>
      </Box>
    </div>
  )
}

export default NavBar;