import React, { useState } from "react";
import UserDataService from "../../services/user";
import {Box,Container,Typography,Grid,CardContent,CardActions,Card,ListItemAvatar,ListItem,Divider,List,Paper} from '@mui/material';
import TextField from '@mui/material/TextField';

const Login = props => {

  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')


  const state = props.location.state
  const reserving = props.location.state.reserving

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
			localStorage.setItem('token', data.token)
      console.log(data.token)
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
    <h1>Login</h1>
    <div className="submit-form">
      <div>
        <div className="form-group">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            className="form-control"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="id">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            display="none"
          />
        </div><br/>
        <div style={{display: 'flex',  justifyContent:'right', alignItems:'right', height: '5vh'}}> 
        <button onClick={login} className="btn btn-success">
          Login
        </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;