import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReservationDataService from "../../services/reservation";

const MyBooking = props => {

    const res = props.location.state




    return (
      <div>

<div className="row">
          <h1>Congrats! You have booked your trip successfully.</h1><br/>
          <h3>Booking Number: {res.BookingNumber}</h3>
          
          </div>
          <br/>

      <div className="row"> 
      <h3>Departure Flight</h3>
          <div>
            <div className="card" style={{border : "1px solid #111111"}}>
              <div className="card-body">
                <h5 className="card-title">{res.DepartureFlight.DepartureAirport} TO {res.DepartureFlight.DestinationAirport}</h5>
                <p className="card-text">
                <strong>FlightNumber: </strong>{res.DepartureFlight.FlightNumber}<br/>
           <strong>Date: </strong>{res.DepartureFlight.Date}<br/>
            <strong>Departure Time: </strong>{res.DepartureFlight.DepartureTime}<br/>
            <strong>Arrival Time: </strong>{res.DepartureFlight.ArrivalTime}<br/>
            <strong>Trip Duration: </strong>{res.DepartureFlight.TripDuration}<br/>
            <strong>Baggage Allowance: </strong>{res.DepartureFlight.BaggageAllowance}<br/>
            <strong>Selected Seat Numbers: </strong>{res.DepSeats.sort().toString()}<br/>
                </p>
              </div>
            </div>
          </div>
      
      </div>
      <br/>
      <div className="row">
      <h3>Return Flight</h3>
          <div className>
            <div className="card" style={{border : "1px solid #111111"}}>
              <div className="card-body">
                <h5 className="card-title">{res.ReturnFlight.DepartureAirport} TO {res.ReturnFlight.DestinationAirport}</h5>
                <p className="card-text">
                <strong>FlightNumber: </strong>{res.ReturnFlight.FlightNumber}<br/>
           <strong>Date: </strong>{res.ReturnFlight.Date}<br/>
            <strong>Departure Time: </strong>{res.ReturnFlight.DepartureTime}<br/>
            <strong>Arrival Time: </strong>{res.ReturnFlight.ArrivalTime}<br/>
            <strong>Trip Duration: </strong>{res.ReturnFlight.TripDuration}<br/>
            <strong>Baggage Allowance: </strong>{res.ReturnFlight.BaggageAllowance}<br/>
            <strong>Selected Seat Numbers: </strong>{res.RetSeats.sort().toString()}<br/>
                </p>
              </div>
            </div>
            <br/>
          </div>
          </div>
          
          <div className="row"> 
      <h3>Personal Information</h3>
          <div>
            <div className="card" style={{border : "1px solid #111111"}}>
              <div className="card-body">
                <h5 className="card-title">{res.User.firstname} {res.User.lastname}</h5>
                <p className="card-text">
                <strong>Email: </strong>{res.User.email}<br/>
           <strong>Passport Number: </strong>{res.User.passportnumber}<br/>
            
                </p>
              </div>
            </div>
          </div>
      
      </div>
      <br/>
          <div className="row"> 
      <h3>General Ticket Information</h3>
          <div>
            <div className="card" style={{border : "1px solid #111111"}}>
              <div className="card-body">
                <p className="card-text">
                <strong>Booking Number: </strong>{res.BookingNumber}<br/>
           <strong>Total Number of travellers: </strong>{res.NoSeats}<br/>
           <strong>Number of adults: </strong>{res.NoAdults}<br/>
           <strong>Number of children: </strong>{res.NoChildren}<br/>
            <strong>Cabin Class: </strong>{res.CabinClass}<br/>
            <strong>Total price: </strong>${res.Price}<br/>
            
                </p>
              </div>
            </div>
          </div>
      </div>
      <br/><br/>
          </div>
          
        
      );

};

export default MyBooking;