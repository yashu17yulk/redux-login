import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import { selectUser } from './features/userSlices';

 

const App = () => {
  const user = useSelector(selectUser);
    return (
      <div>
       {user  ? <Logout/> :   <Login />} 
      </div>
    );
  
};

export default App;
