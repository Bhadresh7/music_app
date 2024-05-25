import React from "react";
import { UserAuth } from "../context/AuthContext";
import Form from "../components/Form";
// import Lobby from './Lobby'
import Username from './Username'

function Login() {
 

  const { user } = UserAuth();


  return (
    <>
    {
        user ? <Username/> : <Form/>
    }
    
   
          {/* {user ? (
              <p>
              {user.displayName}
              <button onClick={handleLogOut}>Logout</button>
            </p>
          ) : (
            <GoogleButton onClick={handleGoogleSignIn} />
        )} */}
        </>
  );
}

export default Login;
