import React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import '../styles/App.css';
import '../styles/Card.css';
import '../styles/Layout.css';
import '../styles/Typography.css';

const CardProfile=()=>{
  return(
    <div className="card-profile-container">
       <Card className="card-profile-dashboard">
          <Stack direction="row" spacing={2} sx={{paddingBottom: '25px'}}>
            <Avatar className="profile-picture" alt="User" src="/static/images/avatar/1.jpg" />
          </Stack>
          <h6 className="username-typography" gutterBottom>Username</h6>
            <Stack className="ranking-box" direction="row" spacing={4}>
              <Stack style={{justifyContent:'center'}} direction="column" spacing={1}>
                <Typography className="rankings-count-typography" variant="h6">2</Typography>
                <small className="rankings-typography" gutterBottom>Rank</small>
              </Stack>
              <Stack style={{justifyContent:'center'}} direction="column" spacing={1}>
                <Typography className="rankings-count-typography" variant="h6">2</Typography>
                <small className="rankings-typography" gutterBottom>Level</small>
              </Stack>
              <Stack style={{justifyContent:'center'}} direction="column" spacing={1}>
                <Typography className="rankings-count-typography" variant="h6">2</Typography>
                <small className="rankings-typography" gutterBottom>Wins</small>
              </Stack>
            </Stack>
            <h6 className="profile-descrption-typography" >
              Users about description. That has limited characters.
            </h6>
          <Divider style={{ marginTop:'20px', marginLeft:'10px', marginRight:'10px', borderColor: 'grey'}}/>
          <CardActions>
            <Typography style={{margin: 'auto', color:'#8F8F8F'}} variant="caption" display="block" gutterBottom>
              Joined September 2022
            </Typography>
          </CardActions>
        </Card>
    </div>
  );
}

export default CardProfile;