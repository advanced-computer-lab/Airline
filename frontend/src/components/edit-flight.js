import React, { useState, useEffect } from "react";
import{Formik, useFormik} from "formik";
import * as Yup from "yup";
import FlightDataService from "../services/flight";
import axios from 'axios';
import { useParams } from "react-router";



const UpdateFlight = props => {

  const pathArray = window.location.pathname.split('/');
  const id = pathArray[2];

  const flight = props.location.state

  

     const formik=useFormik({
         initialValues: {
             
             FlightNumber:flight.FlightNumber,
             DepartureTime:flight.DepartureTime,
             ArrivalTime:flight.ArrivalTime,
             Date:flight.Date,
             EconomySeats:flight.EconomySeats,
             BusinessSeats:flight.BusinessSeats,
             FirstSeats:flight.FirstSeats,
             DepartureAirport:flight.DepartureAirport,
             DestinationAirport:flight.DestinationAirport


         },

         validationSchema: Yup.object({
             FlightNumber: Yup.string().required("Required"),
             DepartureTime: Yup.string().required("Required"),
             ArrivalTime : Yup.string().required("Required"),
             Date: Yup.date().required("Required"),
             EconomySeats: Yup.number(),
             BusinessSeats: Yup.number(),
             FirstSeats: Yup.number(),
             DepartureAirport: Yup.string().required("Required"),
             DestinationAirport: Yup.string().required("Required")
             

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

             };

            
             FlightDataService.updateFlight(id,FlightData);
             window.location.href=`/flights/${id}`;


         },
     });
    return(

       <form onSubmit={formik.handleSubmit}>
           

            
           
           <div className="input-container">
               <input
                 id="FlightNumber"
                 name="FlightNumber"
                 type="text"
                 placeholder="Flight Number"
                 onChange={formik.handleChange}
                value={formik.values.FlightNumber}
                 />  

           </div>
           <div className="input-container">           
               <input
                 id="DepartureTime"
                 name="DepartureTime"
                 type="time"
                 placeholder="Departure Time"
                 onChange={formik.handleChange}
                value={formik.values.DepartureTime}
                 />  

           </div>
           <div className="input-container">
               <input
                 id="ArrivalTime"
                 name="ArrivalTime"
                 type="time"
                 placeholder="Arrival Time"
                 onChange={formik.handleChange}
                value={formik.values.ArrivalTime}
                 />  

           </div>
           <div className="input-container">
               <input
                 id="Date"
                 name="Date"
                 type="date"
                 placeholder="Date"
                 onChange={formik.handleChange}
                value={formik.values.Date}
                 />  

           </div>
           <div className="input-container">
               <input
                 id="EconomySeats"
                 name="EconomySeats"
                 type="text"
                 placeholder="Economy Seats"
                 onChange={formik.handleChange}
                value={formik.values.EconomySeats}
                 />  

           </div>
           <div className="input-container">
               <input
                 id="BusinessSeats"
                 name="BusinessSeats"
                 type="text"
                 placeholder="Business Seats"
                 onChange={formik.handleChange}
                value={formik.values.BusinessSeats}
                 />  

           </div>
           <div className="input-container">
               <input
                 id="FirstSeats"
                 name="FirstSeats"
                 type="text"
                 placeholder="First Seats"
                 onChange={formik.handleChange}
                value={formik.values.FirstSeats}
                 />  

           </div>
           <div className="input-container">
               <input
                 id="DepartureAirport"
                 name="DepartureAirport"
                 type="text"
                 placeholder="Departure Airport"
                 onChange={formik.handleChange}
                value={formik.values.DepartureAirport}
                 />  

           </div>
           <div className="input-container">
               <input
                 id="DestinationAirport"
                 name="DestinationAirport"
                 type="text"
                 placeholder="Destination Airport"
                 onChange={formik.handleChange}
                value={formik.values.DestinationAirport}
                 />  

           </div>

          
           <button type= "submit">Update</button>

</form>

    )
}

export default UpdateFlight;