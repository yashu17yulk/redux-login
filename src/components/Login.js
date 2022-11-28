import React, { useState } from "react";
import { login } from "../features/userSlices"
import { useDispatch } from "react-redux";
import "./Login.css"

function Login ()  {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const dispatch = useDispatch();



  const handleSubmit = (e)=> {
    e.preventDefault();
 
    dispatch(
      login({
    name:name,
    email:email,
    password:password,
    loggedIn: true,
  })
  );
  };

  return (
    <div className="login">
      <form className="login__form"
        onSubmit={(e) => handleSubmit(e)}>
        <h1>login here</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="sumbit" className="submit_btn">
          submit
        </button>
      </form>
    </div>
  );
}

export default Login;
