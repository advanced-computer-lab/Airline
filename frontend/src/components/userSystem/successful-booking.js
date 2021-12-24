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
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NumbersIcon from '@mui/icons-material/Numbers';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import LuggageIcon from "@mui/icons-material/Luggage";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import {Box,Container,Typography,Grid,CardContent,CardActions,Card,ListItemAvatar,ListItem,Divider,List} from '@mui/material';
import { ButtonGroup } from "@mui/material";
const MyBooking = props => {

    const res = props.location.state




    return (
      <div>
<Grid container spacing ={14} mt={0}  marginTop={-7} marginLeft={0} width={1340}>
      <div className="row">
      <div style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '5vh'}}>
          </div>
          <h1>Congrats! You have booked your trip successfully.</h1><br/>
          <h2>Booking Number: {res.BookingNumber}.</h2> <br/> 
          </div>
              <Container sx={{ py: 0 ,margin:"0 0 0 15px" }} maxWidth="md">
                
                <br/>
              
              
              
          <br/>
          <Grid item  xs={6} sm={10} md={4}>
        <div className="row"> 
        <h3>Departure Flight</h3>
            <div >
           
            <Card
              sx={{ width:"400px",height: '600px', display: 'flex', flexDirection: 'column' }}
            >

              <CardContent sx={{ flexGrow: 1 }}>
              
                  <Grid style={{ width: "400px" }} fullWidth container>
      <Grid
        align="center"
        style={{
          
          width: "400px",
          height: "550px",
          alignItems: "center",
        }}
        item
        fullWidth
        container
      >
       
         <Typography sx={{margin:"0 0 0 15px"}} variant="h4">Flight No. {res.DepartureFlight.FlightNumber}</Typography>
         <Typography sx={{margin:"0 0 0 15px"}} variant="h9">{res.DepartureFlight.DepartureAirport} TO {res.DepartureFlight.DestinationAirport}</Typography>

         <List
        sx={{
          width: "400px",
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
                {res.DepartureFlight.Date}
                  
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
                    {res.DepartureFlight.DepartureTime}
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
                   {res.DepartureFlight.ArrivalTime}
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
           <Grid>{res.DepartureFlight.TripDuration}</Grid>
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
                <Typography>{res.CabinClass}</Typography>
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
            <Typography>{res.DepartureFlight.BaggageAllowance}</Typography>
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
            <Typography>{res.DepSeats.sort().toString()}</Typography>
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
        
      <Container sx={{ py: 0 ,margin:"0 0 0 -200px" }} maxWidth="md">
        <br/>
              
              <div className="row">
          </div>
          <br/>
          <Grid item  xs={6} sm={6} md={4}>
        <div className="row"> 
        <h3>Return Flight</h3>
            <div >
           
            <Card
              sx={{ width:"400px",height: '600px', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
              
                  <Grid style={{ width: "400px" }} fullWidth container>
      <Grid
        align="center"
        style={{
          
          width: "400px",
          height: "550px",
          alignItems: "center",
        }}
        item
        fullWidth
        container
      >
         <Typography sx={{margin:"0 0 0 15px"}} variant="h4">Flight No. {res.ReturnFlight.FlightNumber}</Typography>
         <Typography sx={{margin:"0 0 0 15px"}} variant="h9">{res.ReturnFlight.DepartureAirport} TO {res.ReturnFlight.DestinationAirport}</Typography>

         <List
        sx={{
          width: "400px",
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
                {res.ReturnFlight.Date}
                  
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
                    {res.ReturnFlight.DepartureTime}
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
                   {res.ReturnFlight.ArrivalTime}
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
           <Grid>{res.ReturnFlight.TripDuration}</Grid>
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
                <Typography>{res.CabinClass}</Typography>
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
            <Typography>{res.ReturnFlight.BaggageAllowance}</Typography>
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
            <Typography>{res.RetSeats.sort().toString()}</Typography>
          </Grid>
        </ListItem>
        <Divider />
        
      
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
        <h3>Booking Info </h3>
        <Card
              sx={{ width:"400px",height: '230px', display: 'flex', flexDirection: 'column' }}
            >

              <CardContent sx={{ flexGrow: 1 }}>
            <List
        sx={{
          width: "400px",
          paddingTop: "0",
          paddingBottom: "0",
        }}
      >
        <ListItem>
      <ListItemAvatar>
        <ConfirmationNumberIcon style={{ transform: "scale(1.2)" }} />
      </ListItemAvatar>
      <Grid container>
        <Grid item align="left" xs={12}>
          <Typography
            sx={{ mt: 0.5 }}
            color="text.secondary"
            display="block"
            variant="caption"
          >
            Booking Number :
          </Typography>
        </Grid>
        <Typography>{res.BookingNumber}</Typography>
      </Grid>
    </ListItem>
    <Divider />
        <ListItem>
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
        <Typography>{res.NoSeats} ({res.NoAdults} Adults, {res.NoChildren} Children)</Typography>
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
            Total Price :
          </Typography>
        </Grid>
        <Typography>{res.Price}</Typography>
      </Grid>
    </ListItem>
    <Divider />
    
            </List>
            </CardContent>
            </Card>


          
         
      
      </Container>

      
      <Container sx={{ py: 0 ,margin:"0 0 0 100px" }}  maxWidth="sm">
        <h3>Personal Information </h3>
        <Card
              sx={{ width:"400px",height: '230px', display: 'flex', flexDirection: 'column' }}
            >

              <CardContent sx={{ flexGrow: 1 }}>
            <List
        sx={{
          width: "400px",
          paddingTop: "0",
          paddingBottom: "0",
        }}
      >
        <ListItem>
      <ListItemAvatar>
        <PersonIcon style={{ transform: "scale(1.2)" }} />
      </ListItemAvatar>
      <Grid container>
        <Grid item align="left" xs={12}>
          <Typography
            sx={{ mt: 0.5 }}
            color="text.secondary"
            display="block"
            variant="caption"
          >
            Name:
          </Typography>
        </Grid>
        <Typography>{res.User.firstname} {res.User.lastname}</Typography>
      </Grid>
    </ListItem>
    <Divider />
        <ListItem>
      <ListItemAvatar>
        <AlternateEmailIcon style={{ transform: "scale(1.2)" }} />
      </ListItemAvatar>
      <Grid container>
        <Grid item align="left" xs={12}>
          <Typography
            sx={{ mt: 0.5 }}
            color="text.secondary"
            display="block"
            variant="caption"
          >
           Email
          </Typography>
        </Grid>
        <Typography>{res.User.email}</Typography>
      </Grid>
    </ListItem>
    <Divider />
    <ListItem>
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
           Passport Number :
          </Typography>
        </Grid>
        <Typography>{res.User.passportnumber}</Typography>
      </Grid>
    </ListItem>
    <Divider />
    
            </List>
            </CardContent>
            </Card>


          
         
      
      </Container>
      </Grid>
          </div>
          
        
      );

};

export default MyBooking;