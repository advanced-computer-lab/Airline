import { response } from "express";
import ReservationsDAO from "../dao/reservationsDAO.js"

export default class ReservationsController{
    static async apiGetReservations(req, res, next) {

        const reserveList  = await ReservationsDAO.getReservations();
    
        let response = {
          reservations: reserveList,
        }
        res.json(response)
      }

      static async apiPostReservation(req, res, next) {
        try {

         
         /* const DepartureFlight = req.body.flight
          console.log(DepartureFlight)
          const ReturnFlight= req.body.returnFlight
          console.log(ReturnFlight)
          const User= req.body.user
          console.log(User)
          const Cabin = req.body.cabin
          const DepSeats = req.body.depreserved
          const RetSeats = req.body.retreserved*/

          const data = req.body
          
    
          await ReservationsDAO.addReservation(data)
           //res.json(Cabin)
          res.json({ status: "successss" })
        } catch (e) {
          console.log(e)
          res.status(500).json({ error: e.message })
        }
      }
}