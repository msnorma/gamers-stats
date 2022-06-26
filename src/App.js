import { Routes, Route} from 'react-router-dom';
import React, {useState}  from 'react';
import Home from './views/Home';
import Stats from './views/Stats';
import Onboard from './views/Onboard';
import './styles/App.css';

function App() {
  const [stats, setStats]=useState("");

  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/stats" element={<Stats stats={stats}/>}/>
          <Route path="/onboard" element={<Onboard getStats={(stats)=>setStats(stats)} />}/>
        </Routes>
    </div>
  );
}

export default App;
