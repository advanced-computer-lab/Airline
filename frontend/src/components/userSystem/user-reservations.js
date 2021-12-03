import React, { useState, useEffect } from "react";
import ReservationsDataService from "../../services/reservation";
import { Link } from "react-router-dom";

const UserReservations = props => {

  /*const ReservationData = {
    DepartureFlight:{
      id: 1,
      FlightNumber: 1,
      DepartureTime: '22:30',
      ArrivalTime:'01:50',
      Date: '22/12/2021',
      DepartureAirport: 'CAI',
      DestinationAirport: 'ROM',
      TripDuration: '03:10',
      BaggageAllowance: 10

    },
    ReturnFlight:{
      id: 2,
      FlightNumber: 2,
      DepartureTime: '02:00',
      ArrivalTime: '05:00',
      Date: '31/12/2021',
      DepartureAirport: 'ROM',
      DestinationAirport: 'CAI',
      TripDuration: '03:00',
      BaggageAllowance: '20'

    },
    User:{
      id: 103031,
      firstname: 'Abdelkareem',
      lastname: 'Tarek',
      passportnumber: 1234,
      email: 'aasfgfare'
    },

    CabinClass: 'Economey',

    Price: 100,

    UserId:102301,

    DepSeats: '2A',

    RetSeats: '3B'


  }*/
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
                    <strong>First Name :</strong>{reservation.User.firstname}<br/>
                    <strong>Last Name :</strong>{reservation.User.lastname}<br/>
                    <strong>Passport Number :</strong>{reservation.User.passportnumber}<br/>
                    <strong>Email :</strong>{reservation.User.email}<br/>
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