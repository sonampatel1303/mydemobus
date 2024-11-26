import React from "react";
import bus1 from '../images/bus1.jpg';
import './home.css';
import RegisterationFormWithDynamicFields from "./loginform";
 // Ensure the correct path to your CSS file

const Home = () => {
  return (
    <div className="background-container">
    <h1 className="welcome-message">Welcome to our webpage</h1>
    <div className="form-container">
      <RegisterationFormWithDynamicFields />
    </div>
  </div>
  );
};

export default Home;
