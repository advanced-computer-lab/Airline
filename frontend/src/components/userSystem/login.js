import React, { useState } from "react";
import UserDataService from "../../services/user";

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
			localStorage.setItem('token', data.user)
			alert('Login successful')
      props.login(data.user)

      if(reserving){props.history.push('/flights/ChooseDepSeats', state);}
      else {props.history.push('/');}

		} else {
			alert('Please check your username and password')
		}
	}

  /*const hash = {Email: user.Email , Password: user.Password};

  const login = (hash) => {

    

    UserDataService.authentication(hash).then(response => {
      
      console.log(response.data.user);
      setUser({id: response.data.user._id});
      setUser({Name:response.data.user.Name});
      
      
    })
    .catch(e => {
      console.log(e);
    });

    props.login(user)
    props.history.push(`/${user.Name}`);
  }*/

  return (
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
        </div>

        <button onClick={login} className="btn btn-success">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;