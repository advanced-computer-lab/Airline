import React, { useState, useEffect } from "react";
import FlightDataService from "../../services/flight";
import { Link } from "react-router-dom";
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
import EventSeatIcon from '@mui/icons-material/EventSeat';
import LuggageIcon from "@mui/icons-material/Luggage";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {Box,Container,Typography,Grid,CardContent,CardActions,Card,ListItemAvatar,ListItem,Divider,List} from '@mui/material';
import { ButtonGroup } from "@mui/material";

const EditDepFlight = props => {

    const state = props.location.state

    const returnFlight=state.DepartureFlight
    return(
            <div  style={{margin:"15px"}}>
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
               <h3>Departure Flight</h3>
               <h5 className="card-title">{returnFlight.DepartureAirport} TO {returnFlight.DestinationAirport}</h5>
              <Container sx={{ py: 8 }} maxWidth="md">
              <div className="row">
          </div>
          <br/>
          <Grid item  xs={12} sm={6} md={4}>
        <div className="row"> 
       
            <div >
           
            <Card
              sx={{ width:"500px",height: '600px', display: 'flex', flexDirection: 'column' }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
              
                  <Grid style={{ width: "450px" }} fullWidth container>
      <Grid
        align="center"
        style={{
          
          width: "450px",
          height: "550px",
          alignItems: "center",
        }}
        item
        fullWidth
        container
      >
         <Typography sx={{margin:"0 0 0 15px"}} variant="h4">Flight No. {returnFlight.FlightNumber}</Typography>

         <List
        sx={{
          width: "450px",
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
                <Typography>{state.CabinClass}</Typography>
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
            <Typography>{state.DepSeats.sort().toString()}</Typography>
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
                Price
              </Typography>
            </Grid>
            <Typography>{state.Price}</Typography>
          </Grid>
        </ListItem>
        <Divider />
              </List>
              <ButtonGroup style={{display: 'flex', height: '5vh' ,marginTop:'1vh',marginLeft:'350px'}}>  
                  <Link to={{ pathname: "/flights/EditDepSeats", state: state}} className="btn btn-success">Edit Seats</Link>   
                    </ButtonGroup>
                    </Grid>
                    </Grid>
                </CardContent>
              </Card>
            </div>
        
        </div>
        </Grid>

        <br/>
        </Container>
        </Box>
            </div>
            
    );

}

export default EditDepFlight;