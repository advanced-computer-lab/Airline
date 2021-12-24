import React, { useState, useEffect } from "react";
import FlightDataService from "../../services/flight";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import 'react-dropdown/style.css';
import {Box,Container,Typography,Grid,CardContent,CardActions,Card,ListItemAvatar,ListItem,Divider,List} from '@mui/material';
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
import LuggageIcon from "@mui/icons-material/Luggage";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const FlightReturn = props => {

    const state = props.location.state

    const res = props.location.state.res

    let edit =false

    if(res!=null) edit = true;

    console.log(edit)

    const flight = state.flight

    const cabin = state.cabin

    let pricem = 1

  if (cabin=="Business Class") pricem = 1.5
  else if (cabin=="First Class") pricem = 2

    const noseats = state.noseats

    const noadults = state.noadults

    const depdate = flight.Date

    const [flights, setFlights] = useState([]);


    const initialFlightState = {
      Date: state.returnDate, 
      DepartureAirport: flight.DestinationAirport, 
      DestinationAirport: flight.DepartureAirport,
      CabinClass:cabin.replace(/\s+/g, ''),
      Seats: noseats
    };

    useEffect(() => {
        retrieveFlights();
      }, []);


  const retrieveFlights = () => {
    FlightDataService.findByParams(initialFlightState)
      .then(response => {
        console.log(response.data);
        setFlights(response.data.flights);
        
      })
      .catch(e => {
        console.log(e);
      });
  };


  const depFlight = state.flight


  const noFlights = () => {

    if (flights.length<=0) return true; return false;
    


  }

  const criteria = () => {

    let string =""

    if (state.returnDate!="") string += `  Date: ${state.returnDate}   -\n`
    if (flight.DestinationAirport!="") string += `     DepartureAirport: ${flight.DestinationAirport}-\n`
    if (flight.DepartureAirport!="") string += `      DestinationAirport: ${flight.DepartureAirport}-\n`
    if (cabin!="") string += `    Cabin Class: ${cabin}-\n`
    if (noseats!=0) string += `     Seats: ${noseats}\n`

    return string

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
      marginTop={-5}
      backgroundColor="#f0f6f7ff"
      
    >
      
      <br/><br/><div className="row">
      <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', height: '5vh'}}>
      <Button variant='contained'  size='small' color='primary' onClick={() => {props.history.goBack()}}>Back</Button>
          
      </div>
      <div style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '5vh'}}>
      {edit&&
          ((<Button variant='contained'  size='small' color='error' onClick={() => {props.history.push("/ViewReservations")}}>Cancel</Button>))
          
          }
          </div>
      <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              
Available Return Flights
            </Typography><br/>
          <strong>{criteria()}</strong>
          </Container>
          </div>





      {noFlights() && ( <strong>Sorry! No Flights Match Your Search Criteria</strong>)} 
          
        
      <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container sx={{justifyContent:"space-evenly",textAlign:"center",}}>
        {flights.map((flight) => {
         
         if (flight.Date<depdate){ setFlights(flights.filter((fl)=>fl._id!==flight._id));}
          else{
          return (
            <Grid item  xs={12} sm={6} md={5.5}>
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
        <Divider />
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
                <Typography>{cabin}</Typography>
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
            <AttachMoneyIcon style={{ transform: "scale(1.2)" }} />
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
                  Adult Seat price
                </Typography>
              </Grid>
             <Typography> {"$"+(flight.Price*pricem)} </Typography>
             
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item align="left" xs={12}>
                  <Typography
                    sx={{ mt: 0.5 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                    Child Seat price
                  </Typography>
                </Grid>
                <Typography> {"$"+(flight.Price*pricem)/2} </Typography>
              </Grid>
            </Grid>
            
          </Grid>
        </ListItem>
      </List>
    </Grid>
              </CardContent>
           
              <Button variant='contained'  size='small' color='success' onClick={() => {props.history.push("/flights/ReviewSelection", {depFlight, flight, cabin, noseats, noadults, res})}}>Select</Button>
           
          
           
            </Card>
          </Grid>
          );
}})}


      </Grid>
      </Container>
      </Box>
    </div>
  );
};

export default FlightReturn;