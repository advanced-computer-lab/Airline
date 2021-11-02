const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightDetail = new Schema({
  FlightNumber: {
    type: String,
    required: true,
  },
  DepartureTime: {
    type: String,
    required: true
  },
  ArrivalTime: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true
  },
  EconomySeats: {
    type: Number,
    required: true
  },
  BusinessSeats: {
    type: Number,
    required: true
  },
  FirstClassSeats: {
    type: Number,
    required: true
  },
  ArrivalAirport:{
      type:String,
      required:true,
  },
  DepartureAirport:{
      type:String,
      required:true
  }
  
}, { timestamps: true });

const Flight = mongoose.model('Flight', flightDetail);
module.exports = Flight;