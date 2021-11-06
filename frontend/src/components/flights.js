import React, { useState, useEffect } from "react";
import FlightDataService from "../services/flight";
import { Link } from "react-router-dom";

const Flight = props => {
  const initialFlightState = {
    id: null,
    FlightNumber: "",
    DepartureTime: "", 
    ArrivalTime: "", 
    Date: "", 
    EconomySeats: "", 
    BusinessSeats: "", 
    FirstSeats: "", 
    DepartureAirport: "", 
    DestinationAirport: ""
  };
  const [flight, setFlight] = useState(initialFlightState);

  const getFlight = id => {
    FlightDataService.get(id)
      .then(response => {
        setFlight(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getFlight(props.match.params.id);
  }, [props.match.params.id]);

  /*const deleteReview = (reviewId, index) => {
    FlightDataService.deleteFlight(reviewId, props.user.id)
      .then(response => {
        setFlight((prevState) => {
          prevState.reviews.splice(index, 1)
          return({
            ...prevState
          })
        })
      })
      .catch(e => {
        console.log(e);
      });
  };*/

  return (
    <div>
      {flight ? (
        <div>
          <h5>{flight.DepartureAirport} TO {flight.DestinationAirport}</h5>
          <p>
            <strong>Flight Number: </strong>{flight.FlightNumber}<br/>
            <strong>Departure Time: </strong>{flight.DepartureTime} &nbsp; <strong>Arrival Time: </strong>{flight.ArrivalTime}<br/>
            <strong>Date: </strong>{flight.Date}<br/>
            <strong>First Class Seats: </strong>{flight.FirstSeats} <br/>
            <strong>Business Class Seats: </strong>{flight.BusinessSeats} <br/>
            <strong>Economy Class Seats: </strong>{flight.EconomySeats} 
          </p>
          <Link to={"/flights/" + props.match.params.id + "/edit"} className="btn btn-primary">
            Update Flight
          </Link> &nbsp;

          

          
          

        </div>
      ) : (
        <div>
          <br />
          <p>No flight selected.</p>
        </div>
      )}
    </div>
  );
};

export default Flight;