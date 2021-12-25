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
import { Carousel } from 'react-bootstrap';
import '../main.css';

const ReviewSelection = props => {

    const state = props.location.state

    const res = props.location.state.res
    let edit =false

    let oldprice = 0 

    if(res!=null) {edit = true; oldprice = res.Price} 

    const flight = state.flight
    const returnFlight=state.depFlight
    const cabin = state.cabin
    const noseats = state.noseats
    const noadults = state.noadults
    const nochild = noseats-noadults
    let pricem = 1

  if (cabin=="Business Class") pricem = 1.5
  else if (cabin=="First Class") pricem = 2
    

    const user = props.User

    return(
            <div   classname="row">
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
    marginTop={-2}
    backgroundColor="#f0f6f7ff"
  >
              <Grid sx={{justifyContent:"center",textAlign:"center"}}>
              
              <br/><div style={{display: 'flex',  justifyContent:'left', alignItems:'left', height: '5vh'}}>
      <Button variant='contained'  size='small' color='primary' onClick={() => {props.history.goBack()}}>Back</Button>
          
      </div>
              <div style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '5vh'}}>
      {edit&&
          ((<Link to={"/ViewReservations"} className="btn btn-danger" onClick={() => {props.history.push("/ViewReservations")}}>Cancel</Link>))
          
          }
          </div>
          <br/><h1>You selected the following flights</h1>
              </Grid>
              <Grid container sx={{justifyContent:"space-evenly",margin:"70px 0 0 0"}}>
              <div class="col-ig-4 pb-1">
        <div className="row">  
        <Grid item>
        <h3>Departure Flight</h3>
        
     
            <div >
            <Grid item  xs={12} sm={6} md={4}>
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
              <Grid>
                <Typography>{returnFlight.from}</Typography>
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
            <Typography>{returnFlight.BaggageAllowance}</Typography>
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
             <Typography> {"$"+(returnFlight.Price*pricem)} </Typography>
             
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
                <Typography> {"$"+(returnFlight.Price*pricem)/2} </Typography>
              </Grid>
            </Grid>
            
            </Grid>
            </ListItem>
            </List>
            </Grid>
              </CardContent>
        

        
        </Card>
        </Grid>
        </div>
        </Grid>
        </div>
        
        </div>  <Grid item>
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
  <Grid>
    <Typography>{flight.from}</Typography>
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
  </Card>
 
  </Grid>
  </Grid>
  
  </Grid><Grid sx={{justifyContent:"center",textAlign:"center",margin:"60px 0 0 0"}}>
          <strong>Total Travellers: {noseats} ({noadults} Adults, {nochild} Children)</strong><br/>
            <strong>Total Price: ${noadults*(pricem*(flight.Price+returnFlight.Price)) + nochild*(pricem*((flight.Price+returnFlight.Price))/2)}</strong><br/>
            <strong>Total to be paid: ${(noadults*(pricem*(flight.Price+returnFlight.Price)) + nochild*(pricem*((flight.Price+returnFlight.Price))/2))-oldprice}<br/><br/></strong><br/>
            </Grid>
  <Grid sx={{justifyContent:"center",textAlign:"center",margin:"-20px 0 0 0"}}>
  {user?
                 (<Button variant='contained'  size='small' color='success' onClick={() => {props.history.push("/flights/ChooseDepSeats", {returnFlight, flight, noseats, cabin, noadults, res})}}>Continue Booking</Button>
                 )
          :(        <Button variant='contained'  size='small' color='success' onClick={() => {props.history.push("/login", {returnFlight, flight, noseats, cabin, reserving:true, noadults, res})}}>Login to Continue Booking</Button>          )  
          }
          
          </Grid><br/><br/>
          </Box>
  </div>
        
 
    );

}

export default ReviewSelection;