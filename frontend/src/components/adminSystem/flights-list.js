import React, { useState, useEffect } from "react";
import FlightDataService from "../../services/flight";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const FlightsList = props => {
  const [flights, setFlights] = useState([]);
  const [searchFlightNum, setSearchFlightNum ] = useState("");
  const [searchDepartTime, setSearchDepartTime ] = useState("");
  const [searchArrivalTime, setSearchArrivalTime ] = useState("");
  const [searchDate, setSearchDate ] = useState("");
  const [searchDepartAirpt, setSearchDepartAirpt ] = useState("");
  const [searchArrivalAirpt, setSearchArrivalAirpt ] = useState("");
  

  useEffect(() => {
    retrieveFlights();
  }, []);

  const onChangeSearchFlightNum = e => {
    const searchFlightNum = e.target.value;
    setSearchFlightNum(searchFlightNum);
  };

  const onChangeSearchDepartTime = e => {
    const searchDepartTime = e.target.value;
    setSearchDepartTime(searchDepartTime);
  };

  const onChangeSearchArrivalTime = e => {
    const searchArrivalTime = e.target.value;
    setSearchArrivalTime(searchArrivalTime);
  };

  const onChangeSearchDate = e => {
    const searchDate = e.target.value;
    setSearchDate(searchDate);
  };

  const onChangeSearchDepartAirpt = e => {
    const searchDepartAirpt = e.target.value;
    setSearchDepartAirpt(searchDepartAirpt);
  };

  const onChangeSearchArrivalAirpt = e => {
    const searchArrivalAirpt = e.target.value;
    setSearchArrivalAirpt(searchArrivalAirpt);
    
  };

  const retrieveFlights = () => {
    FlightDataService.getAll()
      .then(response => {
        console.log(response.data);
        setFlights(response.data.flights);
        
      })
      .catch(e => {
        console.log(e);
      });
  };


  const refreshList = () => {
    retrieveFlights();
    setSearchFlightNum("");
    setSearchDepartTime("");
    setSearchArrivalTime("");
    setSearchDate("");
    setSearchDepartAirpt("");
    setSearchArrivalAirpt("");
  };

  const find = (query) => {
    FlightDataService.findByParams(query)
      .then(response => {
        console.log(response.data);
        setFlights(response.data.flights);
      })
      .catch(e => {
        console.log(e);
      });
  };

 
  const findByAll = () => {
    find({"FlightNumber":searchFlightNum, "DepartureTime": searchDepartTime, "ArrivalTime": searchArrivalTime, "Date": searchDate, "DepartureAirport": searchDepartAirpt, "DestinationAirport": searchArrivalAirpt})
  }

  const noFlights = () => {

    if (flights.length==0) return true; return false;


  }


  return (
    <div>
      <div className="row">
          <h1>Flight Management System</h1><br/>
          
          
          </div>
          <br/>
          <strong>Search</strong>
          <br/>
      <div className="row pb-1">
        <div className="input-group col-lg-4"> 
          <TextField
            id="Flight Number"
            label='Flight Number'
            value={searchFlightNum}
            onChange={onChangeSearchFlightNum}
            sx={{background:'white'  }}
            variant='outlined'
            fullWidth
            margin='normal'
          />
          <div className="input-group-append">
           
          </div>
        </div>
        
        <div className="input-group col-lg-4"> 
          <TextField

            id="Departure Time"
            label="Departure Time"
            value={searchDepartTime}
            onChange={onChangeSearchDepartTime}
            sx={{background:'white'  }}
            variant='outlined'
            fullWidth
            margin='normal'
          />
          <div className="input-group-append">
           
          </div>
        </div>
        <div className="input-group col-lg-4"> 
          <TextField
            id="Arrival Time"
            label="Arrival Time"
            value={searchArrivalTime}
            onChange={onChangeSearchArrivalTime}
            sx={{background:'white'  }}
            variant='outlined'
            fullWidth
            margin='normal'
          />
          <div className="input-group-append">
           
          </div>
        </div>
        <div className="input-group col-lg-4"> 
          <input
            type="date"
            className="form-control"
            placeholder="Date"
            value={searchDate}
            onChange={onChangeSearchDate}
            margin="normal"
          />
          <div className="input-group-append">
           
          </div>
        </div>
        <div className="input-group col-lg-4"> 
          <TextField
            id="Departure Airport"
            label="Departure Airport"
            value={searchDepartAirpt}
            onChange={onChangeSearchDepartAirpt}
            sx={{background:'white'  }}
            variant='outlined'
            fullWidth
            margin='normal'
          />
          <div className="input-group-append">
           
          </div>
        </div>

        <div className="input-group col-lg-4"> 
          <TextField
            id="Destination Airport"
            label="Destination Airport"
            value={searchArrivalAirpt}
            onChange={onChangeSearchArrivalAirpt}
            sx={{background:'white'  }}
            variant='outlined'
            fullWidth
            margin='normal'
          />
          <div className="input-group-append">
          <ButtonGroup style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '4vh' ,marginTop:'1vh'}}>
          <Button
              onClick={refreshList}
              variant="contained"
              color="primary"
              size="large"
            >
              Reset filters
            </Button>
            
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={findByAll}
            >
              Search
            </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      <br/>
      <strong>Flights: </strong><br/>
      <Button href="/admin/flights/create" variant='contained' size='large'>
            Create New Flight
          </Button>


      <div className="row">

      {noFlights() && ( <strong>no flights match search criteria.</strong>)}
        {flights.map((flight) => {
          return (
            <div className="col-lg-4 pb-1">
              <div className="card" style={{border : "1px solid #111111"}}>
                <div className="card-body">
                  <h5 className="card-title">{flight.DepartureAirport} TO {flight.DestinationAirport}</h5>
                  <p className="card-text">
                  <strong>Flight Number: </strong>{flight.FlightNumber}<br/>
                   <strong>Date: </strong>{flight.Date}<br/>
                    <strong>Departure Time: </strong>{flight.DepartureTime}<br/>
                    <strong>Arrival Time: </strong>{flight.ArrivalTime}<br/>
                    <strong>First Class Seats: </strong>{flight.FirstSeats} <br/>
                    <strong>Business Class Seats: </strong>{flight.BusinessSeats} <br/>
                    <strong>Economy Class Seats: </strong>{flight.EconomySeats} 
                  </p>
                  <div>
                  <Link to={{ pathname: "/admin/flights/" + flight._id + "/edit", state: flight }} className="btn btn-primary">
            Edit
          </Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="btn btn-danger" onClick={() => {if(window.confirm('Are you sure you want to delete this flight?')){FlightDataService.deleteFlight(flight._id).then(response => {retrieveFlights();})}}}>Delete</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}


      </div>
    </div>
  );
};

export default FlightsList;