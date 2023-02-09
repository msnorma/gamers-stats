import React from 'react';
import Typography from '@mui/material/Typography';
import SearchBar from '../components/SearchBar';
import '../styles/App.css';
import '../styles/Typography.css';

function Faq() {
  return (
    <div className="container-faq">
      <Typography className="title-faq" variant="h3" gutterBottom>
          How can we help?
      </Typography>
      <h5 className="title-description" style={{marginTop:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
      <SearchBar/>
    </div>
  );
}

export default Faq;
