import React, { useState, useEffect } from "react";
import ReservationsDataService from "../../services/reservation";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FlightIcon from "@mui/icons-material/Flight";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import EventIcon from "@mui/icons-material/Event";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EventSeatIcon from '@mui/icons-material/EventSeat';
import LuggageIcon from "@mui/icons-material/Luggage";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NumbersIcon from '@mui/icons-material/Numbers';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import {Box,Container,Typography,Grid,CardContent,CardActions,Card,ListItemAvatar,ListItem,Divider,List} from '@mui/material';
import { ButtonGroup } from "@mui/material";

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const UserReservations = props => {

 

    const user = props.user;
    const userid = user._id
    console.log(userid)
    const [reservations, setReservations] =useState([]);
    const forceUpdate = useForceUpdate();

    const deleteReservations = (resid) => {
      ReservationsDataService.delete(resid)
      .then(response => {
        retrieveReservations();
      })
        .catch(e => {
          console.log(e);
        });

    };
   const retrieveReservations = () => {
        ReservationsDataService.get(userid)
        
          .then(response => {
            setReservations(response.data.ReservationsList);
          })
          .catch(e => {
            console.log(e);
          });
      };


      useEffect(() => {
        retrieveReservations();
      }, []);

      const noRes = () => {

        if (reservations.length==0) return true; return false;
    
    
      }


      return(
        <div>
        <div className="row" style= {{width:"100rem"}}>
          <h1>My Reservations </h1><br/>

          {noRes() && ( <strong>You have no Reservations.</strong>)} 
          <Grid item  xs={12} sm={6} md={4}>
        {reservations.map((reservation) => {
          
          return (
           <div >
             <Container sx={{ py: 8 }} fullWidth>
             <Grid item  xs={12} sm={6} md={4}>
              <Card  sx={{ width:"1400px",height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <div className="card-body">
                  <h4 className="card-title">{reservation.DepartureFlight.DepartureAirport} TO {reservation.DepartureFlight.DestinationAirport }  </h4>
                  <ListItem>
                    <ListItemAvatar>
                  <ConfirmationNumberIcon style={{ transform: "scale(1)" }} />
                  </ListItemAvatar>
                  <Typography
                  sx={{ mt: 0.1 , fontSize:20}}
                  color="text.primary"
                  display="block"
                  variant="caption"
                   >Booking Number :{reservation.BookingNumber}</Typography>
                   </ListItem>
                  <p className="card-text" >
                  <div class="row">
                    
                  <div class="col-sm">
                    <Card  variant='outlined'sx={{ width:"400px",height: '500px', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Grid align="center" style={{ width: "450px", height: "300px",alignItems: "center",  }} item fullWidth container>
                  <h5 className="card-title"> Departure Flight</h5>
                 
                  <ListItem>
                  <ListItemAvatar>
            <EventIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container columns={16}>
            <Grid container item xs={7}>
              <Grid item align="left" xs={4}>
                <Typography
                  sx={{ mt: 0.1 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                 Date
                </Typography>
              </Grid>
              <Grid>
                <Typography>
                {reservation.DepartureFlight.Date}
                  
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem fullWidth>
          <ListItemAvatar>
            <FlightTakeoffIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid container item xs={6}>
              <Grid item align="left" xs={12}>
                <Typography
                  sx={{ mt: 0.1 }}
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
                    sx={{ mt: 0.1 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                    {reservation.DepartureFlight.DepartureTime}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemAvatar>
            <FlightLandIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid container item xs={6}>
              <Grid item align="left" xs={12}>
                <Typography
                  sx={{ mt: 0.1 }}
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
                    sx={{ mt: 0.1 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                   {reservation.DepartureFlight.ArrivalTime}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <AirplanemodeActiveIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid item align="left" xs={12}>
          <Typography
                  sx={{ mt: 0.1 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                  Flight Number
                </Typography>
                <Typography>{reservation.DepartureFlight.FlightNumber}</Typography>
                </Grid>
        </ListItem>
        <Divider />
                    <ListItem>
          <ListItemAvatar>
            <LuggageIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.1 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Baggage allowance
              </Typography>
            </Grid>
            <Typography>{reservation.DepartureFlight.BaggageAllowance}</Typography>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <AccessTimeIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.1 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Flight Duration
              </Typography>
            </Grid>
           <Grid>{reservation.DepartureFlight.TripDuration}</Grid>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <EventSeatIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.1 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Seats Selected
              </Typography>
            </Grid>
            <Typography>{reservation.DepSeats.sort().toString()}</Typography>
          </Grid>
        </ListItem>
        <Divider />

                    <ListItem>
          <ListItemAvatar>
            <AirlineSeatReclineExtraIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid item align="left" xs={12}>
          <Typography
                  sx={{ mt: 0.1 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                  Cabin Class
                </Typography>
                <Typography>{reservation.CabinClass}</Typography>
                </Grid>
        </ListItem>
        <Divider />
                    </Grid>
                    </CardContent>
                    </Card>
                    </div>
                    <div class="col-sm">
                      


                      
                    <Card  variant='outlined'sx={{ width:"400px",height: '500px', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Grid align="center" style={{ width: "450px", height: "300px",alignItems: "center",  }} item fullWidth container>
                  <h5 className="card-title"> Return Flight</h5>
                 
                  <ListItem>
                  <ListItemAvatar>
            <EventIcon style={{ transform: "scale(1.2)" }} />
          </ListItemAvatar>
          <Grid container columns={16}>
            <Grid container item xs={7}>
              <Grid item align="left" xs={4}>
                <Typography
                  sx={{ mt: 0.1 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                 Date
                </Typography>
              </Grid>
              <Grid>
                <Typography>
                {reservation.ReturnFlight.Date}
                  
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem fullWidth>
          <ListItemAvatar>
            <FlightTakeoffIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid container item xs={6}>
              <Grid item align="left" xs={12}>
                <Typography
                  sx={{ mt: 0.1 }}
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
                    sx={{ mt: 0.1 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                    {reservation.ReturnFlight.DepartureTime}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemAvatar>
            <FlightLandIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid container item xs={6}>
              <Grid item align="left" xs={12}>
                <Typography
                  sx={{ mt: 0.1 }}
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
                    sx={{ mt: 0.1 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                  >
                   {reservation.ReturnFlight.ArrivalTime}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <AirplanemodeActiveIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid item align="left" xs={12}>
          <Typography
                  sx={{ mt: 0.1 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                  Flight Number
                </Typography>
                <Typography>{reservation.ReturnFlight.FlightNumber}</Typography>
                </Grid>
        </ListItem>
        <Divider />
                    <ListItem>
          <ListItemAvatar>
            <LuggageIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.1 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Baggage allowance
              </Typography>
            </Grid>
            <Typography>{reservation.ReturnFlight.BaggageAllowance}</Typography>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <AccessTimeIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.1 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Flight Duration
              </Typography>
            </Grid>
           <Grid>{reservation.ReturnFlight.TripDuration}</Grid>
          </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <EventSeatIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid container>
            <Grid item align="left" xs={12}>
              <Typography
                sx={{ mt: 0.1 }}
                color="text.secondary"
                display="block"
                variant="caption"
              >
                Seats Selected
              </Typography>
            </Grid>
            <Typography>{reservation.RetSeats.sort().toString()}</Typography>
          </Grid>
        </ListItem>
        <Divider />

                    <ListItem>
          <ListItemAvatar>
            <AirlineSeatReclineExtraIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid item align="left" xs={12}>
          <Typography
                  sx={{ mt: 0.1 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                  Cabin Class
                </Typography>
                <Typography>{reservation.CabinClass}</Typography>
                </Grid>
        </ListItem>
        <Divider />
                    </Grid>
                    </CardContent>
                    </Card>
                    </div>
                    





                    <div class="col-sm"> 
                    <Card variant='outlined'sx={{ width:"400px",height: '500px', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                    <Grid align="center" style={{ width: "450px", height: "300px",alignItems: "center",  }} item fullWidth container>
                  <h5 className="card-title">  User info</h5>
                  <ListItem>
          <ListItemAvatar>
            <PersonIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid item align="left" xs={12}>
          <Typography
                  sx={{ mt: 1 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                  First Name
                </Typography>
                <Typography>{reservation.User.firstname}</Typography>
                </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <PeopleAltIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid item align="left" xs={12}>
          <Typography
                  sx={{ mt: 1}}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                  Last Name
                </Typography>
                <Typography>{reservation.User.lastname}</Typography>
                </Grid>
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemAvatar>
            <NumbersIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid item align="left" xs={12}>
          <Typography
                  sx={{ mt: 1 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                 Passport Number
                </Typography>
                <Typography>{reservation.User.passportnumber}</Typography>
                </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <AlternateEmailIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid item align="left" xs={12}>
          <Typography
                  sx={{ mt: 1 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                 Email
                </Typography>
                <Typography>{reservation.User.email}</Typography>
                </Grid>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <AttachMoneyIcon style={{ transform: "scale(1)" }} />
          </ListItemAvatar>
          <Grid item align="left" xs={12}>
          <Typography
                  sx={{ mt: 1 }}
                  color="text.secondary"
                  display="block"
                  variant="caption"
                >
                Price
                </Typography>
                <Typography>{reservation.Price}</Typography>
                </Grid>
        </ListItem>
        <Divider />

                   
                    <ButtonGroup style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '4vh' ,marginTop:'1vh'}}>
                      
                    </ButtonGroup>
                    </Grid>
                    </CardContent>
                    </Card>
                    </div>
                    </div>
      

                    <ButtonGroup style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '4vh' ,marginTop:'1vh'}}>
                    <Button variant='contained'  size='small' color='info' onClick={() =>{ReservationsDataService.mail(reservation);}}>Mail My Booking</Button> 
                    <Link to={{ pathname:"/flights/DepFlight", state:reservation}} className="btn btn-success">Select Departure Flight</Link>  
                    <Link to={{ pathname:"/flights/RetFlight", state:reservation}} className="btn btn-success">Select Return Flight</Link>  
                    <Link to={{ pathname:"/flights", state:reservation}} className="btn btn-success">Change flights</Link>  
                    <Button variant='contained'  size='small' color='error' onClick={() => {if(window.confirm('Are you sure you want to cancel this reservation?')){deleteReservations(reservation._id)}}}>Cancel Reservation</Button> 
                      </ButtonGroup>

                    
                  </p>
                </div>
                </CardContent>
              </Card>
            </Grid>
            </Container>
           </div>
           
          );
        })}
        </Grid>
      </div>
      </div>
      )
}
export default UserReservations;