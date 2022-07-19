import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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
      <Card sx={{ width: '100%', height: '40vh', borderRadius: '15px', backgroundColor: '#596173'}}>
          <CardMedia
            // component="img"
            // image={gameCard}
          />
      </Card>
     
      <div style={{marginTop: '20px', marginRight: '20px', marginLeft: '20px'}}>
        {/* <Navbar bg="light" variant="light" style={{borderRadius: '20px'}}>
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
        </Navbar> */}
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
