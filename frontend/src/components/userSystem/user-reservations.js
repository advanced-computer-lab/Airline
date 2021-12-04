import React, { useState, useEffect } from "react";
import ReservationsDataService from "../../services/reservation";
import { Link } from "react-router-dom";

const UserReservations = props => {

    const user = props.user;
    const userid = user._id
    console.log(userid)
    const [reservations, setReservations] =useState([]);
    
   const retrieveReservations = () => {
        ReservationsDataService.get(userid)
        
          .then(response => {
            setReservations(response.data.ReservationsList);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
      console.log(reservations)
      useEffect(() => {
        retrieveReservations();
      }, []);
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
                  <div className="card-body">
                  <h5 className="card-title"> Departure Flight</h5>
                  <p className="card-text">
                   <strong>Date: </strong>{reservation.DepartureFlight.Date}<br/>
                    <strong>Departure Time: </strong>{reservation.DepartureFlight.DepartureTime} <br/> &nbsp;
                    <strong>Arrival Time: </strong>{reservation.DepartureFlight.ArrivalTime}<br/>
                    <strong>Flight Number:</strong>{reservation.DepartureFlight._id}<br/>
                    <strong>Baggage Allowance:</strong>{reservation.DepartureFlight.BaggageAllowance}<br/>
                    <strong>Trip Duration:</strong>{reservation.DepartureFlight.TripDuration}<br/>
                    </p>
                    </div>
                    <div className="card-body">
                  <h5 className="card-title">  Return Flight</h5>
                  <p className="card-text">
                    <strong>Date: </strong>{reservation.ReturnFlight.Date}<br/>
                    <strong>Departure Time: </strong>{reservation.ReturnFlight.DepartureTime} <br/> &nbsp;
                    <strong>Arrival Time: </strong>{reservation.ReturnFlight.ArrivalTime}<br/>
                    <strong>Flight Number:</strong>{reservation.ReturnFlight._id}<br/>
                    <strong>Baggage Allowance:</strong>{reservation.ReturnFlight.BaggageAllowance}<br/>
                    <strong>Trip Duration:</strong>{reservation.ReturnFlight.TripDuration}<br/>
                    </p>
                    </div>
                    <div className="card-body">
                  <h5 className="card-title">  Return Flight</h5>
                  <p className="card-text">
                    <strong>First Name :</strong>{user.firstname}<br/>
                    <strong>Last Name :</strong>{user.lastname}<br/>
                    <strong>Passport Number :</strong>{user.passportnumber}<br/>
                    <strong>Email :</strong>{user.email}<br/>
                    <strong>Cabin Class</strong>{reservation.CabinClass}<br/>
                    <strong>Price :</strong>{reservation.Price}<br/>
                    <strong>Departure Seats</strong>{reservation.DepSeats}<br/>
                    <strong>Return Seats</strong>{reservation.RetSeats}<br/>
                    </p>
                    </div>
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