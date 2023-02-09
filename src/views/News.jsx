import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ScrollableNewsFeed from '../components/ScrollableNewsFeed.jsx';
import homePicture1 from '../assets/homePicture1.png';
import "../styles/Card.css";
import "../styles/Home.css";

function News() {

  // const [selected, setSelected]=useState(false);

  // const navigate = useNavigate();

  // useEffect = () =>{
  //   //request to retrieve posts
  // }

  const handleOnclick = (e) => {
    e.preventDefault();

    // navigate("", data: id)
  }

  return (
    <div className="container-home">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <Card
          className="card-home"
          onClick={handleOnclick}>
          <CardMedia
            component="img"
            image={homePicture1}
            alt="news"
          />
        </Card>
        </Grid>
        <Grid item xs={6}>
        <Card className="card-home">
          <CardMedia
            component="img"
            image={homePicture1}
            alt="news"
          />
        </Card>
        </Grid>
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
    </Box>
    <ScrollableNewsFeed/>
    </div>
  );
}

export default News;
