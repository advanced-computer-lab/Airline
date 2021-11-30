import React, { useState } from "react";
import { Link } from "react-router-dom";

const DepSeats = props => {

    const state = props.location.state

    const noseats = state.noseats





    return (
        <div className="row">
          <h1>Select Departure Seats for {noseats} Travellers</h1><br/>
           
          <Link to={{ pathname: "/flights/ChooseRetSeats", state: {noseats} }} className="btn btn-primary">
            SELECT
          </Link>
          </div>
        
      );
};

export default DepSeats;