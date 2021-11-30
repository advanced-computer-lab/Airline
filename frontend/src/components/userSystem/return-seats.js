import React, { useState } from "react";
import { Link } from "react-router-dom";

const RetSeats = props => {

    const state = props.location.state

    const noseats = state.noseats




    return (
        <div className="row">
          <h1>Select Return Seats for {noseats} Travellers</h1><br/>
          <Link to={{ pathname: "/flights/Booking", state: {} }} className="btn btn-primary">
            SELECT
          </Link>
          </div>
        
      );

};

export default RetSeats;