import React, { useState, useEffect } from "react";
import FlightDataService from "../../services/flight";
import { Link } from "react-router-dom";

const FlightDep = props => {


  const flight = props.location.state



  const [flights, setFlights] = useState([]);

  useEffect(() => {
    retrieveFlights();
  }, []);



  const retrieveFlights = () => {
    FlightDataService.findByParams({ "DepartureDate": flight.DepartureDate, "DepartureAirport": flight.DepartureAirport, "DestinationAirport":flight.DestinationAirport})
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
              <strong>Departure Time: </strong>{flight.DepartureTime}<br/>
              <strong>Arrival Time: </strong>{flight.ArrivalTime}<br/>
              <strong>Trip Duration: </strong>{flight.ArrivalTime}<br/>
              <strong>Cabin Classes: </strong>{flight.ArrivalTime}<br/>
              <strong>Baggage Allowance: </strong>{flight.ArrivalTime}<br/>
            </p>
            <div className="row">
            <Link to={{ pathname: "/flights/selectReturn", state: flight }} className="btn btn-primary">
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