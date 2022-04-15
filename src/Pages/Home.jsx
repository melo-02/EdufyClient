
import React from "react";
import studying from './images/studying.jpg';

import "./styles.css";

function Home() {
  return (
    <div className="home">
      <div class="container">

        <div class="flex-container">

          <div class="flex-child magenta">
            <img alt="studying" className="photo" src={studying} />

          </div>

          <div class="flex-child green">
            <h1 class="homepagetitle">Welcome to Edufy!</h1>
            <h1 class="homepagebase">Edufy is a quiz-based learning platform designed for students looking to self-study. </h1>
            <h1 class="homepagebase">Sign up and choose any of our various classes to get started! </h1>
          </div>
        </div>

        <div class="flex-container">

          <div class="flex-child">
             
          </div>

          <div class="flex-child ">
            <div class="center ">
              <a href = '/signup'> 

              <div class="buttondiff" id="button-3">
                <div id="circle"></div>
                  <a class="text-dark">Get Started Now!</a>
                 </div>
               </a>
               </div>
             


       </div>


           </div>
        </div>
    </div>
  );
}

export default Home;