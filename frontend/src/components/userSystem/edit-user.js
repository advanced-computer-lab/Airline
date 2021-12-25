import React, { useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import UserDataService from "../../services/user";
//import bcrypt from "bcrypt";
import axios from 'axios';
import { useParams } from "react-router";
import { setuid } from "process";



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
    <div>

      <h1 className="card-title">Edit user details </h1>
      <form onSubmit={formik.handleSubmit}>

        <div className="row">
          <div className="row-auto">

            First Name :
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
          <div className="row-auto">


            Last Name :
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
          <div className="row-auto">


            Passport Number :
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
          <div className="row-auto">

            Email :
            <input
              className="form-control"
              id="Email"
              name="Email"
              type="text"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.Email}
            />  <br />

          </div>

          <div className="row-auto">

            Old Password :
            <input
              className="form-control"
              id="OldPassword"
              name="OldPassword"
              type="password"
              placeholder="Old Password"
              onChange={formik.handleChange}
              value={formik.values.OldPassword}
            />  <br />

          </div>

          

          {toggle
            ? <div className="row-auto">

              New Password :
              <input
                className="form-control"
                id="NewPassword"
                name="NewPassword"
                type="password"
                placeholder="New Password"
                onChange={formik.handleChange}
                value={formik.values.NewPassword}
              />  <br />

            </div>
            : null}


          <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', height: '5vh' }}>
            <button className="btn btn-primary" onClick={showNewPassword}>Change password</button>&nbsp;
            <button type="submit" class="btn btn-primary">Update</button>
          </div>
        </div>
      </form>
    </div>


  )
}

export default UpdateUser;