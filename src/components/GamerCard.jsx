import React from "react";
import '../styles/Stats.css';
import avi from '../assets/black.png';

function GamerCard(props){

  return (
    <div className="stats-card">
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-1">
              <img src={avi} alt="anime" className="profile-image rounded-circle"/>
            </div>
            <div className="col-5">
              <h4 className="card-text">{props.fortniteStats.name}</h4>
            </div>
            <div className="col-2">
              <h4 className="card-text">{props.fortniteStats.kills}</h4>
            </div>
            <div className="col-2">
              <h4 className="card-text">{props.fortniteStats.wins}</h4>
            </div>
            <div className="col-2">
              <h4 className="card-text">{props.fortniteStats.gameLevel}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default GamerCard;