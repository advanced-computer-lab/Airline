import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserDataService from "./services/user.js";

import AddFlight from "./components/adminSystem/add-flight";
import EditFlight from "./components/adminSystem/edit-flight";
import Flight from "./components/adminSystem/flights";
import FlightsList from "./components/adminSystem/flights-list";
import Landing from "./components/userSystem/landing";
import FlightDep from "./components/userSystem/departure-flight";
import FlightReturn from "./components/userSystem/return-flights";
import Login from "./components/userSystem/login";
import ReviewSelection from "./components/userSystem/review-selection";
import UpdateUser from "./components/userSystem/edit-user";
import DepSeats from "./components/userSystem/departure-seats";
import RetSeats from "./components/userSystem/return-seats";
import Booking from "./components/userSystem/final-booking";
import MyBooking from "./components/userSystem/successful-booking";
import UserReservations from "./components/userSystem/user-reservations"
import SignUp from "./components/userSystem/sign-up"
import EditDepSeats from './components/userSystem/edit-dep-seats'
import EditRetSeats from './components/userSystem/edit-ret-seats'
function App() {

  const [user, setUser] = React.useState(null);

  async function login(user=null) {
    //const user1 = UserDataService.get(user._id);
    console.log(user.firstname);
    setUser(user);
  }

  async function logi(user=null) {
   // const user2 = UserDataService.get(user.id);
    //console.log(user2);
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }


  return (
    <div  style={{backgroundColor:"#f0f6f7ff"}}>
      
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand">
        Airline
      </a>
      <div className="navbar-nav ms-auto">
        <li className="nav-item" >
          <Link to={"/"} className="nav-link">
            Home
          </Link>
        </li>


        { user ? (
              <li className="nav-item" >
              <Link to={"/UpdateUser"} className="nav-link">
              Edit Profile 
            </Link>
            </li>
            ) :(null)}

        { user ? (
              <li className="nav-item" >
              <Link to={"/ViewReservations"} className="nav-link">
              My Reservations 
            </Link>
            </li>
            ) :(null)}     
        
        <li className="nav-item" >
            { user ? (
              <Link to={"/"} onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.username}
              </Link>
            ) : (            
            <Link to={{ pathname: "/login", state: {reserving: false}}} className="nav-link">
              Login
            </Link>
            )}

        </li>

        
           

        
      </div>
    </nav>

   
    <div className="container mt-3">
      <Switch>
      <Route  exact path={["/admin", "/admin/flights"]} component={FlightsList} />
      <Route  path="/admin/flights/create" component={AddFlight} />
      <Route  path="/admin/flights/:id/edit" component={EditFlight} />
      <Route  path="/admin/flights/:id" component={Flight} />


      <Route  exact path={["/", "/flights"]} component={Landing} />
      <Route  path="/flights/SelectDeparture" component={FlightDep} />
      <Route  path="/signup" component={SignUp} />
      <Route  path="/flights/SelectReturn" component={FlightReturn} />
      <Route 
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
      <Route  path="/flights/ReviewSelection" render={(props) => <ReviewSelection {...props} User={user} />} />
      <Route 
            path="/UpdateUser"
            render={(props) => (
              <UpdateUser {...props} user={user} log={logi} />
            )}
          />
      <Route 
            path="/ViewReservations"
            render={(props) => (
              <UserReservations {...props} user={user}  />
            )}
          />


      <Route  path="/flights/ChooseDepSeats" render={(props) => <DepSeats {...props} User={user} />} />
      <Route  path="/flights/ChooseRetSeats" render={(props) => <RetSeats {...props} User={user} />} />
      <Route  path="/flights/Booking" render={(props) => <Booking {...props} User={user} />} />
      <Route  path="/flights/MyBooking" render={(props) => <MyBooking {...props} User={user} />} />
      <Route  path="/flights/EditDepSeats" render={(props) => <EditDepSeats {...props} User={user} />} />
      <Route  path="/flights/EditRetSeats" render={(props) => <EditRetSeats {...props} User={user} />} />
      
      

        
      </Switch>
      
    </div>
  </div>
    
  );
}

export default App;
