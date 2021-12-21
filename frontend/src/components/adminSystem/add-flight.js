import React, { useState } from "react";
import{Formik, useFormik} from "formik";
import * as Yup from "yup";
import FlightDataService from "../../services/flight";
import 'react-dropdown/style.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BackgroundSlider from 'react-background-slider'
 import image1 from './images/image1.jpg'
 import image2 from './images/image2.jpg'
 import image3 from './images/image3.jpg'
 import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


export default function Createflight(){
    
     const formik=useFormik({
         initialValues: {
             
             FlightNumber:"",
             DepartureTime:"",
             ArrivalTime:"",
             Date:"",
             EconomySeats:"",
             BusinessSeats:"",
             FirstSeats:"",
             DepartureAirport:"",
             DestinationAirport:"",
             TripDuration: "",
             BaggageAllowed: "",
             Price:"",



         },

         validationSchema: Yup.object({
             FlightNumber: Yup.string().required("Required"),
             DepartureTime: Yup.string().required("Required"),
             ArrivalTime : Yup.string().required("Required"),
             Date: Yup.date().required("Required"),
             EconomySeats: Yup.number().required("Required"),
             BusinessSeats: Yup.number().required("Required"),
             FirstSeats: Yup.number().required("Required"),
             DepartureAirport: Yup.string().required("Required").matches(/^[A-Z]+$/),
             DestinationAirport: Yup.string().required("Required").matches(/^[A-Z]+$/),
             TripDuration:Yup.string().required("Required"),
             BaggageAllowed:Yup.string().required("Required"),
             Price:Yup.number().required("Required"),
             

             

         }),


         onSubmit:async (values)=>{
             const FlightData = {
                 fnumber: formik.values.FlightNumber,
                 deptime: formik.values.DepartureTime,
                 arrtime: formik.values.ArrivalTime,
                 date: formik.values.Date,
                 ecseats: formik.values.EconomySeats,
                 bseats: formik.values.BusinessSeats,
                 fseats: formik.values.FirstSeats,
                 depairport: formik.values.DepartureAirport,
                 destairport: formik.values.DestinationAirport,
                 tripdur: formik.values.TripDuration,
                 bagallwd: formik.values.BaggageAllowed,
                 price: formik.values.Price,

             };

             FlightDataService.createFlight(FlightData);
             window.location.href="/admin/flights";


         },
     });
    return(

       
         <div>
        
        <div>
             <BackgroundSlider
                images={[image1, image2, image3]}
                duration={4}
                transition={2} />
        
         
        <h1>Add Flight

        </h1>
        <Box
    opacity='[0,0,0]'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, width: '65ch' },
      }}
      noValidate
      textAlign='center'
      autoComplete="off"
      height="0px"
      
    >
        
      <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          required
          id="FlightNumber"
          label="Flight Number"
          variant="outlined"
          value={formik.values.FlightNumber}
          onChange={formik.handleChange}
          sx={{background:'white'  }}
        />
        <TextField
        
          required
          id=" DepartureTime"
          label=" Departure Time"
         // placeholder="Departure Time"
          type="time"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.DepartureTime}
          sx={{background:'white'  }}
        />
         <div>
        </div>
        <TextField
          required
          id="ArrivalTime"
          label="Arrival Time"
          type="time"
         // autoComplete="current-password"
          variant="outlined"
          onChange={formik.handleChange}
         value={formik.values.ArrivalTime}
         sx={{background:'white'  }}
        />
        <TextField
          required
          id=" Date"
          label=" Date"
          type="date"
          //autoComplete="current-password"
          variant="outlined"
          onChange={formik.handleChange}
         value={formik.values. Date}
         sx={{background:'white'  }}
        /><div>
         </div>
            <TextField
          required
          id=""EconomySeats
          label="Economy Seats"
          type="number"
          variant="outlined"
          onChange={formik.handleChange}
         value={formik.values.EconomySeats}
         sx={{background:'white'  }}
        />
        <TextField
          required
          id="BusinessSeats"
          label="Business Seats"
          type="number"
          variant="outlined"
          onChange={formik.handleChange}
         value={formik.values.BusinessSeats}
         sx={{background:'white'  }}
        />
         <div>
        </div>
        <TextField
          required
          id=" FirstSeats"
          label=" First Seats"
          type="number"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values. FirstSeats}
          sx={{background:'white'  }}
        />
        <TextField
          required
          id=' DepartureAirport'
          label=" Departure Airport"
          color="secondary"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values. DepartureAirport}
          sx={{background:'white'  }}
        />
         <div>
        </div>
         <TextField
          required
          id='DestinationAirport'
          label="Destination Airport"
          color="secondary"
          variant="outlined"
          onChange={formik.handleChange}
         value={formik.values.DestinationAirport}
         sx={{background:'white'  }}
        />
         <TextField
         id='TripDuration'
          color="secondary"
          type="number"
          required
          variant="outlined"
          label="Trip Duration"
          onChange={formik.handleChange}
         value={formik.values.TripDuration}
         sx={{background:'white'  }}
        />
        <div >
            </div>
            <TextField
          required
          id=' BaggageAllowed'
          label=" Baggage Allowed"
          color="secondary"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.BaggageAllowed}
          sx={{background:'white'  }}
        />
         <TextField
         id=' Price'
          color="secondary"
          type="number"
          required
          variant="outlined"
          label="Trip Duration"
          onChange={formik.handleChange}
         value={formik.values. Price}
         sx={{background:'white'  }}
        />
         <div>
        </div>
           
        <Button variant='contained'  size='large' >Create</Button>
  
        
        </form>
      </div>
     
      </Box>
         
</div>
</div>
    )
}