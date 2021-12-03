import React, { useState, useEffect } from "react";
import ReservationsDataService from "../../services/reservation";
import { Link } from "react-router-dom";

const UserReservations = props => {

    const user = props.user;
    const [reservations, setReservations] =useState("");
   
    const retrieveReservations = () => {
        ReservationsDataService.get()
          .then(response => {
            setReservations(response.data.reservations);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
      retrieveReservations();
      return(
        
        <div className="row">
        {reservations.map((reservation) => {
          return (
           <div>
              <div className="col-lg-4 pb-1">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{reservation.DepartureFlight.DepartureAirport} TO {reservation.DepartureFlight.DestinationAirport}</h5>
                  <p className="card-text">
                    Departure Flight
                   <strong>Date: </strong>{reservation.DepartureFlight.Date}<br/>
                    <strong>Departure Time: </strong>{reservation.DepartureFlight.DepartureTime}  &nbsp;
                    <strong>Arrival Time: </strong>{reservation.DepartureFlight.ArrivalTime}
                    <strong>Flight Number:</strong>{reservation.DepartureFlight._id}
                    <strong>Baggage Allowance:</strong>{reservation.DepartureFlight.BaggageAllowance}
                    <strong>Trip Duration:</strong>{reservation.DepartureFlight.TripDuration}
                    Return Flight
                    <strong>Date: </strong>{reservation.ReturnFlight.Date}<br/>
                    <strong>Departure Time: </strong>{reservation.ReturnFlight.DepartureTime}  &nbsp;
                    <strong>Arrival Time: </strong>{reservation.ReturnFlight.ArrivalTime}
                    <strong>Flight Number:</strong>{reservation.ReturnFlight._id}
                    <strong>Baggage Allowance:</strong>{reservation.ReturnFlight.BaggageAllowance}
                    <strong>Trip Duration:</strong>{reservation.ReturnFlight.TripDuration}
                    User
                    <strong>First Name :</strong>{reservation.User.firstname}
                    <strong>Last Name :</strong>{reservation.User.lastname}
                    <strong>Passport Number :</strong>{reservation.User.passportnumber}
                    <strong>Email :</strong>{reservation.User.email}
                    <strong>Cabin Class</strong>{reservation.CabinClass}
                    <strong>Price :</strong>{reservation.Price}
                    <strong>Departure Seats</strong>{reservation.DepSeats}
                    <strong>Return Seats</strong>{reservation.RetSeats}

                  </p>
                </div>
              </div>
            </div>
           </div>
          );
        })}


      </div>
      )
}
export default UserReservations;