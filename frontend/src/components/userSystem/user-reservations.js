import React, { useState, useEffect } from "react";
import ReservationsDataService from "../../services/reservation";
import { Link } from "react-router-dom";

const UserReservations = props => {

    const user = props.user;
    const userid = user._id
    console.log(userid)
    const [reservations, setReservations] =useState([]);

    const deleteReservations = (resid) => {
      ReservationsDataService.delete(resid)
        .catch(e => {
          console.log(e);
        });
    };
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


      useEffect(() => {
        retrieveReservations();
      }, []);
      return(
        
        <div className="row" style= {{width:"250rem"}}>
        {reservations.map((reservation) => {
          
          return (
           <div >
             
              <div className="col-lg-4 pb-1">
              <div className="card" style={{border : "1px solid #111111"}}>
                <div className="card-body">
                  <h4 className="card-title">{reservation.DepartureFlight.DepartureAirport} TO {reservation.DepartureFlight.DestinationAirport }  </h4>
                  <h5>Booking Number :{reservation.BookingNumber}</h5>
                  <p className="card-text" >
                  <div class="row">
                    
                  <div class="col-sm">
                  <h5 className="card-title"> Departure Flight</h5>
                  <p className="card-text" >
                   <strong>Date: </strong>{reservation.DepartureFlight.Date}<br/>
                    <strong>Departure Time : </strong>{reservation.DepartureFlight.DepartureTime} <br/> &nbsp;
                    <strong>Arrival Time : </strong>{reservation.DepartureFlight.ArrivalTime}<br/>
                    <strong>Flight Number : </strong>{reservation.DepartureFlight._id}<br/>
                    <strong>Baggage Allowance : </strong>{reservation.DepartureFlight.BaggageAllowance}<br/>
                    <strong>Trip Duration : </strong>{reservation.DepartureFlight.TripDuration}<br/>
                    <strong>Seats : </strong>{reservation.DepSeats.sort().toString()}<br/>
                    <strong>Cabin Class : </strong>{reservation.CabinClass}<br/>
                    </p>
                    </div>
                    <div class="col-sm">
                  <h5 className="card-title">  Return Flight</h5>
                  <p className="card-text">
                    <strong>Date: </strong>{reservation.ReturnFlight.Date}<br/>
                    <strong>Departure Time : </strong>{reservation.ReturnFlight.DepartureTime} <br/> &nbsp;
                    <strong>Arrival Time : </strong>{reservation.ReturnFlight.ArrivalTime}<br/>
                    <strong>Flight Number : </strong>{reservation.ReturnFlight._id}<br/>
                    <strong>Baggage Allowance : </strong>{reservation.ReturnFlight.BaggageAllowance}<br/>
                    <strong>Trip Duration : </strong>{reservation.ReturnFlight.TripDuration}<br/>
                    <strong>Seats : </strong>{reservation.RetSeats.sort().toString()}<br/>
                    <strong>Cabin Class : </strong>{reservation.CabinClass}<br/>
                    </p>
                    </div>
                    <div class="col-sm">
                  <h5 className="card-title">  User info</h5>
                  <p className="card-text">
                    <strong>First Name : </strong>{reservation.User.firstname}<br/>
                    <strong>Last Name : </strong>{reservation.User.lastname}<br/>
                    <strong>Passport Number : </strong>{reservation.User.passportnumber}<br/>
                    <strong>Email : </strong>{reservation.User.email}<br/>
                    <strong>Total Price : </strong>{reservation.Price}<br/>
                    
                   
                    </p>
                    </div>
                    </div>
                    <div style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '5vh'}}>
                    <a className="btn btn-danger" onClick={() => {if(window.confirm('Are you sure you want to cancel this reservation?')){deleteReservations(reservation._id)}}}>Cancel Reservation</a> &nbsp;
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