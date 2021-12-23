import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import{Formik, useFormik} from "formik";
import * as Yup from "yup";
import 'react-dropdown/style.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BackgroundSlider from 'react-background-slider'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'


export default function Signup(){
    
    
    const formik=useFormik({
        initialValues: {
            
            FirstName:"",
            LastName:"",
            Address:"",
            CountryCode:"",
            Phone:"",
            Email:"",
            PassNumber:"",
            Username:"",
            Password:"",
            ConfirmPassword: "",
        },

        validationSchema: Yup.object({
            FirstName: Yup.string().required("Required"),
            LastName: Yup.string().required("Required"),
            Address : Yup.string().required("Required"),
            CountryCode: Yup.string().required("Required"),
            Phone:Yup.number().required("Required"),
            Email:Yup.string().required("Required"),
            Username:Yup.number().required("Required"),
            Password:Yup.number().required("Required"),
            ConfirmPassword:Yup.number().required("Required"),
            

        }),


        onSubmit:async (values)=>{
            const UserData = {
                fname: formik.values.FirstName,
                lname: formik.values.LastName,
                address: formik.values.Address,
                countrycode: formik.values.CountryCode,
                phone: formik.values.Phone,
                email: formik.values.Email,
                username: formik.values.Username,
                password: formik.values.Password,
                cfpassword: formik.values.ConfirmPassword,
            }
           // ? window.location.href="/admin/flights";


        },
    });
   return(
<div>
<BackgroundSlider
          images={[image1,image2, image3]}
          duration={4}
          transition={2}
        />
<div>

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
          id="FirstName"
          label="First Name"
          variant="outlined"
          value={formik.values.FirstName}
          onChange={formik.handleChange}
          sx={{background:'white'  }}
        />
        <TextField
          required
          id="LastName"
          label="Last Name"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.LastName}
          sx={{background:'white'  }}
        />
         <div>
        </div>
        <TextField
          required
          id="Password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={formik.handleChange}
         value={formik.values.Password}
         sx={{background:'white'  }}
        />
        <TextField
          required
          id="ConfirmPassword"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={formik.handleChange}
         value={formik.values.ConfirmPassword}
         sx={{background:'white'  }}
        /><div>
         </div>
            <TextField
          required
          id="Email"
          label="Email"
          variant="outlined"
          onChange={formik.handleChange}
         value={formik.values.Email}
         sx={{background:'white'  }}
        />
        <TextField
          required
          id="Username"
          label="Username"
          variant="outlined"
          onChange={formik.handleChange}
         value={formik.values.Username}
         sx={{background:'white'  }}
        />
         <div>
        </div>
        <TextField
          required
          id="Pnumber"
          label="Passport Number"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.PassNumber}
          sx={{background:'white'  }}
        />
        <TextField
          required
          id='Phone'
          label="Phone"
          color="secondary"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.Phone}
          sx={{background:'white'  }}
        />
         <div>
        </div>
         <TextField
          required
          id='CountryCode'
          label="Country Code"
          color="secondary"
          variant="outlined"
          onChange={formik.handleChange}
         value={formik.values.CountryCode}
         sx={{background:'white'  }}
        />
         <TextField
         id='Address'
          color="secondary"
          required
          variant="outlined"
          label="Address"
          onChange={formik.handleChange}
         value={formik.values.Address}
         sx={{background:'white'  }}
        />
        <div >
            </div>
           
        <Button variant='contained'  size='large' >Sign up</Button>
  
        
        </form>
      </div>
     
      </Box>
     
      
      </div>

    </div>
      

   )
}