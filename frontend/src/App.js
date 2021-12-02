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
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand">
        Airline
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            Home
          </Link>
        </li>


        { user ? (
              <li className="nav-item" >
              <Link to={"/UpdateUser"} className="nav-link">
              Edit User 
            </Link>
            </li>
            ) :(null)}
        
        <li className="nav-item" >
            { user ? (
              <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.firstname +" "+ user.lastname}
              </a>
            ) : (            
            <Link to={"/login"} className="nav-link">
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
      <Route  path="/flights/SelectReturn" component={FlightReturn} />
      <Route 
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
      <Route  path="/flights/ReviewSelection" component={ReviewSelection} />
      <Route 
            path="/UpdateUser"
            render={(props) => (
              <UpdateUser {...props} user={user} log={logi} />
            )}
          />
        
      </Switch>
    </div>
  </div>
    
  );
}

export default App;
