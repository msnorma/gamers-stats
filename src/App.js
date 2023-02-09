import { Routes, Route} from 'react-router-dom';
import React, {useState}  from 'react';
import Onboard from './api/Onboard';
import GamerCard from './components/GamerCard';
import Nav from './components/Navbar';
import Faq from './views/Faq';
import Footer from './components/Footer';
import UserNotFound from './views/UserNorFound';
import Community from './views/Community';
import RegisterForm from './views/Form';
import './styles/App.css';
import Dashboard from './views/Dashboard';

function App() {
  const [stats, setStats]=useState("");
  // const [isAuth, setAuth] = useState(false);
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <div className="app-container">
    {isLoggedIn ? 
      <div>
        <Nav setLogin={(isLoggedIn) => setLogin(isLoggedIn)}/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/community" element={<Community stats={stats}/>}/>
          <Route path="/faq" element={<Faq />}/>
          <Route path="/notFound" element={<UserNotFound />}/>
          <Route element={<GamerCard stats={stats}/>}/>
          <Route path="/onboard" element={<Onboard getStats={(stats)=>setStats(stats)}/>}/>
        </Routes>
        <Footer/>
      </div>
      :
       <div>
       <Routes>
        <Route path="/register" element={<RegisterForm setLogin={(isLoggedIn) => setLogin(isLoggedIn)} />} />
      </Routes>
      <Footer/>
       </div>
    }
    </div>
    
  );
}

export default App;
