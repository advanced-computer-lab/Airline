import React, { useState, useEffect } from "react";
import FlightDataService from "../services/flight";
import { Link } from "react-router-dom";

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


  return (
    <div>
      <div className="row pb-1">
        <div className="input-group col-lg-4"> 
          <input
            type="text"
            className="form-control"
            placeholder="Flight Number"
            value={searchFlightNum}
            onChange={onChangeSearchFlightNum}
          />
          <div className="input-group-append">
           
          </div>
        </div>
        <div className="input-group col-lg-4"> 
          <input
            type="text"
            className="form-control"
            placeholder="Departure Time"
            value={searchDepartTime}
            onChange={onChangeSearchDepartTime}
          />
          <div className="input-group-append">
           
          </div>
        </div>
        <div className="input-group col-lg-4"> 
          <input
            type="text"
            className="form-control"
            placeholder="Arrival Time"
            value={searchArrivalTime}
            onChange={onChangeSearchArrivalTime}
          />
          <div className="input-group-append">
           
          </div>
        </div>
        <div className="input-group col-lg-4"> 
          <input
            type="text"
            className="form-control"
            placeholder="Date"
            value={searchDate}
            onChange={onChangeSearchDate}
          />
          <div className="input-group-append">
           
          </div>
        </div>
        <div className="input-group col-lg-4"> 
          <input
            type="text"
            className="form-control"
            placeholder="Departure Airport"
            value={searchDepartAirpt}
            onChange={onChangeSearchDepartAirpt}
          />
          <div className="input-group-append">
           
          </div>
        </div>

        <div className="input-group col-lg-4"> 
          <input
            type="text"
            className="form-control"
            placeholder="Destination Airport"
            value={searchArrivalAirpt}
            onChange={onChangeSearchArrivalAirpt}
          />
          <div className="input-group-append">
          <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={refreshList}
            >
              Reset filters
            </button>
            
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByAll}
            >
              Search
            </button>
          </div>
        </div>
       
      </div>
      <div className="row">
        {flights.map((flight) => {
          //const address = `${restaurant.address.building} ${restaurant.address.street}, ${restaurant.address.zipcode}`;
          return (
            <div className="col-lg-4 pb-1">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{flight.DepartureAirport} TO {flight.DestinationAirport}</h5>
                  <p className="card-text">
                   <strong>Date: </strong>{flight.Date}<br/>
                    <strong>Departure Time: </strong>{flight.DepartureTime}  &nbsp;
                    <strong>Arrival Time: </strong>{flight.ArrivalTime}
                  </p>
                  <div className="row">
                  <Link to={"/flights/"+flight._id} className="btn btn-primary col-lg-5 mx-1 mb-1">
                    Flight Details
                  </Link>
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