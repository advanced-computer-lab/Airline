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

const ReviewSelection = props => {

    const state = props.location.state

    const flight = state.flight
    const returnFlight=state.depFlight
    const cabin = state.cabin
    const noseats = state.noseats
    const noadults = state.noadults
    const nochild = noseats-noadults
    

    const user = props.User

    return(
            <div  classname="row">
              <Grid sx={{justifyContent:"center",textAlign:"center"}}>
              <h1>You selected the following flights</h1>
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
             <Typography> {"$"+returnFlight.Price} </Typography>
             
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
                <Typography> {"$"+returnFlight.Price/2} </Typography>
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
 <Typography> {"$"+flight.Price} </Typography>
 
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
    <Typography> {"$"+flight.Price/2} </Typography>
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
            <strong>Total Price: ${noadults*(flight.Price+returnFlight.Price) + nochild*((flight.Price+returnFlight.Price)/2)}<br/><br/></strong><br/>
            </Grid>
  <Grid sx={{justifyContent:"center",textAlign:"center",margin:"-20px 0 0 0"}}>
  {user?
                 ( <Link to={{ pathname: "/flights/ChooseDepSeats", state: {returnFlight, flight, noseats, cabin, noadults} }} className="btn btn-success">
            Continue Booking
          </Link> )
          :(<Link to={{ pathname: "/login", state: {returnFlight, flight, noseats, cabin, reserving:true, noadults} }} className="btn btn-success">
          Login to continue booking
        </Link>)
          }
          
          </Grid><br/><br/>
          
  </div>
        
 
    );

}

export default ReviewSelection;
