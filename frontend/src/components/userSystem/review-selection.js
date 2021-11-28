import React, { useState, useEffect } from "react";
import FlightDataService from "../../services/flight";
import { Link } from "react-router-dom";

const ReviewSelection = props => {

    const state = props.location.state

    const flight = state.flight
    const returnFlight=state.depFlight;
    return(
            <div>
            

        <div className="row"> 
        <h1>Departure Flight</h1>
            <div className="col-lg-4 pb-1">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{returnFlight.DepartureAirport} TO {returnFlight.DestinationAirport}</h5>
                  <p className="card-text">
                  <strong>FlightNumber: </strong>{returnFlight.FlightNumber}<br/>
             <strong>Date: </strong>{returnFlight.Date}<br/>
              <strong>Departure Time: </strong>{returnFlight.DepartureTime}<br/>
              <strong>Arrival Time: </strong>{returnFlight.ArrivalTime}<br/>
              <strong>Trip Duration: </strong>{returnFlight.ArrivalTime}<br/>
              <strong>Cabin Classes: </strong>{returnFlight.ArrivalTime}<br/>
              <strong>Baggage Allowance: </strong>{returnFlight.ArrivalTime}<br/>
                  </p>
                </div>
              </div>
            </div>
        
        </div>
        <div className="row">
        <h1>Return Flight</h1>
            <div className="col-lg-4 pb-1">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{flight.DepartureAirport} TO {flight.DestinationAirport}</h5>
                  <p className="card-text">
                  <strong>FlightNumber: </strong>{flight.FlightNumber}<br/>
             <strong>Date: </strong>{flight.Date}<br/>
              <strong>Departure Time: </strong>{flight.DepartureTime}<br/>
              <strong>Arrival Time: </strong>{flight.ArrivalTime}<br/>
              <strong>Trip Duration: </strong>{flight.ArrivalTime}<br/>
              <strong>Cabin Classes: </strong>{flight.ArrivalTime}<br/>
              <strong>Baggage Allowance: </strong>{flight.ArrivalTime}<br/>
                  </p>
                </div>
              </div>
            </div>
            <div>
                  <Link to={{ pathname: "/flights", state: {returnFlight, flight} }} className="btn btn-primary">
            Confirm
          </Link> &nbsp;
                  </div>
        
        </div>
            </div>
            
    );

}

export default ReviewSelection;