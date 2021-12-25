import React, { useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import UserDataService from "../../services/user";
//import bcrypt from "bcrypt";
import axios from 'axios';
import { useParams } from "react-router";
import { setuid } from "process";
import Button from '@mui/material/Button';
import image3 from './images/image3.jpg'



const UpdateUser = props => {

  const user = props.user;
  const [toggle, settoggle] = useState(false);

  //const [user, setUser] = React.useState(null);

  // const user = props.user
  //console.log(props.user);
  //setUser(props.user)
  //console.log(user);

  function showNewPassword() {
    settoggle(!toggle);
  }



  const formik = useFormik({
    initialValues: {

      FirstName: user.firstname,
      LastName: user.lastname,
      Email: user.email,
      PassportNumber: user.passportnumber,
      OldPassword: "",
      NewPassword: ""



    },

    validationSchema: Yup.object({
      FirstName: Yup.string().required("Required"),
      LastName: Yup.string().required("Required"),
      Email: Yup.string().required("Required"),
      PassportNumber: Yup.string().required("Required"),
      OldPassword: Yup.string().required("Required"),
      NewPassword: Yup.string()



    }),


    onSubmit: async (values) => {
      const UserData = {
        firstname: formik.values.FirstName,
        lastname: formik.values.LastName,
        passportnumber: formik.values.PassportNumber,
        email: formik.values.Email,
        oldpassword: formik.values.OldPassword,
        newpassword: formik.values.NewPassword

      };


      console.log(user._id);

      let user1;
      let b = true;














      await UserDataService.edit(user._id, UserData).then(response => {
        //user = response.data;
        console.log(response.data);
        if (response.data) {
          b = false;
          alert("Incorrect Password!");
        }
      })
        .catch(e => {
          console.log(e);
        });
      console.log(user._id);
      await UserDataService.get(user._id)
        .then(response => {
          user1 = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      console.log(user1);
      localStorage.setItem('token', user)
      props.log(user1);
      if (b)
        props.history.push('/');




    },
  });
  return (
    <div style={{backgroundImage:`url(${image3})`,  width: "100%",
    height: "850px", marginTop:'-50px'}}>
      <div style={{display: 'flex',  justifyContent:'left', alignItems:'left', height: '5vh', marginTop:"3s0px",marginLeft:"50px"}}>
      <Button variant='contained'  size='small' color='primary' onClick={() => {props.history.goBack()}}>Back</Button>
          
      </div>
  <div class="container mt-5" >
        <div class="row d-flex justify-content-center">
          <div class="col-md-8">
            <div class="bg-white">
              <div class="card shadow mb-5 bg-white rounded" style={{marginTop:'00px'}}>

                <div class="card-body" >
                  <div class="tab-content" id="myTabContent" >
                    <div class="tab-pane fade active show" id="faq_tab_1" role="tabpanel" aria-labelledby="faq_tab_1-tab">
                      <div class="container p-3" ></div>
      <h1 className="card-title">Edit user details </h1>
      <form onSubmit={formik.handleSubmit} >

        <div className="row">
          <div className="row-auto">
          First Name :
          <div class="input-group mb-3">
           
            <input
              className="form-control"
              id="FirstName"
              name="FirstName"
              type="text"
              placeholder="First Name"
              onChange={formik.handleChange}
              value={formik.values.FirstName}
            />
</div>
          </div>
          <div className="row-auto">
          Last Name :
          <div class="input-group mb-3">
          
            <input
              className="form-control"
              id="LastName"
              name="LastName"
              type="text"
              placeholder="Last Name"
              onChange={formik.handleChange}
              value={formik.values.LastName}
            />
</div>
          </div>
          <div className="row-auto">
          Passport Number :
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
          Email :
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
           Password :
          <div class="input-group mb-3">
           
            <input
              className="form-control"
              id="OldPassword"
              name="OldPassword"
              type="password"
              placeholder="Current Password"
              onChange={formik.handleChange}
              value={formik.values.OldPassword}
            /> 
        </div>
          </div>

          

          {toggle
            ? <div className="row-auto">
               New Password :
              <div class="input-group mb-3">
             
              <input
                className="form-control"
                id="NewPassword"
                name="NewPassword"
                type="password"
                placeholder="New Password"
                onChange={formik.handleChange}
                value={formik.values.NewPassword}
              /> 
            </div>
            </div>
            : null}

<div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', height: '5vh' }}>
            <button className="btn btn-primary" onClick={showNewPassword}>Change password</button>
            </div>

          <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', height: '5vh' }}>          
            <button type="submit" class="btn btn-primary">Update</button>
          </div>
        </div>
        
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>


  )
}

export default UpdateUser;