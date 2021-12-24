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
import { height } from "@mui/system";

const Booking = props => {

    const state = props.location.state

    const res = props.location.state.res

    let edit =false

    if(res!=null) edit = true;

    //console.log(edit)

    const flight = state.retflight
    const returnFlight=state.depflight
    const cabin = state.cabin
    const noseats = state.noseats

    const user = props.User

    // console.log(flight)
    // console.log(returnFlight)
    // console.log(props.User)

    const noadults = state.noadults

    const nochild = noseats-noadults

    const depreserved = state.departurereserved
    //console.log(depreserved)

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

<Box
    opacity='[0,0,0]'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '65ch' },
      }}
      noValidate
      textAlign='left'
      autoComplete="off"
      height="0px"
      marginTop={-2}
      backgroundColor="#f0f6f7ff"
    >
       <Grid sx={{justifyContent:"center",textAlign:"center"}}>
      <br/><div className="row">
      <div style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '5vh'}}>
      {edit&&
          ((<Link to={"/ViewReservations"} className="btn btn-danger" onClick={() => {props.history.push("/ViewReservations")}}>Cancel</Link>))
          
          }
          </div>
          <h1>Final Summary</h1><br/>
          <strong>Please review before confirming your booking.</strong>  
          </div>
          </Grid>
          <Grid container sx={{justifyContent:"space-evenly",margin:"70px 0 0 0"}}>
            <Grid item>
          <h3>Departure Flight</h3>
          <Grid item  xs={12} sm={10} md={4}>
      
        <Card
  sx={{ width:"400px",height: '100%', display: 'flex', flexDirection: 'column' }}
>
              <CardContent sx={{ flexGrow: 1 }}>

              <Grid style={{ width: "450px" }} fullWidth container>
      <Grid
        align="center"
        style={{
          
          width: "450px",
          height: "70px",
          alignItems: "center",
        }}
        item
        fullWidth
        container
      >
        <Typography sx={{margin:"0 0 0 15px"}} variant="h4">{returnFlight.DepartureAirport} to {returnFlight.DestinationAirport}</Typography>
      <Typography sx={{margin:"0 0 0 15px"}} variant="h9">Flight No. {returnFlight.FlightNumber}</Typography>
      </Grid>
      
      <List
        sx={{
          width: "450px",
          paddingTop: "0",
          paddingBottom: "0",
        }}
      >
        <Divider />
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
                </CardContent>
              </Card>

              </Grid>
        </Grid>
      <Grid item>
      <h3>Return Flight</h3>
      <Grid item  xs={12} sm={6} md={5}>
<Card
  sx={{ width:"400px",height: '100%', display: 'flex', flexDirection: 'column' }}
>
  
  <CardContent sx={{ flexGrow: 1 }}>

  <Grid style={{ width: "450px" }} fullWidth container>
<Grid
align="center"
style={{

width: "450px",
height: "70px",
alignItems: "center",
}}
item
fullWidth
container
>
      <Typography sx={{margin:"0 0 0 15px"}} variant="h4">{flight.DepartureAirport} to {flight.DestinationAirport}</Typography>
      <Typography sx={{margin:"0 0 0 15px"}} variant="h9">Flight No. {flight.FlightNumber}</Typography>
</Grid>
<List
sx={{
width: "450px",
paddingTop: "0",
paddingBottom: "0",
}}
>
<Divider />
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
                </CardContent>
              </Card>
        </Grid>
        </Grid>
          </Grid>


          <Grid>


          <Grid sx={{justifyContent:"center",textAlign:"center",margin:"60px 0 0 450px"}}>
          <Card
              sx={{ width:"400px",height: ' 150px', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
            <List
        sx={{
          width: "400px",
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
            </CardContent>   
            </Card>
            </Grid>
        

          
         

      <Grid container >
        <Grid item align="right" xs={12}>
                  
            <List
        sx={{
          width: "300px",
          paddingTop: "0",
          paddingBottom: "0",
          marginTop:"100px",
          height:'100px'
        }}
      >
        
      <div className="col-lg-4 pb-1" style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '6vh'}}>
      {edit?
          ((<Button variant='contained'  size='small' color='primary' onClick={() => {if(window.confirm('Are you sure you want to book this flight?')){ReservationDataService.delete(res._id);ReservationData.BookingNumber=res.BookingNumber;ReservationDataService.create(ReservationData);props.history.push("/flights/MyBooking", ReservationData)};}}>Confirm</Button>))
          :(<Button variant='contained'  size='medium' color='primary' onClick={() => {if(window.confirm('Are you sure you want to book this flight?')){ReservationDataService.create(ReservationData);props.history.push("/flights/MyBooking", ReservationData)};}}>Confirm</Button>)
          }
                </div>
                </List>
                </Grid>
                </Grid>
             
      </Grid>
     </Box>
          </div>
          
        
      );

};

export default Booking;