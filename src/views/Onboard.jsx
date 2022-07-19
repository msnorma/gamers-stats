import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import avi from '../assets/black.png';

const Onboard = ({getStats}) => {

  const [name, setName]=useState("");
  const [accountType, setAccountType]=useState("");
  const navigate = useNavigate();

  const handleOnSubmit = e => {
    e.preventDefault()
    fetch(`https://fortnite-api.com/v2/stats/br/v2?name=${name}&accountType=${accountType}&timeWindow=season&image=none`,{
      method: 'GET',
      headers: new Headers({
        'Authorization': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    
    })
    .then(res => {res.json()})
    .then(data => {
      console.log(data);
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
    navigate('/stats')
      
  }
  
  return (
    <h1>form</h1>
    //   <Form onSubmit={handleOnSubmit} className="container-content">
    //   <Card className="m-auto my-5 p-2 centered border-0 shadow-sm mb-5 bg-white rounded" style={{ width: '18rem', borderRadius: '20px' }}>
    //     <Card.Img variant="top" src={avi} style={{ borderRadius: '20px' }} />
    //     <Card.Body>
    //       <Card.Text className="m-0" style={{ textAlign: 'center' }}>
    //         <b>What to join the leaderboard,</b> <small>sign up below!</small>
    //       </Card.Text>
    //       <Form.Control
    //         type="text"
    //         placeholder="Enter username"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //         className="mt-4"
    //         style={{ borderRadius: '12px' }} required/>
    //       <Form.Control
    //         type="text"
    //         placeholder="Enter account (epic/xbl/psn)"
    //         value={accountType}
    //         onChange={(e) => setAccountType(e.target.value)}
    //         className="mt-3"
    //         style={{ borderRadius: '12px' }} required/>
    //         <div className='text-center mt-3'>
    //           <Button className="m-0 border-0" type="submit" size="sm" style={{backgroundColor:'#D4254C'}}>Lets go</Button>
    //         </div>
    //     </Card.Body>
    //   </Card>
    // </Form>
  );
}

export default Onboard;