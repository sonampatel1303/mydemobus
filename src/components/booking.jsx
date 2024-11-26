import React from "react";
import Sample from "./sample";

const Booking=()=>{
    return(
        <div>
              <div>
                <Sample/>
            </div>
            <h1>This is booking</h1>
            <ul>
                <li>
                    Completed Trips
                </li>
                <li>
                    Upcoming Trips
                </li>
                <li>
                    Cancelled Trips
                </li>
            </ul>
        </div>
    )
}
export default Booking;