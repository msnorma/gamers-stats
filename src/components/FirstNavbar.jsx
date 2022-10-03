import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FirstNavbarList from './FirstNavbarList';
import '../styles/Home.css';
import '../styles/NavBar.css';
import '../styles/Button.css';

const DashboardNav = () => {

  const navigate = useNavigate();

  const handleLogin=(e)=>{
    e.preventDefault();
    console.log("The register form opens")
    navigate('/register')
  }

  return (
    <div className="container-nav">
      <Box className="nav__box" sx={{ width: '100%' }}>
        <ul className="nav__list">
        {
          FirstNavbarList.map((item, index) => {
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
          <Button onClick={handleLogin} className="btn-login" variant="outlined" color="secondary" size="medium" disableRipple>
            Login
          </Button>
        </div>
        
        </ul>
      </Box>
    </div>
  );
}

export default DashboardNav;
