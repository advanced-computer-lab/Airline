import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import ReservationDataService from "../../services/reservation";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BackgroundSlider from 'react-background-slider'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import FlightIcon from "@mui/icons-material/Flight";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import EventIcon from "@mui/icons-material/Event";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NumbersIcon from '@mui/icons-material/Numbers';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import LuggageIcon from "@mui/icons-material/Luggage";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {Box,Container,Typography,Grid,CardContent,CardActions,Card,ListItemAvatar,ListItem,Divider,List} from '@mui/material';
import { ButtonGroup } from "@mui/material";

const Booking = props => {

    const state = props.location.state

    const res = props.location.state.res

    let edit =false

    if(res!=null) edit = true;

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
        Price: returnFlight.Price,
        EconomySeats: returnFlight.EconomySeats,
        BusinessSeats: returnFlight.BusinessSeats,
        FirstSeats: returnFlight.FirstSeats,
        ReservedSeats: returnFlight.ReservedSeats

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
        Price: flight.Price,
        EconomySeats: flight.EconomySeats,
        BusinessSeats: flight.BusinessSeats,
        FirstSeats: flight.FirstSeats,
        ReservedSeats: flight.ReservedSeats


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



    return (
      <div>

         
      <Grid container spacing ={33} mt={0}  marginTop={-7}>
      <div className="row">
      <div style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '5vh'}}>
      {edit&&
          ((<Link to={"/ViewReservations"} className="btn btn-danger" onClick={() => {props.history.push("/ViewReservations")}}>Cancel</Link>))
          
          }
          </div>
          <h1>Final Summary</h1><br/>
          <strong>Please review before confirming your booking.</strong>  
          </div>
              <Container sx={{ py: 0 ,margin:"0 0 0 15px" }} maxWidth="md">
              <h3>Departure Flight</h3>
              <div className="row">
          </div>
          <br/>
          <Grid item  xs={12} sm={10} md={4}>
        <div className="row"> 
       
            <div >
           
            <Card
              sx={{ width:"550px",height: '600px', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
              
                  <Grid style={{ width: "550px" }} fullWidth container>
      <Grid
        align="center"
        style={{
          
          width: "550px",
          height: "550px",
          alignItems: "center",
        }}
        item
        fullWidth
        container
      >
         <Typography sx={{margin:"0 0 0 15px"}} variant="h4">Flight No. {returnFlight.FlightNumber}</Typography>
         <Typography sx={{margin:"0 0 0 15px"}} variant="h9">{returnFlight.DepartureAirport} TO {returnFlight.DestinationAirport}</Typography>

         <List
        sx={{
          width: "550px",
          paddingTop: "0",
          paddingBottom: "0",
        }}
      >
             <ListItem>
          <ListItemAvatar>
            <EventIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container columns={16}>
            <Grid container item xs={7}>
              <Grid item align="left" xs={12}>
                <Typography
                  sx={{ mt: 0.5 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                 Date
                </Typography>
              </Grid>
              <Grid>
                <Typography>
                {returnFlight.Date}
                  
                </Typography>
              </Grid>
            </Grid>
        
            
          </Grid>
        </ListItem>
        <Divider />
             <ListItem fullWidth>
          <ListItemAvatar>
            <FlightTakeoffIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid container item xs={6}>
              <Grid item align="left" xs={12}>
                <Typography
                  sx={{ mt: 0.5 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                  Departure Time
                </Typography>
              </Grid>
  
            </Grid>
            <Grid item xs>
              <Grid container>
                <Grid item align="left" xs={12}>
                  <Typography
                    sx={{ mt: 0.5 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                    {returnFlight.DepartureTime}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <FlightLandIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid container item xs={6}>
              <Grid item align="left" xs={12}>
                <Typography
                  sx={{ mt: 0.5 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                 Arrival Time
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid container>
                <Grid item align="left" xs={12}>
                  <Typography
                    sx={{ mt: 0.5 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                   {returnFlight.ArrivalTime}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <AccessTimeIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.5 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Flight Duration
              </Typography>
            </Grid>
           <Grid>{returnFlight.TripDuration}</Grid>
          </Grid>
        </ListItem>
        <Divider />
        
        <ListItem>
          <ListItemAvatar>
            <AirlineSeatReclineExtraIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid item align="left" xs={12}>
          <Typography
                  sx={{ mt: 0.5 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                  Cabin Class
                </Typography>
                <Typography>{state.cabin}</Typography>
                </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <LuggageIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.5 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Baggage allowance
              </Typography>
            </Grid>
            <Typography>{returnFlight.BaggageAllowance}</Typography>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <EventSeatIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.5 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Seats Selected
              </Typography>
            </Grid>
            <Typography>{depreserved.sort().toString()}</Typography>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <AttachMoneyIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.5 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Adult Ticket Price
              </Typography>
            </Grid>
            <Typography>{"$"+returnFlight.Price}</Typography>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <AttachMoneyIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.5 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Child Ticket Price
              </Typography>
            </Grid>
            <Typography>{"$"+(returnFlight.Price/2)}</Typography>
          </Grid>
        </ListItem>
        <Divider />
        
        
              </List>
                 
                    </Grid>
                    </Grid>
                </CardContent>
              </Card>
            </div>
        
        </div>
        </Grid>
        <br/>
        </Container>
      <div className="col-sm">
        
      <Container sx={{ py: 0 ,margin:"0 0 0 15px" }} maxWidth="md">
              <h3>Return Flight</h3>
              <div className="row">
          </div>
          <br/>
          <Grid item  xs={12} sm={6} md={4}>
        <div className="row"> 
       
            <div >
           
            <Card
              sx={{ width:"550px",height: '600px', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
              
                  <Grid style={{ width: "550px" }} fullWidth container>
      <Grid
        align="center"
        style={{
          
          width: "550px",
          height: "550px",
          alignItems: "center",
        }}
        item
        fullWidth
        container
      >
         <Typography sx={{margin:"0 0 0 15px"}} variant="h4">Flight No. {returnFlight.FlightNumber}</Typography>
         <Typography sx={{margin:"0 0 0 15px"}} variant="h9">{flight.DepartureAirport} TO {flight.DestinationAirport}</Typography>

         <List
        sx={{
          width: "550px",
          paddingTop: "0",
          paddingBottom: "0",
        }}
      >
             <ListItem>
          <ListItemAvatar>
            <EventIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container columns={16}>
            <Grid container item xs={7}>
              <Grid item align="left" xs={12}>
                <Typography
                  sx={{ mt: 0.5 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                 Date
                </Typography>
              </Grid>
              <Grid>
                <Typography>
                {flight.Date}
                  
                </Typography>
              </Grid>
            </Grid>
        
            
          </Grid>
        </ListItem>
        <Divider />
             <ListItem fullWidth>
          <ListItemAvatar>
            <FlightTakeoffIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid container item xs={6}>
              <Grid item align="left" xs={12}>
                <Typography
                  sx={{ mt: 0.5 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                  Departure Time
                </Typography>
              </Grid>
  
            </Grid>
            <Grid item xs>
              <Grid container>
                <Grid item align="left" xs={12}>
                  <Typography
                    sx={{ mt: 0.5 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                    {flight.DepartureTime}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <FlightLandIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid container item xs={6}>
              <Grid item align="left" xs={12}>
                <Typography
                  sx={{ mt: 0.5 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                 Arrival Time
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs>
              <Grid container>
                <Grid item align="left" xs={12}>
                  <Typography
                    sx={{ mt: 0.5 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                   {flight.ArrivalTime}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <AccessTimeIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.5 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Flight Duration
              </Typography>
            </Grid>
           <Grid>{flight.TripDuration}</Grid>
          </Grid>
        </ListItem>
        <Divider />
        
        <ListItem>
          <ListItemAvatar>
            <AirlineSeatReclineExtraIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid item align="left" xs={12}>
          <Typography
                  sx={{ mt: 0.5 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                  Cabin Class
                </Typography>
                <Typography>{state.cabin}</Typography>
                </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <LuggageIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.5 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Baggage allowance
              </Typography>
            </Grid>
            <Typography>{flight.BaggageAllowance}</Typography>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <EventSeatIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.5 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Seats Selected
              </Typography>
            </Grid>
            <Typography>{retreserved.sort().toString()}</Typography>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <AttachMoneyIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.5 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Adult Ticket Price
              </Typography>
            </Grid>
            <Typography>{"$"+flight.Price}</Typography>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <AttachMoneyIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.5 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Child Ticket Price
              </Typography>
            </Grid>
            <Typography>{"$"+(flight.Price/2)}</Typography>
          </Grid>
        </ListItem>
        <Divider />
        
        
              </List>
                 
                    </Grid>
                    </Grid>
                </CardContent>
              </Card>
            </div>
        
        </div>
        </Grid>
        <br/>
        </Container>
        </div>
        <Container sx={{ py: 0 ,margin:"0 0 0 15px" }}  maxWidth="sm">
            <Card width="550px" height='100px'>      
            <List
        sx={{
          width: "550px",
          paddingTop: "0",
          paddingBottom: "0",
        }}
      ><ListItem>
      <ListItemAvatar>
        <NumbersIcon style={{ transform: "scale(1.2)" }} />
      </ListItemAvatar>
      <Grid container>
        <Grid item align="left" xs={12}>
          <Typography
            sx={{ mt: 0.5 }}
            color="text.secondary"
            display="block"
            variant="caption"
          >
            Total Travellers 
          </Typography>
        </Grid>
        <Typography>{noseats} ({noadults} Adults, {nochild} Children)</Typography>
      </Grid>
    </ListItem>
    <Divider />
    <ListItem>
      <ListItemAvatar>
        <AttachMoneyIcon style={{ transform: "scale(1.2)" }} />
      </ListItemAvatar>
      <Grid container>
        <Grid item align="left" xs={12}>
          <Typography
            sx={{ mt: 0.5 }}
            color="text.secondary"
            display="block"
            variant="caption"
          >
            Total Price
          </Typography>
        </Grid>
        <Typography>{noadults*(flight.Price+returnFlight.Price) + nochild*((flight.Price+returnFlight.Price)/2)}</Typography>
      </Grid>
    </ListItem>
    <Divider />
            </List>
            </Card>


          
         
      
      </Container>
      <Container sx={{ py: 0 ,margin:"0 0 0 310px" }}  maxWidth='sm'>
      <Grid container>
        <Grid item align="right" xs={12}>
                  
            <List
        sx={{
          width: "300px",
          paddingTop: "0",
          paddingBottom: "0",
        }}
      >
        
      <div className="col-lg-4 pb-1" style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '6vh'}}>
      {edit?
          ((<Button variant='contained'  size='small' color='primary' onClick={() => {if(window.confirm('Are you sure you want to book this flight?')){ReservationDataService.delete(res._id);ReservationData.BookingNumber=res.BookingNumber;ReservationDataService.create(ReservationData);props.history.push("/flights/MyBooking", ReservationData)};}}>Confirm Modification</Button>))
          :(<Button variant='contained'  size='small' color='primary' onClick={() => {if(window.confirm('Are you sure you want to book this flight?')){ReservationDataService.create(ReservationData);props.history.push("/flights/MyBooking", ReservationData)};}}>Confirm Booking</Button>)
          }
                </div>
                </List>
                </Grid>
                </Grid>
                </Container>
      </Grid>
     
          </div>
          
        
      );

};

export default Booking;