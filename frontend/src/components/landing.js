import React, { useState, useEffect } from "react";
import FlightDataService from "../services/flight";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const Landing = props => {



    const [searchDepartDate, setSearchDepartDate ] = useState("");
    const [searchReturnDate, setSearchReturnDate ] = useState("");
    const [searchDepartAirpt, setSearchDepartAirpt ] = useState("");
    const [searchArrivalAirpt, setSearchArrivalAirpt ] = useState("");
    const [searchNoPassenger,setSearchNoPassenger]=useState("");
    const [searchClass,setSearchClass]=useState("");

    const onChangeSearchDepartAirpt = e => {
        const searchDepartAirpt = e.target.value;
        setSearchDepartAirpt(searchDepartAirpt);
      };
    
      const onChangeSearchArrivalAirpt = e => {
        const searchArrivalAirpt = e.target.value;
        setSearchArrivalAirpt(searchArrivalAirpt);
        
      };
    const onChangeSearchClass=e=>{
        const searchClass=e.value;
        setSearchClass(searchClass);
    }
    const onChangeSearchDepartDate = e=>{
        const searchDepartDate=e.target.value;
        setSearchDepartDate(searchDepartDate);
    }
    const onChangeSearchReturnDate = e =>{
        const searchReturnDate=e.target.value;
        setSearchReturnDate(searchReturnDate);
    }
    const onChangeSearchNoPassenger =e =>{
        const searchNoPassenger=e.target.value;
        setSearchNoPassenger(searchNoPassenger);
    }
    const refreshList = () => {
       setSearchDepartAirpt("");
       setSearchArrivalAirpt("");
       setSearchClass("");
       setSearchDepartDate("");
       setSearchNoPassenger("");
       setSearchReturnDate("");
       setSearchClass("Enter Class Cabin");
      };
      const options = [
        'Economy', 'Business Class', 'First Class'
      ];

      const hashobj = {"DepatureDate":searchDepartDate, "DepartureAirport":searchDepartAirpt, "DestinationAirport":searchArrivalAirpt , "NumberOfPassengers":searchNoPassenger, "CabinClass":searchClass }

    return (
        <div>
          <div className="row pb-1">
            
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
            <div className= "input-group col-lg-4">
            <input
                type="text"
                className="form-control"
                placeholder="Destination Airport"
                value={searchArrivalAirpt}
                onChange={onChangeSearchArrivalAirpt}
              />
              <div className="input-group-append">
               
               </div>
            </div>

            <div className="input-group col-lg-4"> 
              <input
                type="text"
                className="form-control"
                placeholder="Departure Date"
                value={searchDepartDate}
                onChange={onChangeSearchDepartDate}
              />
              <div className="input-group-append">
               
              </div>
            </div>
            <div className="input-group col-lg-4"> 
              <input
                type="text"
                className="form-control"
                placeholder="Return Date"
                value={searchReturnDate}
                onChange={onChangeSearchReturnDate}
              />
              <div className="input-group-append">
               
              </div>
            </div>
            

            <div className="input-group col-lg-4"> 
              <input
                type="text"
                className="form-control"
                placeholder="Number of tickets"
                value={searchNoPassenger}
                onChange={onChangeSearchNoPassenger}
              />
              <div className="input-group-append">
               
              </div>
            </div>
            <div> 
            <Dropdown options={options} onChange={onChangeSearchClass} value ={searchClass} placeholder="Select Cabin Class" />
              
              <div className="input-group-append">
               
              </div>
            </div>
    
            <div className="input-group col-lg-4"> 
              <div className="input-group-append">
              <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={refreshList}
                >
                  Reset filters
                </button>
                
                <Link to={{ pathname: "/flights/" + props.match.params.id + "/edit", state: hashobj }} className="btn btn-primary">
           Search
          </Link> &nbsp;
              </div>
            </div>
           
          </div>
          
        </div>
      );

} ;
export default Landing;