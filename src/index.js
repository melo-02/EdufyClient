import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Signup,
  About,
  Classes,
  Authenticate,
  Dashboard,
  Algebra,
  Science,
  Grammar

} from "./Pages";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/authenticate" element={<Authenticate />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/algebra" element={<Algebra />} />
      <Route path="/science" element={<Science />} />
      <Route path="/grammar" element={<Grammar />} />
    </Routes>
  
  </Router>,
 
  document.getElementById("root")
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
