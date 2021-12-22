import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReservationDataService from "../../services/reservation";
import BackgroundSlider from 'react-background-slider'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';

const Booking = props => {

    const state = props.location.state

    const flight = state.retflight
    const returnFlight=state.depflight
    const cabin = state.cabin
    const noseats = state.noseats

    const user = props.User

    console.log(flight)
    console.log(returnFlight)
    console.log(props.User)

    const noadults = state.noadults

    const nochild = noseats-noadults

    const depreserved = state.departurereserved
    console.log(depreserved)

    const retreserved = state.reserved
    console.log(retreserved)

    const tprice = noadults*(flight.Price+returnFlight.Price) + nochild*((flight.Price+returnFlight.Price)/2);

    const ReservationData = {
      BookingNumber: GenerateBookingNumber(),
      DepartureFlight:{
        id: returnFlight._id,
        FlightNumber: returnFlight.FlightNumber,
        DepartureTime: returnFlight.DepartureTime,
        ArrivalTime: returnFlight.ArrivalTime,
        Date: returnFlight.Date,
        DepartureAirport: returnFlight.DepartureAirport,
        DestinationAirport: returnFlight.DestinationAirport,
        TripDuration: returnFlight.TripDuration,
        BaggageAllowance: returnFlight.BaggageAllowance,
        Price: returnFlight.Price

      },
      ReturnFlight:{
        id: flight._id,
        FlightNumber: flight.FlightNumber,
        DepartureTime: flight.DepartureTime,
        ArrivalTime: flight.ArrivalTime,
        Date: flight.Date,
        DepartureAirport: flight.DepartureAirport,
        DestinationAirport: flight.DestinationAirport,
        TripDuration: flight.TripDuration,
        BaggageAllowance: flight.BaggageAllowance,
        Price: flight.Price


      },
      User:{
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        passportnumber: user.passportnumber,
        email: user.email
      },

      CabinClass: cabin,

      Price: tprice,

      UserId:user._id,

      DepSeats: depreserved,

      RetSeats: retreserved,

      NoSeats: noseats,

      NoAdults: noadults,

      NoChildren: noadults

      


  
    }

    function GenerateBookingNumber() {
      const chars = '123456789123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      var result = '';
      for (var i = 10; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
      return result;
  }


    //console.log("HERE "+props.User.firstname)


    return (
      <div>
        <BackgroundSlider
          images={[image1,image2, image3]}
          duration={4}
          transition={2}
        />
<Box
    opacity='[0,0,0]'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '35ch' },
      }}
      noValidate
      textAlign='left'
      autoComplete="off"
      marginTop={'0px'}
      height="0px"
      
    >
<div className="row">
          <h1>Final Summary</h1><br/>
          <strong>Please review before confirming your booking.</strong>
          
          </div>
          <br/>
      
      <div className="row"> 
      <h3>Departure Flight</h3>
          <div>
            <div className="card" style={{border : "1px solid #111111"}}>
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
      <h3>Return Flight</h3>
          <div className>
            <Card style={{border : "1px solid #111111"}}>
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
            </Card>
            <br/>
          </div>
          <div className="col-lg-4 pb-1">
            <Card style={{border : "1px solid #111111"}}>          <strong>Total Travellers: {noseats} ({noadults} Adults, {nochild} Children)</strong><br/>
            <strong>Total Price: ${noadults*(flight.Price+returnFlight.Price) + nochild*((flight.Price+returnFlight.Price)/2)}<br/><br/></strong><br/>
            </Card>

          </div>
          <div className="col-lg-4 pb-1"></div>
          
          <div className="col-lg-4 pb-1" style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '6vh'}}>

          <Button variant='contained'  size='small' color='primary' onClick={() => {if(window.confirm('Are you sure you want to book this flight?')){ReservationDataService.create(ReservationData);props.history.push("/flights/MyBooking", ReservationData)};}}>Confirm Booking</Button> &nbsp;
                </div>
      
      </div>
      </Box>
          </div>
          
        
      );

};

export default Booking;