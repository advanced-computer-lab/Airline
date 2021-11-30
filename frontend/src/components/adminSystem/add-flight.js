import React, { useState } from "react";
import{Formik, useFormik} from "formik";
import * as Yup from "yup";
import FlightDataService from "../../services/flight";

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
             DepartureAirport: Yup.string().required("Required"),
             DestinationAirport: Yup.string().required("Required"),
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
                 id="TripDuration"
                 name="TripDuration"
                 type="text"
                 placeholder="Trip Duration"
                 onChange={formik.handleChange}
                value={formik.values.TripDuration}
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
                 type="number"
                 placeholder="Economy Seats"
                 onChange={formik.handleChange}
                value={formik.values.EconomySeats}
                 />  

           </div>
           <div className="input-container">
               <input
                 id="BusinessSeats"
                 name="BusinessSeats"
                 type="number"
                 placeholder="Business Seats"
                 onChange={formik.handleChange}
                value={formik.values.BusinessSeats}
                 />  

           </div>
           <div className="input-container">
               <input
                 id="FirstSeats"
                 name="FirstSeats"
                 type="number"
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
           <div className="input-container">
               <input
                 id="BaggageAllowed"
                 name="BaggageAllowed"
                 type="text"
                 placeholder="Baggage Allowed"
                 onChange={formik.handleChange}
                value={formik.values.BaggageAllowed}
                 />  

           </div>
           <div className="input-container">
               <input
                 id="Price"
                 name="Price"
                 type="number"
                 placeholder="Price"
                 onChange={formik.handleChange}
                value={formik.values.Price}
                 />  

           </div>


          
           <button type= "submit">Create</button>

</form>

    )
}