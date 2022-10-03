import React from 'react';

function HomeFooter() {
  return (
    <div className="fixed-bottom" style={{color: "#707070", textAlign:"center", backgroundColor:"#2D325A", padding: '10px'}}>
      <small>&copy; WeeDigitalza {new Date().getFullYear()}</small>
    </div>
  );
}

export default HomeFooter;
