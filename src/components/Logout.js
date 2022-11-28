import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlices';

function Logout() {
  const dispatch = useDispatch();
  const handleLogout = (e) =>{
    e.preventDefault();

 
    dispatch(logout());
  };
  
  return (
    <div>
        
        
        <h1> welcome  <span>yash</span></h1>
         <button onClick={(e) => handleLogout(e)}>logout</button>



    </div>
  )
}

export default Logout