import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Onboard = ({getStats}) => {

  const [name, setName]=useState("");
  const [accountType, setAccountType]=useState("");
  const [timeWindow, setTimeWindow]=useState("");
  const [image, setImage]=useState("");
  const [userStats, setUserStats]=useState({});
  const navigate = useNavigate();

  const handleOnSubmit = e => {
    e.preventDefault()
    fetch(`https://fortnite-api.com/v2/stats/br/v2?name=${name}&accountType=${accountType}&timeWindow=${timeWindow}&image=${image}`,{
      method: 'GET',
      headers: new Headers({
        'Authorization': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const stats = {
        name: data.data.account.name,
        stats: data.data.stats.all
      }
      setUserStats(stats);
      getStats(stats);
      console.log(stats)

      navigate('/stats')
          
    })
      
  }
  
  return (
    <div className="wrapper">
     <h1>Onboard User Page</h1>
     <form onSubmit={handleOnSubmit}>
      <input
        placeholder='Enter username...' 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        placeholder='Enter accountType...'
        type="text"
        value={accountType}
        onChange={(e) => setAccountType(e.target.value)}
      />
      <input 
        placeholder='Enter timeWindow...'
        type="text"
        value={timeWindow}
        onChange={(e) => setTimeWindow(e.target.value)}
      />
      <input
        placeholder='Enter image...'
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button className="button-submit" type="submit" >Submit</button>
     </form>
    </div>
  );
}

export default Onboard;
