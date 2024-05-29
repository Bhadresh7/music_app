import React from "react";
import { UserAuth } from "../context/AuthContext";
import Form from "../components/Form";


function Login() {
 

  const { user } = UserAuth();


  return (
    <>
  
    
   
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
