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


  const depFlight = state.flight


  const noFlights = () => {

    if (flights.length<=0) return true; return false;
    


  }

  const criteria = () => {

    let string =""

    if (state.returnDate!="") string += `  Date: ${state.returnDate} //`
    if (flight.DestinationAirport!="") string += `     DepartureAirport: ${flight.DestinationAirport} //`
    if (flight.DepartureAirport!="") string += `      DestinationAirport: ${flight.DepartureAirport} //`
    if (cabin!="") string += `    Cabin Class: ${cabin} //`
    if (noseats!=0) string += `     Seats: ${noseats}`

    return string

  }

  return (
    <div>
      
      <div className="row">
          <h1>Available Return Flights</h1><br/>
          <strong>{criteria()}</strong>
          
          </div>





      {noFlights() && ( <strong>Sorry! No Flights Match Your Search Criteria</strong>)} 
          
        
      <div className="row">
        {flights.map((flight) => {
         
         if (flight.Date<depdate){ setFlights(flights.filter((fl)=>fl._id!==flight._id));}
          else{
          return (
            <div >
              <div className="card" style={{border : "1px solid #111111"}}>
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