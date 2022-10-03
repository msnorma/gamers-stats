import React from 'react';

function DashboardFooter() {
  return (
    <div className="fixed-bottom" style={{color: "#707070", textAlign:"center"}}>
      <small>&copy; WeeDigitalza {new Date().getFullYear()}</small>
    </div>
  );
}

export default DashboardFooter;
