import React, { useEffect } from "react";
import '../App.css';
import { useState } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Authenticate() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [loginStatus, setLoginStatus] = useState("");
   const navigate = useNavigate();

   Axios.defaults.withCredentials = true; // Allows cookie values to be set from a different domain

   const authUser = () => {
      Axios.post('https://edufy-by-edufiers.herokuapp.com/auth', {
         username: username,
         password: password
      }).then((response) => {
         if (response.data.message) {
            setLoginStatus(response.data.message)
         } else {
            setLoginStatus(response.data[0].username)
            navigate('/dashboard')
         }
         console.log(response.data);
      });
   };

   useEffect(() => { // Runs every time we refresh our page
      Axios.get("https://edufy-by-edufiers.herokuapp.com/auth").then((response) => {
         if (response.data.loggedIn === true) {
            setLoginStatus(response.data.user[0].username);
            navigate('/dashboard/')
         }

      })
   }, [])

   return (
      <div className="App">
         <div className="Info">

            <head>
               <title> Login Form </title>
            </head>
            <body>
               <div class="loginbox">

                  <h1>Login</h1>
                  <form>
                     <p>Username:</p>

                     <input type="text"
                        onChange={(event) => {
                           setUsername(event.target.value)
                        }}
                     />

                     <p>Password:</p>

                     <input type="Password"
                        onChange={(event) => {
                           setPassword(event.target.value)
                        }}
                     />

                  <br></br>
                  <a href ="#"> Lost your password? </a><br></br>
                  <a href ="/Signup"> Don't Have an account? </a><br></br>
                  <br></br>
                     <input type="button" onClick={authUser} name="" value="Log In"></input>

                  </form>
               </div>
            </body>

         </div>
         <h2>{loginStatus}</h2>
      </div>
   );
}

export default Authenticate;