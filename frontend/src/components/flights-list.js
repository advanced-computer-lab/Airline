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
  };

  const find = (query, by) => {
    FlightDataService.find(query, by)
      .then(response => {
        console.log(response.data);
        setFlights(response.data.flights);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByFlightNum = () => {
    find(searchFlightNum, "FlightNumber")
  };

  const findByDepartTime = () => {
    find(searchDepartTime, "DepartureTime")
  };

  const findByArrivalTime = () => {
    find(searchArrivalTime, "ArrivalTime")
  };

  const findByDate = () => {
    find(searchDate, "Date")
  };

  const findByDepartAirpt = () => {
    find(searchArrivalAirpt, "DepartureAirport")
  };

  const findByArrivalAirpt = () => {
    find(searchArrivalAirpt, "DestinationAirport")
  };


  return (
    <div>
      <div className="row pb-1">
        <div className="input-group col-lg-4"> 
          <input
            type="text"
            className="form-control"
            placeholder="Search by Flight Number"
            value={searchFlightNum}
            onChange={onChangeSearchFlightNum}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByFlightNum}
            >
              Search
            </button>
          </div>
        </div>
        <div className="input-group col-lg-4"> 
          <input
            type="text"
            className="form-control"
            placeholder="Search by Departure Time"
            value={searchDepartTime}
            onChange={onChangeSearchDepartTime}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByDepartTime}
            >
              Search
            </button>
          </div>
        </div>
        <div className="input-group col-lg-4"> 
          <input
            type="text"
            className="form-control"
            placeholder="Search by Arrival Time"
            value={searchArrivalTime}
            onChange={onChangeSearchArrivalTime}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByArrivalTime}
            >
              Search
            </button>
          </div>
        </div>
        <div className="input-group col-lg-4"> 
          <input
            type="text"
            className="form-control"
            placeholder="Search by Date"
            value={searchDate}
            onChange={onChangeSearchDate}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByDate}
            >
              Search
            </button>
          </div>
        </div>
        <div className="input-group col-lg-4"> 
          <input
            type="text"
            className="form-control"
            placeholder="Search by Departure Airport"
            value={searchDepartAirpt}
            onChange={onChangeSearchDepartAirpt}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByDepartAirpt}
            >
              Search
            </button>
          </div>
        </div>

        <div className="input-group col-lg-4"> 
          <input
            type="text"
            className="form-control"
            placeholder="Search by Destination Airport"
            value={searchDepartAirpt}
            onChange={onChangeSearchArrivalAirpt}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByArrivalAirpt}
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
                    <strong>Departure Time: </strong>{flight.DepartureTime}<br/>
                    <strong>Arrival Time: </strong>{flight.ArrivalTime}
                  </p>
                  <div className="row">
                  <Link to={"/flights/"+flight._id} className="btn btn-primary col-lg-5 mx-1 mb-1">
                    View Flight
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