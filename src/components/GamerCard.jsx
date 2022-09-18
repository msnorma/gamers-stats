import React from "react";
import Avatar from '@mui/material/Avatar';
import '../styles/Card.css';

function GamerCard(props){

  return (
    <div className="stats-card">
      <div className="card" style={{border: 'none'}}>
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-1">
              <Avatar alt="User" src="/static/images/avatar/1.jpg" />
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