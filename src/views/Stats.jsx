import React from 'react';
import GamerCard from '../components/GamerCard';
import "../styles/Stats.css";

function Stats({stats}) {

  return (
    <div className="container-stats">
     <GamerCard fortniteStats={stats}/>
    </div>
  );
}

export default Stats;