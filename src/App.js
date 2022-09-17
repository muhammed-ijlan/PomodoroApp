
import { useEffect, useState } from 'react';
import Info from './components/Info';
import Login from './components/Login';
import Pomodoro from './components/Pomodoro';
import { useSelector } from 'react-redux';

function App() {

  const {userData} = useSelector((state)=>state.user)
  console.log(userData);

  return (
    <div className="bg-indigo-800 h-screen" >
   {!userData && <Login />}
      {userData &&  <Info user={userData}/>}
     {userData && <Pomodoro />}
    </div>
  );
}

export default App;
