import React from "react";
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
import { Typography, Container, Button, Box } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";


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
export default function Createflight(){


     const formik=useFormik({
         initialValues: {
             
             FlightNumber:"",
             DepartureTime:"",
             ArrivalTime:"",
             Date: new Date(),
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
                transition={2} 
                margin="0px"/>
        
         
        
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
      margin="0px"
      
    >
        
      <div>
      <h1>Add Flight

</h1>
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
         <Formik
        initialValues={formSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
        render={props => (
          <Form>
            <Box width="100%" mb={2}>
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
      <div>
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
