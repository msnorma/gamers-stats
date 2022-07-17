import React from 'react';
import GamerCard from '../components/GamerCard';
import "../styles/Stats.css";

function Stats({stats}) {

  return (
    <div className="container-content">
      <div className="container-stats">
        <GamerCard fortniteStats={stats}/>
      </div>
    </div>
  );
}

export default Stats;