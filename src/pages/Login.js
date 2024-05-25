import React from "react";
import { UserAuth } from "../context/AuthContext";
import Form from "../components/Form";
import Lobby from './Lobby'

function Login() {
 

  const { user } = UserAuth();


  return (
    <>
    {
        user ? <Lobby/> : <Form/>
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
