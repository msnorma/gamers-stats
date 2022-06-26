import React from 'react';
// import GamerCard from '../components/GamerCard';

function Stats({stats}) {

  return (
    
    <div className="wrapper">
     <h1>Stats Page</h1>
     <h3>{stats.name}</h3>
    </div>
  );
}

export default Stats;
