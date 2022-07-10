import { Routes, Route} from 'react-router-dom';
import React, {useState}  from 'react';
import Home from './views/Home';
import Stats from './views/Stats';
import Onboard from './views/Onboard';
import './styles/App.css';
import GamerCard from './components/GamerCard';
import NavBar from './components/NavBar';
import About from './views/About';
import Faq from './views/Faq';
import Footer from './components/Footer';

function App() {
  const [stats, setStats]=useState("");

  return (
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/faq" element={<Faq />}/>
        <Route path="/stats" element={<Stats stats={stats}/>}/>
        <Route element={<GamerCard stats={stats}/>}/>
        <Route path="/onboard" element={<Onboard getStats={(stats)=>setStats(stats)} />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
