import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReservationDataService from "../../services/reservation";

const Booking = props => {

    const state = props.location.state

    const flight = state.retflight
    const returnFlight=state.depflight
    const cabin = state.cabin
    const noseats = state.noseats

    const noadults = state.noadults

    const nochild = noseats-noadults

    const depreserved = state.departurereserved

    const retreserved = state.reserved


    //console.log("HERE "+props.User.firstname)


    return (
      <div>
            

      <div className="row"> 
      <h1>Departure Flight</h1>
          <div>
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
            <strong>Adult Ticket Price: </strong>{"$"+flight.Price}<br/>
            <strong>Child Ticket Price: </strong>{"$"+(flight.Price/2)}<br/>
            <strong>Selected Seat Numbers: </strong>{depreserved.sort().toString()}<br/>
                </p>
              </div>
            </div>
          </div>
      
      </div>
      <br/>
      <div className="row">
      <h1>Return Flight</h1>
          <div className>
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
            <strong>Selected Seat Numbers: </strong>{retreserved.sort().toString()}<br/>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
          <strong>Total Travellers: {noseats} ({noadults} Adults, {nochild} Children)</strong><br/>
            <strong>Total Price: ${noadults*(flight.Price+returnFlight.Price) + nochild*((flight.Price+returnFlight.Price)/2)}</strong><br/>
          </div>
          <div>
          <a className="btn btn-primary" onClick={() => {if(window.confirm('Are you sure you want to create this reservation?')){ReservationDataService.create(flight, returnFlight, props.User, cabin, depreserved, retreserved);window.location.href="/flights"};}}>Confirm Booking</a> &nbsp;
                </div>
      
      </div>
          </div>
          
        
      );

};

export default Booking;