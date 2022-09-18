import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import controller from '../assets/xbox-controller.png';
import '../styles/App.css';
import '../styles/Button.css';
import '../styles/Typography.css';

const RegisterForm = ({setLogin}) => {

  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const navigate = useNavigate();

  function handleOnSubmit(e){
    e.preventDefault();
    console.log("call register endpoint db")
    /* fetch(`the url request to register`,{
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    
    })
    .then(response => response.json())
    .then(data => {
      
    })
    .catch(error => console.error("Error:", error)); */
    setLogin(true);
    navigate('/gamers-dashboard')
  }

  const handleLogin = () => {
    setLogin(true)
  }
  
  return (
    <div className="container-signup">
      <Grid container spacing={2}>
        <Grid item xs={6} className="image-container-form">
        <img
          className="image-form"
          src={controller}
          alt="xbox controller"
          style={{width:'100%'}}
        />
        </Grid>
        <Grid item xs={6}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        height: 480,
        width: 450,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 1,
        textAlign: 'center',
        float: 'right',
        marginTop: 6
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{margin:'auto', width: '80%'}}>
        <h5 float="left">Lorem ipsum dolor sit, adipiscing.</h5>
        <small className="login-typography" gutterBottom>Already a member?</small>
        <a href={handleLogin} color='blue'>Login</a>
        <TextField
          label="Profile name"
          width="100%"
          variant="standard"   
          sx={{width: '100%', marginTop: '10px',outline: 'none', input: {color:'#d6d6d6'}}}    
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email address"
          width="100%"
          variant="standard"   
          sx={{width: '100%', marginTop: '10px'}}      
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="standard"
          sx={{width: '100%', marginTop: '10px'}}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="button__form" ariant="contained" type="submit" onClick={handleOnSubmit} >Sign up</Button>
        <Typography variant="caption" display="block" sx={{marginTop: '15px', textAlign:'left', color:'#A4ADC5'}}>By sigining up you are agreeing to our Terms and Conditions</Typography>
      </div>
    </Box>
    </Grid>
      </Grid>
    </div>
  );
}

export default RegisterForm;