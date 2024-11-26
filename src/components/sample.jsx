import React from "react";
import { Link } from "react-router-dom";
import './sample.css';
const Sample = () => {
    return (
      <div className="sample-page">
       <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">HomePage</Link>
                </li>
                <li>
                    <Link to="/payment">Payments</Link>
                </li>
                <li>
                    <Link to="/booking">Your Booking</Link>
                </li>
                <li>
                    <Link to="/routes">Routes</Link>
                </li>
            </ul>
        </nav>
       </header>
       <h1>Hi, Welcome to the Page</h1>
       <p>Here you can manage your bookings, payments, and routes.</p>
      </div>
    );
  };
  
  export default Sample;