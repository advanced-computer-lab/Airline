import React, { useState } from "react";
import{Formik, useFormik} from "formik";

export default function Createflights(){
    
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
             DestinationAirport:""


         },
         onSubmit:(values)=>{
             console.log(values);
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

          
           <button type= "submit">Submit</button>

</form>

    )
}