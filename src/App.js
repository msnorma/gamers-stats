import { Routes, Route} from 'react-router-dom';
import React, {useState}  from 'react';
import Home from './views/Home';
import Stats from './views/Stats';
import Onboard from './views/Onboard';
import GamerCard from './components/GamerCard';
import NavBar from './components/NavBar';
import Faq from './views/Faq';
import Footer from './components/Footer';
import UserNotFound from './views/UserNorFound';
import Community from './views/Community';
import News from './views/News';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './styles/App.css';

function App() {
  const [stats, setStats]=useState("");

  return (
    <div className="app">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NavBar/>
        </Grid>
        <Grid item xs={12}>
          <Box style={{ margin: '0px 50px 50px 50px',backgroundColor: '#23272E',height: '80vh'}}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/community" element={<Community stats={stats}/>}/>
            <Route path="/news" element={<News />}/>
            <Route path="/faq" element={<Faq />}/>
            <Route path="/notFound" element={<UserNotFound />}/>
            <Route path="/stats" element={<Stats stats={stats}/>}/>
            <Route element={<GamerCard stats={stats}/>}/>
            <Route path="/onboard" element={<Onboard getStats={(stats)=>setStats(stats)}/>}/>
          </Routes>
          </Box>
          <Footer/>
        </Grid>
      </Grid>
    </div>
    
  );
}

export default App;
