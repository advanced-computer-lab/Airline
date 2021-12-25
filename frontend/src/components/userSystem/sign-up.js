import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import UserDataService from "../../services/user";
import { Formik, Form ,useFormik,Field} from 'formik';
import * as Yup from 'yup';
import Card from '@mui/material/Card'
import { Container,Grid } from "@mui/material";
import 'react-dropdown/style.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BackgroundSlider from 'react-background-slider'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'


const Signup = props => {
    
    
  const formik=useFormik({
    initialValues: {
        
        FirstName:"",
        LastName:"",
        Password:"",
        ConfirmPassword:"",
        Email:"",
        Username:"",
        PassportNumber:"",
        Address: "",
        CountryCode:"",
        Phone:"",
    },

    validationSchema: Yup.object({
        FirstName: Yup.string().required("Required"),
        LastName: Yup.string().required("Required"),
        Password : Yup.string().required("Required"),
        ConfirmPassword: Yup.string().required("Required"),
        Email: Yup.string().required("Required"),
        Username: Yup.string().required("Required"),
        PassportNumber: Yup.string().required("Required"),
        Address:Yup.string().required("Required"),
        CountryCode: Yup.string().required("Required"),
        Phone: Yup.number().required("Required"),
       
        
        

        

    }),


    onSubmit:async (values)=>{
        const UserData = {
            firstname: formik.values.FirstName,
            lastname: formik.values.LastName,
            password: formik.values.Password,
            cfpassword: formik.values.ConfirmPassword,
            email: formik.values.Email,
            username: formik.values.Username,
            passportnumber: formik.values.PassportNumber,
            address: formik.values.Address,
            countrycode: formik.values.CountryCode,
            phone: formik.values.Phone,
           
          

        };

        UserDataService.create(UserData);
        props.history.push("/login",{reserving: false});


    },
});
return(
  <div style={{backgroundImage:`url(${image3})`,  width: "100%",
  height: "850px", marginTop:'-50px'}}>
{/* <BackgroundSlider
        images={ [image3,image2,image1]}
        duration={10}
        transition={2}
      /> */}
  <div >
  <br/><div style={{display: 'flex',  justifyContent:'left', alignItems:'left', height: '5vh', marginTop:"30px",marginLeft:"50px"}}>
      <Button variant='contained'  size='small' color='primary' onClick={() => {props.history.goBack()}}>Back</Button>
          
      </div>
    
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-8">
            <div class="bg-white">
              <div class="card shadow mb-5 bg-white rounded">

                <div class="card-body">
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade active show" id="faq_tab_1" role="tabpanel" aria-labelledby="faq_tab_1-tab">
                      <div class="container p-3">
<h1 className="card-title">Sign up</h1>
<form onSubmit={formik.handleSubmit}>
<div className="row">
       <div className="row-auto">
       <div class="input-group mb-3">
          <input
          className="form-control"
            id="FirstName"
            name="FirstName"
            type="text"
            placeholder=" First Name"
            onChange={formik.handleChange}
           value={formik.values.FirstName}
            />
          

    </div>
      </div>
      <div className="row-auto">
      <div class="input-group mb-3">
      <input
          className="form-control"
            id="LastName"
            name="LastName"
            type="text"
            placeholder="Last Name "
            onChange={formik.handleChange}
           value={formik.values.LastName}
            />  
            </div>
        </div>

      <div className="row-auto"> 
      <div class="input-group mb-3">
          <input
          className="form-control"
            id="Password"
            name="Password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
           value={formik.values.Password}
            />  
            </div>
            </div>
 <div className="row-auto"> 
      <div class="input-group mb-3">
         
          <input
          className="form-control"
            id="ConfirmPassword"
            name="ConfirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
           value={formik.values.ConfirmPassword}
            />  
    </div>
     </div>
      <div className="row-auto">  
      <div class="input-group mb-3">
          <input
          className="form-control"
            id="Email"
            name="Email"
            type="text"
            placeholder="Email"
            onChange={formik.handleChange}
           value={formik.values.Email}
            />  
            </div>
            </div>
             <div className="row-auto"> 
      <div class="input-group mb-3">
          <input
          className="form-control"
            id="Username"
            name="Username"
            type="text"
            placeholder="Username"
            onChange={formik.handleChange}
           value={formik.values.Username}
            />  
    </div>
       </div>
      <div className="row-auto">  
      <div class="input-group mb-3">
          <input
          className="form-control"
            id="PassportNumber"
            name="PassportNumber"
            type="text"
            placeholder="Passport Number"
            onChange={formik.handleChange}
           value={formik.values.PassportNumber}
            />  
            </div>
            </div>
             <div className="row-auto">  
      <div class="input-group mb-3">
         <input
          className="form-control"
            id="Address"
            name="Address"
            type="text"
            placeholder=" Address"
            onChange={formik.handleChange}
           value={formik.values.Address}
           
            />  
        </div>
       </div>
      <div className="row-auto">    
      <div class="input-group mb-3">
          <input
          className="form-control"
            id="CountryCode"
            name="CountryCode"
            type="text"
            placeholder="Country Code"
            onChange={formik.handleChange}
           value={formik.values.CountryCode}
            />  
          
            <input
          className="form-control"
            id="Phone"
            name="Phone"
            type="number"
            placeholder="Phone"
            onChange={formik.handleChange}
           value={formik.values.Phone}
            />  
    </div>
     </div>
     

<br/>

      
     
 </div>
 <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>
      <button type= "submit" class="btn btn-success">Sign up</button>
      </div>    
</form>
</div>
</div>
</div>
</div></div></div></div></div></div>
</div>

</div>
   )
}
export default Signup ;