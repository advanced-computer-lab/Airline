import { response } from "express";
import ReservationsDAO from "../dao/reservationsDAO.js"
import FlightsDAO from "../dao/flightsDAO.js"
import ReservationsMailer from "../mailers/reservation-mailer.js"



export default class ReservationsController{
   
      static async apiPostReservation(req, res, next) {
        try {


          const data = req.body
          
    
          await ReservationsDAO.addReservation(data)

          let depFlight = await FlightsDAO.getFlightByID(data.DepartureFlight.id)
          let retFlight = await FlightsDAO.getFlightByID(data.ReturnFlight.id)

          let decseats = depFlight.EconomySeats
          let dbseats = depFlight.BusinessSeats
          let dfseats = depFlight.FirstSeats

          let recseats = retFlight.EconomySeats
          let rbseats = retFlight.BusinessSeats
          let rfseats = retFlight.FirstSeats

          let cabin = data.CabinClass
          let noseats = data.NoSeats

          const depseats = data.DepSeats
          const retseats = data.RetSeats

          if (cabin == "Economy"){decseats-=noseats;recseats-=noseats;}
    else if (cabin == "Business Class"){dbseats-=noseats;rbseats-=noseats;}
    else if (cabin == "First Class"){dfseats-=noseats;rfseats-=noseats;}


          await FlightsDAO.updateFlight(data.DepartureFlight.id, data.DepartureFlight.FlightNumber, data.DepartureFlight.DepartureTime, data.DepartureFlight.ArrivalTime, data.DepartureFlight.Date, decseats, dbseats, dfseats, data.DepartureFlight.DepartureAirport, data.DepartureFlight.DestinationAirport, data.DepartureFlight.TripDuration, data.DepartureFlight.Price, data.DepartureFlight.BaggageAllowance, depseats, true)

          await FlightsDAO.updateFlight(data.ReturnFlight.id, data.ReturnFlight.FlightNumber, data.ReturnFlight.DepartureTime, data.ReturnFlight.ArrivalTime, data.ReturnFlight.Date, recseats, rbseats, rfseats, data.ReturnFlight.DepartureAirport, data.ReturnFlight.DestinationAirport, data.ReturnFlight.TripDuration, data.ReturnFlight.Price, data.ReturnFlight.BaggageAllowance, retseats, true)


           //res.json(Cabin)
          res.json({ status: "success" })
        } catch (e) {
          console.log(e)
          res.status(500).json({ error: e.message })
        }
      }

      static async apiGetReservationsByUserId(req, res, next) {

        try {
          
        let userid = req.params.id || {};
            let ReservationsList = await ReservationsDAO.getReservations(userid);
            if (!ReservationsList) {
              res.status(404).json({ error: "Reservations not found" })
              return
            }
            res.json(ReservationsList)
          } catch (e) {
            console.log(`api, ${e}`)
            res.status(500).json({ error: e })
          }
        }

        static async apiCancelReservation(req, resp, next) {
          try {
            const resId = req.params.id
            let res =  await ReservationsDAO.getReservationByID(resId)
            let depid = res.DepartureFlight.id
            let retid = res.ReturnFlight.id

            let depFlight = await FlightsDAO.getFlightByID(depid)
            let retFlight = await FlightsDAO.getFlightByID(retid)

          let decseats = depFlight.EconomySeats
          let dbseats = depFlight.BusinessSeats
          let dfseats = depFlight.FirstSeats

          let recseats = retFlight.EconomySeats
          let rbseats = retFlight.BusinessSeats
          let rfseats = retFlight.FirstSeats

          let cabin = res.CabinClass

          const depseats = res.DepSeats
          const retseats = res.RetSeats

          let noseats = res.NoSeats

          if (cabin == "Economy"){decseats+=noseats;recseats+=noseats;}
          else if (cabin == "Business Class"){dbseats+=noseats;rbseats+=noseats;}
          else if (cabin == "First Class"){dfseats+=noseats;rfseats+=noseats;}





  

          await FlightsDAO.updateFlight(res.DepartureFlight.id, res.DepartureFlight.FlightNumber, res.DepartureFlight.DepartureTime, res.DepartureFlight.ArrivalTime, res.DepartureFlight.Date, decseats, dbseats, dfseats, res.DepartureFlight.DepartureAirport, res.DepartureFlight.DestinationAirport, res.DepartureFlight.TripDuration, res.DepartureFlight.Price, res.DepartureFlight.BaggageAllowance, depseats)

          await FlightsDAO.updateFlight(res.ReturnFlight.id, res.ReturnFlight.FlightNumber, res.ReturnFlight.DepartureTime, res.ReturnFlight.ArrivalTime, res.ReturnFlight.Date, recseats, rbseats, rfseats, res.ReturnFlight.DepartureAirport, res.ReturnFlight.DestinationAirport, res.ReturnFlight.TripDuration, res.ReturnFlight.Price, res.ReturnFlight.BaggageAllowance, retseats)

          await ReservationsDAO.deleteReservation(resId)

          await ReservationsMailer.CancelReservation(res.User.email,res.Price)


            resp.json({ status: "success" })
          } catch (e) {
            resp.status(500).json({ error: e.message })
          }
      }


      static async apiGetReservationById(req, res, next) {
        try {
          let id = req.params.id || {}
          let reservation = await ReservationsDAO.getReservationByID(id)
          if (!reservation) {
            res.status(404).json({ error: "Reservation not found" })
            return
          }
          res.json(reservation)
        } catch (e) {
          console.log(`api, ${e}`)
          res.status(500).json({ error: e })
        }
      }
        
         
}