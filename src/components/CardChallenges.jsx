import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

import picture from '../assets/homePicture1.png';

export default function CardChallenges() {

  return (
    <Box sx={{ flexGrow: 1, marginTop: '25px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={picture}
                  alt="picture description here"
                />
              </CardActionArea>
              </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}