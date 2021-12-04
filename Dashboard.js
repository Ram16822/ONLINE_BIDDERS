import React from 'react';
import {NavLink } from 'react-router-dom';
import image from'./prj1.png';

function Dashboard(props) {
 

  const handleLogout = () => {    
    props.history.push('/login');
  }
 
  return (
    <div>
      Welcome User!
      <br></br>
      <br></br>
      <button>
        <img src={image} />
      </button>
      <br></br>
      java projects
      <br></br>
      <br></br>
      <br></br>
      
      <br></br>
      <br></br>
      <br></br>
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Dashboard;