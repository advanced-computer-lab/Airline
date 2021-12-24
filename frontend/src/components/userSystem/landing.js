import React, { useState, useEffect, Fragment } from "react";
import { Carousel } from 'react-bootstrap'
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
import '../main.css'
import { Icon } from '@iconify/react';

const Landing = props => {

  const res = props.location.state;

  let edit = false

  if (res != null) edit = true;

  // const str = JSON.stringify(res);
  //       console.log("res:"+str)


  const [searchDepartDate, setSearchDepartDate] = useState("");
  const [searchReturnDate, setSearchReturnDate] = useState("");
  const [searchDepartAirpt, setSearchDepartAirpt] = useState("");
  const [searchArrivalAirpt, setSearchArrivalAirpt] = useState("");

  const [searchNoAdults, setSearchNoAdults] = useState("1, Adults");
  const [searchNoChildren, setSearchNoChildren] = useState("0, Children");
  const [searchClass, setSearchClass] = useState("Economy");


  const onChangeSearchDepartAirpt = e => {
    const searchDepartAirpt = e.target.value;
    setSearchDepartAirpt(searchDepartAirpt);
  };

  const onChangeSearchArrivalAirpt = e => {
    const searchArrivalAirpt = e.target.value;
    setSearchArrivalAirpt(searchArrivalAirpt);

  };

  const onChangeSearchDepartDate = e => {
    const searchDepartDate = e.value;
    setSearchDepartDate(searchDepartDate);
  }
  const onChangeSearchReturnDate = e => {
    const searchReturnDate = e.target.value;
    setSearchReturnDate(searchReturnDate);
  }


  //Select


  const onChangeSearchNoAdults = e => {
    const searchNoAdults = e.value + ", Adults";
    setSearchNoAdults(searchNoAdults);
  }
  const onChangeSearchNoChildren = e => {
    const searchNoChildren = e.value + ", Children";
    setSearchNoChildren(searchNoChildren);
  }
  const onChangeSearchClass = e => {
    const searchClass = e.value;
    setSearchClass(searchClass);
  }

  const refreshList = () => {
    setSearchDepartAirpt("");
    setSearchArrivalAirpt("");
    setSearchDepartDate("");
    setSearchReturnDate("");

    setSearchNoAdults("1, Adults");
    setSearchNoChildren("0, Children");
    setSearchClass("Economy");
  };
  const options = [
    'Economy', 'Business Class', 'First Class'
  ];

  const numbers = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9"
  ];

  const hashobj = { DepartureDate: searchDepartDate, DepartureAirport: searchDepartAirpt, DestinationAirport: searchArrivalAirpt, ReturnDate: searchReturnDate, NumberOfAdults: searchNoAdults.charAt(0), NumberOfChildren: searchNoChildren.charAt(0), CabinClass: searchClass }

  return (
    // <div class="p-0 container-fluid">

    /* <BackgroundSlider
        images={ [image3]}
        duration={10000}
        transition={2}
      /> */

    <div>
      <Carousel>
        <Carousel.Item id="carousel-item">
          <img
            id="image-3"
            className="d-block w-100"
            src={image3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 id="greeting-title">Welcome to AS Airlines.</h1>
            <h4>Where would you like to go?</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="carousel-item">
          <img
            id="image-2"
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1 id="greeting-title"> Welcome to AS Airlines.</h1>
            <h4>Where would you like to go?</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="carousel-item">
          <img
            id="image-1"
            className="d-block w-100"
            src={image1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 id="greeting-title">Welcome to AS Airlines.</h1>
            <h4>Where would you like to go?</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-8">
            <div class="bg-white">
              <div class="card shadow mb-5 bg-white rounded">

                <div class="card-body">
                  <h5 id="booking-form-title" class="card-title text-center shadow mb-5 rounded">Where would you like to go?&nbsp;<Icon icon="ion:airplane-outline" height="28" width="28" /></h5>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade active show" id="faq_tab_1" role="tabpanel" aria-labelledby="faq_tab_1-tab">
                      <div class="container p-3">

                        <div class="input-group mb-3"> <input type="text" class="form-control" placeholder="Departure Airport,  ex.CAI" value={searchDepartAirpt} onChange={onChangeSearchDepartAirpt} /> <input type="text" class="form-control" placeholder="Destination Airport" value={searchArrivalAirpt} onChange={onChangeSearchArrivalAirpt} /> </div>
                        <div class="input-group mb-3">
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Departure Date"
                            value={searchDepartDate}
                            onChange={onChangeSearchDepartDate}
                          />
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Return Date"
                            value={searchReturnDate}
                            onChange={onChangeSearchReturnDate}
                          />
                          {/* <input type="date" class="form-control" placeholder="Departure Date" value={searchDepartDate} onChange={onChangeSearchDepartDate} />
                          <input type="date" class="form-control" placeholder="Return Date" value={searchReturnDate} onChange={onChangeSearchReturnDate} /> */}
                        </div>

                        {/* select */}
                        <div class="input-group mb-3"> <div className="col-sm-6">
                          <Dropdown options={numbers} onChange={onChangeSearchNoAdults} value={searchNoAdults} placeholder="1, Adults" />
                        </div>
                          <div className="col-sm-6">
                            <Dropdown options={numbers} onChange={onChangeSearchNoChildren} value={searchNoChildren} placeholder="0, Children" />
                          </div>
                          {/* <select class="form-select form-control" id="inputGroupSelect02" value={searchNoAdults} onChange={onChangeSearchNoAdults}  >
                          <option value="" disabled="" selected="">1, Adults</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>

                        </select>  */}
                          {/* <select class="form-select form-control" id="inputGroupSelect02" value={searchNoChildren} onChange={onChangeSearchNoChildren}  >
                            <option value="" disabled="" selected="">0, Children</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                          </select>  */}
                        </div>

                        <div class="input-group mb-3"> <div className="col-sm-6">
                          <Dropdown options={options} onChange={onChangeSearchClass} value={searchClass} placeholder="Economy" />
                          {/* <select class="form-select form-control" id="inputGroupSelect02" value={searchClass} onChange={onChangeSearchClass} placeholder="Economy" >
                          <option selected>Economy</option>
                          <option value="Economy">Economy</option>
                          <option value="Business Class">Business Class</option>
                          <option value="First Class">First Class</option>



                        </select>  */}
                        </div></div>

                        <div class="mt-4 d-flex justify-content-end">
                          <Link to={{ pathname: "/flights/SelectDeparture", state: { hashobj, res } }} className="btn btn-success">
                            Search
                          </Link> &nbsp; </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><br /><br /><br /><br />


      {/* <Box
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
        <br /><div style={{ display: 'flex', justifyContent: 'right', alignItems: 'right', height: '5vh' }}>
          {edit &&
            ((<Button variant='contained' size='small' color='error' onClick={() => { props.history.push("/ViewReservations") }}>Cancel</Button>))

          }
        </div> */}
      {/* 
        <h1>Welcome to AS Airlines.</h1>
        <h4>Where would you like to go?</h4> */}

      {/* <Box sx={{ minWidth: 1000 }}>
          <FormControl variant='filled' size='small' >
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
          <Dropdown options={numbers} onChange={onChangeSearchNoAdults} value={searchNoAdults} placeholder="1, Adults" />

          <div className="input-group-append">

          </div>
        </div>


        <div>
          <Dropdown options={numbers} onChange={onChangeSearchNoChildren} value={searchNoChildren} placeholder="0, Children" />

          <div className="input-group-append">

          </div>
        </div>

        <div>
          <strong>Cabin Class: </strong>
          <Dropdown options={options} onChange={onChangeSearchClass} value={searchClass} placeholder="Economy" />

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
          <br />
          <div className="row">


            <Link to={{ pathname: "/flights/SelectDeparture", state: { hashobj, res } }} className="btn btn-success">
              Search
            </Link> &nbsp;
          </div>
        </div>

      </Box>  */}

    </div>

  )

};
export default Landing;