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
import { Carousel } from 'react-bootstrap';
import '../main.css';
import { Icon } from '@iconify/react';
const MyBooking = props => {

    const res = props.location.state




    return (
      <div  >
          <Carousel>
        <Carousel.Item id="carousel-itemd">
          <img
            id="image-3"
            className="d-block w-100"
            src={image3}
            alt="First slide"
          />
          <Carousel.Caption>
            
            <h4>Let The Journey Begin</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="carousel-itemd">
          <img
            id="image-2"
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption>
            
            <h4>Let The Journey Begin</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="carousel-itemd">
          <img
            id="image-1"
            className="d-block w-100"
            src={image1}
            alt="Third slide"
          />

          <Carousel.Caption>
           
            <h4>Let The Journey Begin</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
      marginTop={-4}
      backgroundColor="#f0f6f7ff"
    >
<Grid container spacing ={14} mt={0}  marginTop={0} marginLeft={15} width={1340}>
      <div className="row">
      <div style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '5vh'}}>
          </div>
          
          <h1>Congrats! You have booked your trip successfully.</h1>
          <h2>Booking Number: {res.BookingNumber}.</h2> <br/> 
          <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', height: '5vh' }}>
          <Button variant='contained'  size='small' color='primary' onClick={() => {props.history.push("/ViewReservations")}}>My Reservations</Button>
          </div>
          </div>
          
              <Container sx={{ py: 0 ,margin:"0 0 0 15px" }} maxWidth="md">
                
                <br/>
              
              
              
          <br/>
          <Grid item  xs={6} sm={10} md={4}>
        <div className="row"> 
        <h5>Departure Flight</h5>
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
       
         <Typography sx={{margin:"0 0 0 15px"}} variant="h4">{res.DepartureFlight.DepartureAirport} TO {res.DepartureFlight.DestinationAirport}</Typography>
         <Typography sx={{margin:"0 0 0 15px"}} variant="h9">Flight No. {res.DepartureFlight.FlightNumber}</Typography>

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
        
      <Container sx={{ py: 0 ,margin:"0px 0 0 -200px" }} maxWidth="md">
        <br/>
              
              <div className="row">
          </div>
          <br/>
          <Grid item  xs={6} sm={6} md={4}>
        <div className="row"> 
        <h5>Return Flight</h5>
            <div>
           
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
         <Typography sx={{margin:"0 0 0 15px"}} variant="h4">{res.ReturnFlight.DepartureAirport} TO {res.ReturnFlight.DestinationAirport}</Typography>
         <Typography sx={{margin:"0 0 0 15px"}} variant="h9">Flight No. {res.ReturnFlight.FlightNumber}</Typography>

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
        <h5>Booking Info </h5>
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
        <h5>Personal Information </h5>
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
            <br/>


          
         
      
      </Container>
      </Grid>
      </Box>
          </div>
          
        
      );

};

export default MyBooking;