import React, { useState, useEffect } from "react";
import FlightDataService from "../../services/flight";
import { Link } from "react-router-dom";

const FlightDep = props => {


  const flight = props.location.state

  const returnDate = flight.ReturnDate

  const cabin = flight.CabinClass
  
  const noseats = parseInt(flight.NumberOfAdults) + parseInt(flight.NumberOfChildren)

  const noadults = parseInt(flight.NumberOfAdults)

  const [flights, setFlights] = useState([]);

  useEffect(() => {
    retrieveFlights();
  }, []);



  const retrieveFlights = () => {
    
    const cclass = cabin.replace(/\s+/g, '')
    FlightDataService.findByParams({ "Date": flight.DepartureDate, "DepartureAirport": flight.DepartureAirport, "DestinationAirport":flight.DestinationAirport, "CabinClass":cclass, "Seats": noseats})
      .then(response => {
        console.log(response.data);
        setFlights(response.data.flights);
        
      })
      .catch(e => {
        console.log(e);
      });
  };

  const noFlights = () => {

    if (flights.length==0) return true; return false;


  }

  const criteria = () => {

    let string =""

    if (flight.DepartureDate!="") string += `  Date: ${flight.DepartureDate} //`
    if (flight.DepartureAirport!="") string += `     DepartureAirport: ${flight.DepartureAirport} //`
    if (flight.DestinationAirport!="") string += `      DestinationAirport: ${flight.DestinationAirport} //`
    if (cabin!="") string += `    Cabin Class: ${cabin} //`
    if (noseats!=0) string += `     Seats: ${noseats}`

    return string

  }

  return(

    <div>
      <div className="row">
          <h1>Available Departure Flights</h1><br/>
          <strong>{criteria()}</strong>
          
          </div>





      {noFlights() && ( <strong>Sorry! No Flights Match Your Search Criteria</strong>)} 

  {flights.map((flight) => {
    return (
      <div>
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
            <div style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '5vh'}}>
            <Link to={{ pathname: "/flights/selectReturn", state: {flight, returnDate, cabin, noseats, noadults} }} className="btn btn-success">
            Select
          </Link>
            </div>
          </div>
        </div>

        <br/>

      </div>
      
    );
  })}


  </div>
  
  );
};
  export default FlightDep;