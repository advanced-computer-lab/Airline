import React, { useState, useEffect } from "react";
import FlightDataService from "../services/flight";
import { Link } from "react-router-dom";

const FlightReturn = props => {

    const flight = props.location.state

  //const flight= {DepartureAirport:"JFK",DestinationAirport:"LHR",Date:"2022-03-06"};

    const [flights, setFlights] = useState([]);

    const initialFlightState = {
      Date: flight.Date, 
      DepartureAirport: flight.DestinationAirport, 
      DestinationAirport: flight.DepartureAirport
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

  return (
    <div>
      
          
        
      <div className="row">
        {flights.map((flight) => {
          //const address = `${restaurant.address.building} ${restaurant.address.street}, ${restaurant.address.zipcode}`;
          return (
            <div className="col-lg-4 pb-1">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{flight.DepartureAirport} TO {flight.DestinationAirport}</h5>
                  <p className="card-text">
                   <strong>Date: </strong>{flight.Date}<br/>
                    <strong>Departure Time: </strong>{flight.DepartureTime}  &nbsp;
                    <strong>Arrival Time: </strong>{flight.ArrivalTime}
                  </p>
                  <div className="row">
                  <Link to={"/flights/"+flight._id} className="btn btn-primary col-lg-5 mx-1 mb-1">
                    Select
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}


      </div>
    </div>
  );
};

export default FlightReturn;