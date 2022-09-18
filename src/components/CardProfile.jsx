import React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
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
          <Stack direction="row" spacing={2}>
            <Avatar className="profile-picture" alt="User" src="/static/images/avatar/1.jpg" />
          </Stack>
          <CardContent className="profile-description">
          <h6 gutterBottom>Username</h6>
            <Stack style={{justifyContent:'center', marginTop: '20px', marginBottom:'30px'}} direction="row" spacing={4}>
              <Stack style={{justifyContent:'center'}} direction="column" spacing={1}>
                <Typography variant="h6">2</Typography>
                <small gutterBottom>Ranking</small>
              </Stack>
              <Stack style={{justifyContent:'center'}} direction="column" spacing={1}>
                <Typography variant="h6">2</Typography>
                <small gutterBottom>Level</small>
              </Stack>
              <Stack style={{justifyContent:'center'}} direction="column" spacing={1}>
                <Typography variant="h6">2</Typography>
                <small gutterBottom>Wins</small>
              </Stack>
            </Stack>
            <small className="profile-descrption-typography" >
              Users about description.
            </small>
            <Divider style={{ marginTop:'20px'}}/>
          </CardContent>
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