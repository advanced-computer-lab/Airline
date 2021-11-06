
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import AddFlight from "./components/add-flight";
import EditFlight from "./components/edit-flight";
import Flight from "./components/flights";

import FlightsList from "./components/flights-list";

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" className="navbar-brand">
        Airline
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/flights"} className="nav-link">
            Flights
          </Link>
        </li>
        <li className="nav-item" >
                   
          <Link to={"/"} className="nav-link">
            Login
          </Link>

        </li>
      </div>
    </nav>

   
    <div className="container mt-3">
      <Routes>
        <Route exact path={["/", "/flights"]} component={FlightsList} />
        <Route 
          path="/flights/:id/edit"
          render={(props) => (
            <EditFlight {...props} user={user} />
          )}
        />
        <Route 
          path="/flights/:id"
          render={(props) => (
            <Flight {...props} user={user} />
          )}
        />
         <Route 
          path="/flights/create"
          render={(props) => (
            <AddFlight {...props} user={user} />
          )}
        />
      </Routes>
    </div>
  </div>
    
  );
}

export default App;
