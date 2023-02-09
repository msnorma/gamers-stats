import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import controller from '../assets/xbox-controller.png';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import '../styles/App.css';
import '../styles/Button.css';
import '../styles/Typography.css';

const RegisterForm = ({setLogin}) => {

  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [loggedIn, setLoggedIn]=useState(false);

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
    navigate('/dashboard')
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    console.log("logged in")
  }

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif'
      ].join(",")
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            ".MuiOutlinedInput-notchedOutline":{
              borderColor: "transparent",
              borderRadius: 10,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#eeaeca",
              borderRadius: 10
            },
            "&.Mui-focused fieldset": {

                borderColor: "#eeaeca !important",
                borderRadius: 10
              }
          }
        }
      }
    }
  });
  
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
        height: 520,
        width: 450,
        backgroundColor: 'transparent',
        borderRadius: 5,
        padding: 1,
        textAlign: 'center',
        float: 'right',
        marginTop: 15,
        border: '1px solid grey',
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{margin:'auto', width: '80%'}}>
        <ThemeProvider theme={theme}>
          {loggedIn === true ?
            <Typography className="__form-heading" variant="h5" gutterBottom component="div" align='left'>
              Log In
            </Typography>
            :
            <div>            
              <Typography className="__form-heading" variant="h5" gutterBottom component="div" align='left'>
                Sign Up
              </Typography>
              <Typography variant="caption" gutterBottom component="div" align='left' marginTop={1} color={'#8F8F8F'}>
                Already a member?<Link onClick={handleLogin}>Login</Link>
              </Typography>
            </div>
          }
          { loggedIn === false &&(
              <TextField
                className="__form-inputs"
                label="Profile name"
                width="100%"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
          )}
          <TextField
            className="__form-inputs-2"
            label="Email address"
            width="100%"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="__form-inputs-2"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          { loggedIn === true ?
            <Button className="button__form" ariant="contained" type="submit" onClick={handleOnSubmit} >Log in</Button>
            :
            <Button className="button__form"  ariant="contained" type="submit" onClick={handleOnSubmit} >Sign up</Button>
          }
          <Typography variant="caption" display="block" sx={{marginTop: '15px', textAlign:'left', color:'#A4ADC5'}}>By sigining up you are agreeing to our Terms and Conditions</Typography>
        </ThemeProvider>
      </div>
    </Box>
    </Grid>
      </Grid>
    </div>
  );
}

export default RegisterForm;