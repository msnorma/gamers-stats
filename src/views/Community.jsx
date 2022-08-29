import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CardProfile from '../components/CardProfile';
import CardBadge from '../components/CardBadge';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles/Card.css';
import '../styles/App.css';

function Community({stats}) {

  // const [state, setState]=useState('0');

  //  const handleOnclick = (e, value) => {
  //   e.preventDefault();
  //   setState(value);
  //   console.log(state)
  // }
  

  return (
    <div className="container-community">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <CardProfile/>
          <CardBadge/>
        </Grid>
        <Grid className="col-2-dashboard" item xs={9}>
          <div className="row-card-catergories">
            <Card className="card-categories-community">
              <CardActionArea disableRipple>
                <CardMedia
                  className="card-img-home"
                  component="img"
                  image={{}}
                  alt="home"
                />
              </CardActionArea>
            </Card>
            <Card className="card-categories-community">
              <CardActionArea disableRipple>
                <CardMedia
                  className="card-img-home"
                  component="img"
                  image={{}}
                  alt="home"
                />
              </CardActionArea>
            </Card>
            <Card className="card-categories-community">
              <CardActionArea disableRipple>
                <CardMedia
                  className="card-img-home"
                  component="img"
                  image={{}}
                  alt="home"
                />
              </CardActionArea>
            </Card>
          </div>
          <Stack className="community-button-toggle-group" spacing={2} direction="row">
          <Button className="btn-community" variant="outlined" color="secondary" size="small" disableRipple>
          Tournaments
          </Button>
          <Button className="btn-community" variant="outlined" color="secondary" size="medium" disableRipple>
          Challenges
          </Button>
          </Stack>
          <div className="row-card-catergories">
            <Card className="card-tournaments-community">
              <CardActionArea disableRipple>
                <CardMedia
                  className="card-img-home"
                  component="img"
                  image={{}}
                  alt="home"
                />
              </CardActionArea>
            </Card>
          </div>
        </Grid>

      </Grid>
    </div>
  );
}

export default Community;
