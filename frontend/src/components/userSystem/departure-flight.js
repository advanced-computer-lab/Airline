import React, { useState, useEffect } from "react";
import FlightDataService from "../../services/flight";
import { Link } from "react-router-dom";

const FlightDep = props => {


  const flight = props.location.state

  const returnDate = flight.ReturnDate

  const cabin = flight.CabinClass
  


  const [flights, setFlights] = useState([]);

  useEffect(() => {
    retrieveFlights();
  }, []);



  const retrieveFlights = () => {
    const noseats = parseInt(flight.NumberOfAdults) + parseInt(flight.NumberOfChildren)
    const cclass = flight.CabinClass.replace(/\s+/g, '')
    FlightDataService.findByParams({ "DepartureDate": flight.DepartureDate, "DepartureAirport": flight.DepartureAirport, "DestinationAirport":flight.DestinationAirport, /*"CabinClass":cclass,*/ "Seats": noseats})
      .then(response => {
        console.log(response.data);
        setFlights(response.data.flights);
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  retrieveFlights();


  return(

    <div>

  {flights.map((flight) => {
    return (
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
            <div className="row">
            <Link to={{ pathname: "/flights/selectReturn", state: {flight, returnDate, cabin} }} className="btn btn-primary">
            Select
          </Link> &nbsp;
            </div>
          </div>
        </div>
      </div>
    );
  })}
  </div>
  
  );
};
  export default FlightDep;