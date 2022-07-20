import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import "../styles/Card.css";

function News() {
  return (
    <div className="container-news">
    <Typography variant="h5" gutterBottom component="div" align='left' marginTop={5} color={'#F5F5F5'}>
      News
    </Typography>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <Card className="news-card">
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card className="news-card">
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </Card>
        </Grid>
        <Grid item xs={12}>
          <List sx={{ width: '100%', bgcolor: '#1C1C21', marginTop: '50px' }}>
            <Divider variant="inset" component="li" sx={{ bgcolor: "#F5F5F5" }}/>
            <ListItem alignItems="flex-start" >
              <AddOutlinedIcon sx={{ color: "#F5F5F5", margin: 'auto'}} />
              <ListItemText sx={{ color: "#F5F5F5", padding: '20px' }}
                primary="Launch coming soon!"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="#F5F5F5"
                    >
                      Fortnite
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" sx={{ bgcolor: "#F5F5F5" }}/>
          </List>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default News;
