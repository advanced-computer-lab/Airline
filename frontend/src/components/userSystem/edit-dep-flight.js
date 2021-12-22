import React, { useState, useEffect } from "react";
import FlightDataService from "../../services/flight";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import ButtonGroup from '@mui/material/ButtonGroup';

const EditDepFlight = props => {

    const state = props.location.state

    const returnFlight=state.DepartureFlight
    return(
            <div>
              <div className="row">
          </div>
          <br/>
        <div className="row"> 
        <h3>Departure Flight</h3>
            <div >
              <Card style={{border : "1px solid #111111"}}>
                <div className="card-body">
                  <h5 className="card-title">{returnFlight.DepartureAirport} TO {returnFlight.DestinationAirport}</h5>
                  <p className="card-text">
                  <strong>FlightNumber: </strong>{returnFlight.FlightNumber}<br/>
             <strong>Date: </strong>{returnFlight.Date}<br/>
              <strong>Departure Time: </strong>{returnFlight.DepartureTime}<br/>
              <strong>Arrival Time: </strong>{returnFlight.ArrivalTime}<br/>
              <strong>Trip Duration: </strong>{returnFlight.TripDuration}<br/>
              <strong>Cabin Class: </strong>{returnFlight.CabinClass}<br/>
              <strong>Baggage Allowance: </strong>{returnFlight.BaggageAllowance}<br/>
              <strong>Seats selected:</strong>{state.DepSeats.sort().toString()}
                  </p>
                  <ButtonGroup style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '4vh' ,marginTop:'1vh'}}>
                  <Link to={{ pathname:"/flights/EditDepFlight", state:state}} className="btn btn-primary">Edit Departure Flight</Link>  
                  <Link to={{ pathname:"/flights/EditDepSeats", state:state}} className="btn btn-primary">Edit Departure Seats</Link> 
                    </ButtonGroup>
                </div>
              </Card>
            </div>
        
        </div>

        <br/>
            </div>
            
    );

}

export default EditDepFlight;