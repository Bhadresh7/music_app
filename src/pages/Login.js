import React from "react";
import Form from "../components/Form";
import { UserAuth } from "../context/AuthContext";
import Lobby from "./Lobby";

function Login() {
  const{user}=UserAuth();
  return (

    <div>
      {!user ? <Form/>:<Lobby/>}
    </div>
  );
}

export default Login;
