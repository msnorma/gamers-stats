import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import '../styles/App.css';

const ScrollableFeed = () => {

  return (
    <List sx={{ width: '100%', marginTop: '20px',bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start" sx={{padding: '20px'}}>
        <ListItemAvatar>
          <Avatar className="post-image" variant="square" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Fortnite Launch"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Battle Pass
              </Typography>
              {" — Some content over here about the launch"}
            </React.Fragment>
          }
        />
      
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );

}
export default ScrollableFeed;