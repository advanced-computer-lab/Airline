import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddFlight from "./components/adminSystem/add-flight";
import EditFlight from "./components/adminSystem/edit-flight";
import Flight from "./components/adminSystem/flights";
import FlightsList from "./components/adminSystem/flights-list";
import Landing from "./components/userSystem/landing";
import FlightDep from "./components/userSystem/departure-flight";
import FlightReturn from "./components/userSystem/return-flights";
import ReviewSelection from "./components/userSystem/review-selection";

function App() {

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


        <li className="nav-item" >
                   
          <Link to={"/flights"} className="nav-link">
            Login
          </Link>

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
      <Route  path="/flights/ReviewSelection" component={ReviewSelection} />
        
      </Switch>
    </div>
  </div>
    
  );
}

export default App;
