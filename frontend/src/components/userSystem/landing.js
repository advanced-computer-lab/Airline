import React, { useState, useEffect } from "react";
import FlightDataService from "../../services/flight";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import BackgroundSlider from 'react-background-slider'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

const Landing = props => {

  const res = props.location.state;

  let edit =false

    if(res!=null) edit = true;

  // const str = JSON.stringify(res);
  //       console.log("res:"+str)


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
          
          <BackgroundSlider
          images={ [image3]}
          duration={10000}
          transition={2}
        />
         
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
      
    >
      <br/><div style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '5vh'}}>
      {edit&&
          ((<Button variant='contained'  size='small' color='error' onClick={() => {props.history.push("/ViewReservations")}}>Cancel</Button>))
          
          }
          </div>
      
          <h1>Welcome to AS Airlines.</h1>
          <h4>Where would you like to go?</h4>
          
            <Box sx={{ minWidth: 1000 } }>
            <FormControl  variant='filled' size='small' >
              <TextField
                type="text"
                variant="outlined"
                className="form-control"
                label="Departure Airport"
                placeholder="Departure Airport,  ex.CAI"
                value={searchDepartAirpt}
                onChange={onChangeSearchDepartAirpt}
              />
              </FormControl>
            <TextField
                type="text"
                label="Destination Airport"
                variant="outlined"
                className="form-control"
                placeholder="Destination Airport"
                value={searchArrivalAirpt}
                onChange={onChangeSearchArrivalAirpt}
              />
              <div className="input-group-append">
               
               </div>
               </Box>
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
              
          <Button variant='contained'  size='small' color='success' onClick={() => {props.history.push("/flights/SelectDeparture", {hashobj, res})}}>Search</Button> &nbsp;

              </div>
            </div>
           
          </Box>
          
        </div>
      );

} ;
export default Landing;