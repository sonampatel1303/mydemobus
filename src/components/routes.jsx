import React from "react";
import Sample from "./sample";

const BusRoutes=()=>{
    return(
        <div>
            <div>
                <Sample/>
            </div>
            <h1>This is routes page</h1>
           <ul>
            <li>Enter Source</li>
            <li>Enter Destination</li>
            <li>Select Date</li>
            <p>On choosing a bus,open a booking form,and then redirect to payment form</p>
           </ul>
        </div>
    )
}
export default BusRoutes;