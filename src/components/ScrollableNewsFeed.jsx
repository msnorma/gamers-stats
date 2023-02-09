import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import '../styles/App.css';

const ScrollableNewsFeed = () => {

  return (
    <List sx={{ width: '100%', marginTop: '20px',bgcolor: 'transparent' }}>
      <Divider sx={{backgroundColor:'#30355F'}} variant="inset" component="li" />
      <ListItem alignItems="flex-start" sx={{padding: '20px'}}>
        <ListItemAvatar>
          <Avatar className="post-image" variant="square" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body1"
                color="#ccc"
              >
                Platform Launch
              </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#cccccc"
              >
                Battle Pass
              </Typography>
            </React.Fragment>
          }
        />
      
      </ListItem>
      <Divider sx={{backgroundColor:'#30355F'}} variant="inset" component="li" />
    </List>
  );

}
export default ScrollableNewsFeed;