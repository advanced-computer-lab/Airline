import React, { useState, useEffect } from "react";
import{Formik, useFormik} from "formik";
import * as Yup from "yup";
import UserDataService from "../../services/user";
import axios from 'axios';
import { useParams } from "react-router";
import { setuid } from "process";



const UpdateUser = props => {

    const user = props.user;

    //const [user, setUser] = React.useState(null);

 // const user = props.user
   //console.log(props.user);
   //setUser(props.user)
   //console.log(user);

  
  

     const formik=useFormik({
         initialValues: {
             
             FirstName:user.firstname,
             LastName:user.lastname,
             Email:user.email,
             PassportNumber:user.passportnumber
             


         },

         validationSchema: Yup.object({
             FirstName: Yup.string().required("Required"),
             LastName: Yup.string().required("Required"),
             Email : Yup.string().required("Required"),
             PassportNumber: Yup.string().required("Required")
             
             

         }),


         onSubmit:async (values)=>{
             const UserData = {
                 firstname: formik.values.FirstName,
                 lastname: formik.values.LastName,
                 passportnumber: formik.values.PassportNumber,
                 email: formik.values.Email,
                 
             };


             console.log(user._id);

             let user1;



            
              await UserDataService.edit(user._id,UserData).then(response => {
                //user = response.data;
                console.log(response.data);
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
              props.history.push('/');
              
            


         },
     });
    return(

       <form onSubmit={formik.handleSubmit}>
           

            
           
           <div className="input-container">
               <input
                 id="FirstName"
                 name="FirstName"
                 type="text"
                 placeholder="First Name"
                 onChange={formik.handleChange}
                value={formik.values.FirstName}
                 />  

           </div>
           <div className="input-container">           
               <input
                 id="LastName"
                 name="LastName"
                 type="text"
                 placeholder="Last Name"
                 onChange={formik.handleChange}
                value={formik.values.LastName}
                 />  

           </div>
           <div className="input-container">
               <input
                 id="PassportNumber"
                 name="PassportNumber"
                 type="text"
                 placeholder="Passport Number"
                 onChange={formik.handleChange}
                value={formik.values.PassportNumber}
                 />  

           </div>
           <div className="input-container">
               <input
                 id="Email"
                 name="Email"
                 type="text"
                 placeholder="Email"
                 onChange={formik.handleChange}
                value={formik.values.Email}
                 />  

           </div>
           
          
           <button type= "submit">Update</button>

</form>

    )
}

export default UpdateUser;