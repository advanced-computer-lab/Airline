import { response } from "express";
import ReservationsDAO from "../dao/reservationsDAO.js"

export default class ReservationsController{
   
      static async apiPostReservation(req, res, next) {
        try {


          const data = req.body
          
    
          await ReservationsDAO.addReservation(data)
           //res.json(Cabin)
          res.json({ status: "successss" })
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
        
         
}