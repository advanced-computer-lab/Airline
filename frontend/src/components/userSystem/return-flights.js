import React, { useState, useEffect } from "react";
import FlightDataService from "../../services/flight";
import { Link } from "react-router-dom";

const FlightReturn = props => {

    const state = props.location.state

    const flight = state.flight

    const cabin = state.cabin

    const noseats = state.noseats

    const noadults = state.noadults

    const depdate = flight.Date

    const [flights, setFlights] = useState([]);


    const initialFlightState = {
      Date: state.returnDate, 
      DepartureAirport: flight.DestinationAirport, 
      DestinationAirport: flight.DepartureAirport,
      CabinClass:cabin.replace(/\s+/g, ''),
      Seats: noseats
    };

    useEffect(() => {
        retrieveFlights();
      }, []);


  const retrieveFlights = () => {
    FlightDataService.findByParams(initialFlightState)
      .then(response => {
        console.log(response.data);
        setFlights(response.data.flights);
        
      })
      .catch(e => {
        console.log(e);
      });
  };


  retrieveFlights();

  const depFlight = state.flight

  return (
    <div>
      
          
        
      <div className="row">
        {flights.map((flight) => {
         
         if (flight.Date>depdate){
          return (
            <div >
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
              <strong>Adult Ticket Price: </strong>{"$"+flight.Price}<br/>
              <strong>Child Ticket Price: </strong>{"$"+(flight.Price/2)}<br/>
                  </p>
                  <div className="row">
                  <Link to={{ pathname: "/flights/ReviewSelection", state: {depFlight, flight, cabin, noseats, noadults} }} className="btn btn-primary">
            Select
          </Link> &nbsp;
                  </div>
                </div>
              </div>
              <br/>
            </div>
          );
}})}


      </div>
    </div>
  );
};

export default FlightReturn;