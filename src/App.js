import { Routes, Route} from 'react-router-dom';
import React, {useState}  from 'react';
import Home from './views/Home';
import Onboard from './views/Onboard';
import GamerCard from './components/GamerCard';
import NavBar from './components/NavBar';
import Faq from './views/Faq';
import Footer from './components/Footer';
import UserNotFound from './views/UserNorFound';
import Community from './views/Community';
import News from './views/News';
import RegisterForm from './views/RegisterForm';
import './styles/App.css';
import DashboardNav from './components/DashboardNav';
import Dashboard from './views/Dashboard';

function App() {
  const [stats, setStats]=useState("");
  // const [isAuth, setAuth] = useState(false);
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <div className="app-container">
    {isLoggedIn ? 
      <div>
        <NavBar setLogin={(isLoggedIn) => setLogin(isLoggedIn)}/>
        <Routes>
          <Route path="/gamers-dashboard" element={<Dashboard/>}/>
          <Route path="/community" element={<Community stats={stats}/>}/>
          <Route path="/news" element={<News />}/>
          <Route path="/faq" element={<Faq />}/>
          <Route path="/notFound" element={<UserNotFound />}/>
          <Route element={<GamerCard stats={stats}/>}/>
          <Route path="/onboard" element={<Onboard getStats={(stats)=>setStats(stats)}/>}/>
        </Routes>
        <Footer/>
      </div>
      :
       <div>
       <DashboardNav />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<Faq />}/>
          <Route path="/register" element={<RegisterForm setLogin={(isLoggedIn) => setLogin(isLoggedIn)} />} />
        </Routes>
       </div>
    }
    </div>
    
  );
}

export default App;
