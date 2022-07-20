import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import '../styles/Card.css';

const Onboard = ({getStats}) => {

  const [name, setName]=useState("");
  const [accountType, setAccountType]=useState("");
  const navigate = useNavigate();

  function handleOnSubmit(e){
    e.preventDefault();

    fetch(`https://fortnite-api.com/v2/stats/br/v2?name=${name}&accountType=${accountType}&timeWindow=season&image=none`,{
      method: 'GET',
      headers: new Headers({
        'Authorization': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json'
      })
    
    })
    .then(response => response.json())
    .then(data => {
      const fortniteStats = {
          name: data.data.account.name,
          stats: data.data.stats.all,
          image: data.data.image,
          gameLevel: data.data.battlePass.level,
          kills: data.data.stats.all.overall.kills,
          wins: data.data.stats.all.overall.wins
        }
        getStats(fortniteStats);
      })
    .catch(error => console.error("Error:", error));
    navigate('/stats')
  }
  
  return (
    <div className="container-signup">
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        height: 500,
        width: 350,
        backgroundColor: 'aliceblue',
        borderRadius: 5,
        padding: 1,
        textAlign: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{margin:'auto'}}>
        <Typography variant="h5" gutterBottom component="div" align='left' marginTop={5}>
          Lorem ipsum dolor sit, adipiscing.
        </Typography>
        <Typography variant="caption" gutterBottom component="div" align='left' marginTop={1} color={'#8F8F8F'}>
          Lorem ipsum dolor sit, adipiscing.
        </Typography>
        <TextField 
          label="Enter username"
          InputLabelProps={{style: {fontSize: '.8rem'}}}
          InputProps={{style: {borderBottom: '#A4ADC5'}}}
          width="100%"
          variant="standard"   
          sx={{width: '100%', marginTop: '30px'}}      
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField 
          label="Enter account (epic/xbl/psn)"
          InputLabelProps={{style: {fontSize: '.8rem'}}}
          variant="standard"
          sx={{width: '100%', marginTop: '30px'}}
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
        />
        <Button sx={{borderRadius: '10px', width: '100%', marginTop: '50px', color:'#F5F5F5', padding:'12px', backgroundColor:'#17A4E3'}} ariant="contained" type="submit" onClick={handleOnSubmit} >Onboard</Button>
        <Typography variant="caption" display="block" sx={{marginTop: '15px', textAlign:'left', color:'#A4ADC5'}}>By sigining up you are agreeing to out Terms and Conditions</Typography>
      </div>
    </Box>
    </div>
  );
}

export default Onboard;