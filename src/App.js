import './App.css';
import { useState } from 'react';
import Axios from 'axios'


function App() {

  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const displayInfo = () => {
    console.log(fName + lName + username);
  }

  const addUser = () => {
    Axios.post('https://edufy-by-edufiers.herokuapp.com/create', {
      fName: fName, 
      lName: lName, 
      username: username, 
      password: password
    }).then(()=> {
      console.log("success");
    });
  };

  return (
    <div className="App">
      <div className="Info">

      <head>
        <title> Login Form </title>
      </head>
          <body>
            <div class = "loginbox">
              <h1>Login Here</h1>
              <form>

                <p>First Name:</p>

                <input type="text" 
                onChange={(event) => {
                  setfName(event.target.value)
                  }} 
                />

                <p>Last Name:</p>

                <input type="text" 
                onChange={(event) => {
                  setlName(event.target.value)
                  }} 
                />

                <p>username:</p>

                <input type="text" 
                onChange={(event) => {
                  setUsername(event.target.value)
                  }} 
                />

                <p>password:</p>

                <input type="text" 
                onChange={(event) => {
                  setPassword(event.target.value)
                  }} 
                />

              </form>

            </div>
          
            <div class = "loginbox">
              <h1>Login Here</h1>
              <form>

                <p>First Name:</p>

                <input type="text" 
                onChange={(event) => {
                  setfName(event.target.value)
                  }} 
                />

                <p>Last Name:</p>

                <input type="text" 
                onChange={(event) => {
                  setlName(event.target.value)
                  }} 
                />

                <p>username:</p>

                <input type="text" 
                onChange={(event) => {
                  setUsername(event.target.value)
                  }} 
                />

                <p>password:</p>

                <input type="password" 
                onChange={(event) => {
                  setPassword(event.target.value)
                  }} 
                />
              </form>

              <input type = "button" onClick={addUser} value="Login"></input>


              <a href ="#"> Lost your password? </a><br></br>

              <a href ="#"> Don't Have an account? </a><br></br>


            </div>
          </body>
      
{/*
        <label>First Name:</label>
        <input type="text" 
        onChange={(event) => {
          setfName(event.target.value)
          }} 
        />
        <label>Last Name:</label>
        <input type="text" 
        onChange={(event) => {
          setlName(event.target.value)
          }} 
        />
        <label>username:</label>
        <input type="text" 
        onChange={(event) => {
          setUsername(event.target.value)
          }} 
        />
        <label>password:</label>
        <input type="text" 
        onChange={(event) => {
          setPassword(event.target.value)
          }} 
        />
        <button onClick={addUser}>Submit</button>
        */}

      </div>
    </div>
  );
}

export default App;
