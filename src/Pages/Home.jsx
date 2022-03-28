
import React from "react";
import studying from './images/studying.jpg';

import "./styles.css";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-left my-5">
          <img alt="studying" className="photo" src={studying} />
          <h1 class="font-weight-light">Welcome to Edufy!</h1>
          <br></br>
  
          </div>
        </div>
      
    </div>
  );
}

export default Home;