import React, { useState } from "react";
import { Link } from "react-router-dom";

const Booking = props => {





    return (
        <div className="row">
           <h1>Itinerary</h1><br/>
          <Link to={{ pathname: "/flights", state: {} }} className="btn btn-primary">
            Book another flight
          </Link>
          </div>
        
      );

};

export default Booking;