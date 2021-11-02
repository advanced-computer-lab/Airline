// External variables
const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const flight=require('./backend/Models/Flight.js');
dotenv.config()


//App variables
const app = express();
const port = process.env.PORT || "8000";
const MongoURI = 'mongodb+srv://Shaker:aclproject@ACLProject.nlooc.mongodb.net/ACLProject?retryWrites=true&w=majority' ;
// #Importing the userController


// configurations
// Mongo DB
mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result =>console.log("MongoDB is now connected") )
.catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
  app.get("/addFlight", (req, res) => {
    //add yourself as a user to the db 
     /*var  new_flight= new flight({
        FlightNumber:"1",
        DepartureTime:"18:00",
        ArrivalTime:"22:00",
        Date:"3-11-2021",
        EconomySeats:30,
        BusinessSeats:15,
        FirstClassSeats:10,
        Airport:"Cairo"
     });*/

     //new_flight.save();

     const myuser={FlightNumber:"1",
      DepartureTime:"18:00",
       ArrivalTime:"22:00",
     Date:"3",
     EconomySeats:30,
     BusinessSeats:15,
     FirstClassSeats:10,
     ArrivalAirport:"Cairo",
    DepartureAirport:"Berlin" };
   flight.create(myuser)
   .then((myuser)=>{
    console.log(myuser);
    res.statusCode=200
    res.setHeader('Content-Type','application/json');
    res.end('User Added Successfully');  
   })
  });