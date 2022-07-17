import React from 'react';
import { Link } from 'react-router-dom';
import NavBarList from './NavBarList';
import '../styles/NavBar.css';

function NavBar(){

  return(
    <div style={{float: 'left', height: '100vh', width: '40vh', backgroundColor: '#1E1F20'}}>
      <ul style={{listStyle:'none'}}>
        {
          NavBarList.map((item, index)=> {
          return (
            <li key={index} className="nav-item">
              <Link to={item.route} className="nav-link">
                <span>{item.name}</span>
              </Link>
            </li>
          );})
        }
      </ul>
    </div>
  )
}

export default NavBar;