import React from 'react';
import { Link } from 'react-router-dom';
import NavBarList from './NavBarList';
import '../styles/NavBar.css';

function NavBar(){

  return(
    <nav className="navbar">
      <div class="container">
        <ul className="nav justify-content-center">
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
    </nav>
  )
}

export default NavBar;