import React, { Fragment, useEffect } from "react";
import jwt from "jsonwebtoken";
import ReactDOM from "react-dom";
import { Formik, useField, useFormikContext,useFormik,Form } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import FlightDataService from "../../services/flight";
import 'react-dropdown/style.css';
import TextField from '@mui/material/TextField';
import BackgroundSlider from 'react-background-slider'
 import image1 from './images/image1.jpg'
 import image2 from './images/image2.jpg'
 import image3 from './images/image3.jpg'
 import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from '@mui/material/Stack';
import { Typography, Container, Button, Box,Paper } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Grid } from "@mui/material";
//import React ,{Fragment,UseState,useEffect} from "react";


var formSchema = {
  date: null // if date is defiend as '' yup will throw a invalid date error
};

var validationSchema = Yup.object().shape({
  date: Yup.date().nullable()
});

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
    />
  );
};
const CreateFlight = props => {

  const token = localStorage.getItem('token');
  if(!token)
  props.history.push('/AcccessDenied');
  else{
  let decoded = jwt.verify(token, 'secret123');
  if(decoded.email != "admin@asairline.com")
  props.history.push('/AccessDenied');
}

    const formik=useFormik({
         initialValues: {
             
             FlightNumber:"",
             DepartureTime:"",
             ArrivalTime:"",
             Date: "",
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
             console.log(FlightData.date+"DATTTTT")
             FlightDataService.createFlight(FlightData);
             window.location.href="/admin/flights";


         },
     });
    return(

      
          
             <div style={{position:"absolute",padding:"auto",backgroundImage:`url(${image3})`,margin:"-17px 0 0 -112px",height:"100vh",width:"100vw"}}>
                
        
         
        
        
      <Grid sx={{justifyContent:"center",textAlign:"center"}}>
        <h1 >Add Flight

  </h1></Grid>
  <form onSubmit={
    formik.handleSubmit}
   
     
    >
        <Grid container
            spacing={2}

              margin="0 0 0 50px"
              alignItems="center"
             justifyContent="center"
           >
          <Grid item  xs={3} >
        <TextField 
          required
          id="FlightNumber"
          label="Flight Number"
          variant="filled"
          value={formik.values.FlightNumber}
          onChange={formik.handleChange}
          sx={{ width: "250px" }}
        /> </Grid>
         <Grid item xs={3}  >
         <Formik
        initialValues={formSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
        render={props => (
          <Form>
            <Box sx={{ width: "250px", margin:"30px 0 0 0"}} mb={2}>
              {/* Material Ui Date Picker */}
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  id="date-picker-dialog"
                  label="Departure Time"
                  inputVariant="filled"
                  format="HH:mm"
                  value={props.values.date}
                  onChange={value => props.setFieldValue("time", value)}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </MuiPickersUtilsProvider>
            </Box>

          </Form>
         

        )}
      />
         </Grid>
         <Grid item  xs={3}>
         <Formik
        initialValues={formSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
        render={props => (
          <Form>
            <Box sx={{ width: "250px", margin:"10px 0 0 0"}} mb={2}>
              {/* Material Ui Date Picker */}
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  inputVariant="filled"
                  format="MM/dd/yyyy"
                  value={props.values.date}
                  onChange={value => props.setFieldValue("date", value)}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>
            </Box>

          </Form>
         

        )}
      />
     </Grid >
     <Grid item  xs={3}>
           <TextField
          required
          id="EconomySeats"
          label="Economy Seats"
          type="number"
          variant="filled"
          onChange={formik.handleChange}
         value={formik.values.EconomySeats}
         sx={{ width: "250px"}}
        /></Grid>
       <Grid item  xs={3} >
        <TextField
          required
          id="BusinessSeats"
          label="Business Seats"
          type="number"
          variant="filled"
          onChange={formik.handleChange}
         value={formik.values.BusinessSeats}
         sx={{ width: "250px"}}
        /></Grid>
         <Grid item xs={3} >
        <TextField
          required
          id="FirstSeats"
          label="First Seats"
          type="number"
          variant="filled"
          onChange={formik.handleChange}
          value={formik.values. FirstSeats}
          sx={{ width: "250px"}}
        /></Grid>
         <Grid item xs={3}>
        <TextField
          required
          id="DepartureAirport"
          label="Departure Airport"
          variant="filled"
          value={formik.values.DepartureAirport}
          onChange={formik.handleChange}
          sx={{ width: "250px"}}
        /></Grid>
        
        <Grid item xs={3} >
         <TextField
          
          required
          id="DestinationAirport"
          label="Destination Airport"
          variant="filled"
          value={formik.values.DestinationAirport}
          onChange={formik.handleChange}
          sx={{ width: "250px"}}
        /></Grid>
        <Grid item xs={3} >
         <TextField
         id='TripDuration'
          color="secondary"
          type="number"
          required
          variant="filled"
          label="Trip Duration"
          onChange={formik.handleChange}
         value={formik.values.TripDuration}
         sx={{ width: "250px"}}
        />
        </Grid>
        <Grid item xs={3} >
            <TextField
          required
          id="BaggageAllowed"
          label="BaggageAllowed"
          variant="filled"
          value={formik.values.BaggageAllowed}
          onChange={formik.handleChange}
          sx={{ width: "250px"}}
        />
        </Grid>
        <Grid item  xs={3} >
         <TextField
         id='Price'
          color="secondary"
          type="number"
          required
          variant="filled"
          label="Price"
          onChange={formik.handleChange}
         value={formik.values. Price}
         sx={{ width: "250px"}}
        />
        
        </Grid>
        
        </Grid>
        <Grid sx={ {margin:"50px 0 0 0",textAlign: 'center'}}>
        <Button onClick={console.log("heyy")} type="submit" variant='contained'  size='large'  >Create</Button>
        </Grid>
        </form>
      </div>

    )
}
export default CreateFlight;
