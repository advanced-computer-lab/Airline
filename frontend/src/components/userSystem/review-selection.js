import React, { useState, useEffect } from "react";
import FlightDataService from "../../services/flight";
import { Link } from "react-router-dom";

const ReviewSelection = props => {

    const state = props.location.state

    const flight = state.flight
    const returnFlight=state.depFlight
    const cabin = state.cabin
    const noseats = state.noseats

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
              <strong>Trip Duration: </strong>{returnFlight.TripDuration}<br/>
              <strong>Cabin Class: </strong>{cabin}<br/>
              <strong>Baggage Allowance: </strong>{returnFlight.BaggageAllowance}<br/>
              <strong>Price: </strong>{"$"+returnFlight.Price}<br/>
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
              <strong>Trip Duration: </strong>{flight.TripDuration}<br/>
              <strong>Cabin Class: </strong>{cabin}<br/>
              <strong>Baggage Allowance: </strong>{flight.BaggageAllowance}<br/>
              <strong>Price: </strong>{"$"+flight.Price}<br/>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
            <strong>Total Travellers: {noseats}</strong><br/>
            <strong>Total Price: ${noseats*(flight.Price+returnFlight.Price)}</strong><br/>
            </div>
            <div>
                  <Link to={{ pathname: "/flights/ChooseDepSeats", state: {returnFlight, flight, noseats, cabin} }} className="btn btn-primary">
            Pick Seats
          </Link> &nbsp;
                  </div>
        
        </div>
            </div>
            
    );

}

export default ReviewSelection;