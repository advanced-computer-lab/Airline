import React, { useState, useEffect } from "react";
import axios from 'axios';
import FlightDataService from "../../services/flight";
import 'react-dropdown/style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-dropdown';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { Link } from "react-router-dom";

function CabinSearch(){

    const onChangeSearchClass=e=>{
        const searchClass=e.value;
        setSearchClass(searchClass);
    }
    const onChangeSearchDepartDate = e=>{
        const searchDepartDate=e.target.value;
        setSearchDepartDate(searchDepartDate);
    }
    const options = [
        'Economy', 'Business Class', 'First Class'
      ];
    const [searchDepartDate, setSearchDepartDate ] = useState("");
    const [searchClass,setSearchClass]=useState("Economy");
    const hashobj = {DepartureDate:searchDepartDate, CabinClass:searchClass }

return(  <div>
    <div> 
    <strong>Cabin Class: </strong>
    <Dropdown options={options} onChange={onChangeSearchClass} value ={searchClass} placeholder="Economy" />
      
      <div className="input-group-append">
       
      </div>
    </div>
     
     <div className="input-group col-lg-4"> 
    <br>
    </br>
    
      <TextField
        id="date"
        label="Departure Date"
        type="date"
        defaultValue="2017-05-24"
        value={searchDepartDate}
        onChange={onChangeSearchDepartDate}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
        
       
       </div>
       <Link to={{ pathname: "/flights/SelectDeparture", state: hashobj }} className="btn btn-success">
           Search
          </Link>
       </div>
)
}
export default CabinSearch;
