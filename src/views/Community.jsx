import React, {useState} from 'react';
import {Card, Navbar, Container, Nav} from 'react-bootstrap';
import gameImage from "../assets/fortnite-banner.jpeg";
import Challenge from "./Challenges";
import Filter from "../components/List";
import Tournaments from "./Tournaments";
import Stats from "./Stats";
import "../styles/Community.css";

function Community({stats}) {

  const [state, setState]=useState("");

   const handleOnclick = (value) => {
    setState(value);
  }

  return (
    <div className="container-content">
      <Card className="text-white">
        <Card.Img className="card-image" src={gameImage} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title></Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Card.Text></Card.Text>
        </Card.ImgOverlay>
      </Card>

      <div style={{marginTop: '20px', marginRight: '20px', marginLeft: '20px'}}>
        <Navbar bg="light" variant="light" style={{borderRadius: '20px'}}>
          <Container>
            <Nav className="" style={{margin: 'auto'}}>
            {
              Filter.map((item, index)=> {
              return (
                <Nav.Link key={index} className="nav-item" onClick={() => handleOnclick(item.name)} value={item.name}>
                  <span>{item.name}</span>
                </Nav.Link>
              );})
            }
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div>
        {state === 'Challenges' && <Challenge/>}
        {state === 'Stats' && <Stats stats={stats}/>}
        {state === 'Tournaments' && <Tournaments/>}
      </div>
    </div>
  );
}

export default Community;
