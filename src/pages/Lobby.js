import React from 'react'
import { UserAuth } from '../context/AuthContext';

function Lobby() {
  const { user, logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      This is the page where we create rooms 
      <span>{user.displayName}</span>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default Lobby