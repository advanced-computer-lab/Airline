import React, { useState } from "react";
import UserDataService from "../../services/user";
import {Box,Paper,Container,Typography,Grid,CardContent,CardActions,Card,ListItemAvatar,ListItem,Divider,List} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BackgroundSlider from 'react-background-slider'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'


const Login = props => {

  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


  const state = props.location.state
  const reserving = props.location.state.reserving

  const styles={
    gridStyle:{
      position: "absolute",
      top: "20%",
      right:"18%",
      marginLeft: "50px",
     marginRight: "200px",
    //  height: "500px",
      width:"500px"

  }};

  async function login(event) {
		event.preventDefault()

		const response = await fetch("http://localhost:5000/api/v1/users/login", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
      props.login(data.user)

      if(reserving){props.history.push('/flights/ChooseDepSeats', state);}
      else {props.history.push('/');}

		} else {
			alert('Please check your username and password')
		}
	}
  return (
    
    <div>
        <BackgroundSlider
          images={[image1,image2, image3]}
          duration={4}
          transition={2}
        />
    <Grid container style={styles.gridStyle} >
      <Grid item>
       <Paper elevation={15} style={{padding:"20px",width :"400px",height:"500px"}}>
       <div className="form_container">
       <h1 style={{textAlign:"center",margin:"20px 0 0 0"}}>Login</h1>
       <br />
          <br />
    <div className="submit-form">
    <Grid style={{margin:"20px 0 0 0"}}>
        <div className="form-group">
         
          <TextField
          label="Username"
            type="text"
            className="form-control"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
           <br />
          <br />
          
        </div>

        <div className="form-group">
          
          <TextField
          label="Password"
            type="password"
            className="form-control"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            display="none"
          />
          <br />
          <br />
        </div></Grid><br/>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}> 
        <button onClick={login} className="btn btn-success">
          Login
        </button>
        </div>
        
      </div>
    </div>
    </Paper>
    </Grid>
    </Grid>
    </div>)};

export default Login;