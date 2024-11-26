import React from "react";
import Sample from "./sample";

const Payment=()=>{
    return(
        <div>
              <div>
                <Sample/>
            </div>
            <h1>This is payment page</h1>
            <ul>
                <li>If Online,show dropdown of payment gateways,set status booked</li>
                <li>If cash,just book ticket and keep status as pending</li>
            </ul>
        </div>
    )
}
export default Payment;