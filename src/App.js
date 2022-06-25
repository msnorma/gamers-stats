import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './views/Home';
import Stats from './views/Stats';
import './styles/App.css';
import Onboard from './views/Onboard';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/stats" element={<Stats />}/>
          <Route path="/onboard" element={<Onboard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
