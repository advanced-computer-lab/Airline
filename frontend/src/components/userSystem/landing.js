import React, { useState, useEffect } from "react";
import FlightDataService from "../../services/flight";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const Landing = props => {



    const [searchDepartDate, setSearchDepartDate ] = useState("");
    const [searchReturnDate, setSearchReturnDate ] = useState("");
    const [searchDepartAirpt, setSearchDepartAirpt ] = useState("");
    const [searchArrivalAirpt, setSearchArrivalAirpt ] = useState("");
    const [searchNoAdults,setSearchNoAdults]=useState("1, Adults");
    const [searchNoChildren,setSearchNoChildren]=useState("0, Children");
    const [searchClass,setSearchClass]=useState("Economy");
    

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
    const onChangeSearchNoAdults =e =>{
        const searchNoAdults=e.value+", Adults";
        setSearchNoAdults(searchNoAdults);
    }
    const onChangeSearchNoChildren =e =>{
      const searchNoChildren=e.value+", Children";
      setSearchNoChildren(searchNoChildren);
  }

    const refreshList = () => {
       setSearchDepartAirpt("");
       setSearchArrivalAirpt("");
       setSearchClass("");
       setSearchDepartDate("");
       setSearchNoAdults("1, Adult");
       setSearchNoChildren("0, Children");
       setSearchReturnDate("");
       setSearchClass("Economy");
      };
      const options = [
        'Economy', 'Business Class', 'First Class'
      ];

      const numbers = [
        "1","2","3","4","5","6","7","8","9"
      ];

      const hashobj = {DepartureDate:searchDepartDate, DepartureAirport:searchDepartAirpt, DestinationAirport:searchArrivalAirpt ,ReturnDate:searchReturnDate, NumberOfAdults:searchNoAdults.charAt(0),NumberOfChildren:searchNoChildren.charAt(0), CabinClass:searchClass }

    return (
        <div>
          <div className="row pb-1">

          <h1>Welcome! </h1><br/>
          <h2>Let the journey begin. </h2><br/>
          </div>
          <br/>
          <div>
          <strong>Where would you like to go?</strong>
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
            
            &nbsp;
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

            
            

            <div> 
            <strong>Number of Travellers: </strong>
            <Dropdown options={numbers} onChange={onChangeSearchNoAdults} value ={searchNoAdults} placeholder="1, Adults" />
              
              <div className="input-group-append">
               
              </div>
            </div>
           

            <div> 
            <Dropdown options={numbers} onChange={onChangeSearchNoChildren} value ={searchNoChildren} placeholder="0, Children" />
              
              <div className="input-group-append">
               
              </div>
            </div>

            <div> 
            <strong>Cabin Class: </strong>
            <Dropdown options={options} onChange={onChangeSearchClass} value ={searchClass} placeholder="Economy" />
              
              <div className="input-group-append">
               
              </div>
            </div>

            <strong>Departure Date: </strong>
            <div className="input-group col-lg-4"> 
            
              <input
                type="date"
                className="form-control"
                placeholder="Departure Date"
                value={searchDepartDate}
                onChange={onChangeSearchDepartDate}
              />
              <div className="input-group-append">
               
              </div>
            </div>
            <strong>Return Date: </strong>
            <div className="input-group col-lg-4"> 
              <input
                type="date"
                className="form-control"
                placeholder="Return Date"
                value={searchReturnDate}
                onChange={onChangeSearchReturnDate}
              />
              <div className="input-group-append">
               </div>
              </div>
              
              <div>
              <br/>
              <div className="row">
              
                
                <Link to={{ pathname: "/flights/SelectDeparture", state: hashobj }} className="btn btn-primary">
           Search
          </Link> &nbsp;
              </div>
            </div>
           
          </div>
          
        </div>
      );

} ;
export default Landing;