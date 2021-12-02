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

         
          const DepartureFlight = req.body.departflight
          const ReturnFlight= req.body.returnflight
          const User= req.body.user
          const Cabin = req.body.cabin
          const DepSeats = req.body.depseats
          const RetSeats = req.body.depseats
          
    
          await ReservationsDAO.addReservation(DepartureFlight, ReturnFlight, User, Cabin, DepSeats, RetSeats)
           
          res.json({ status: "success" })
        } catch (e) {
          console.log(e)
          res.status(500).json({ error: e.message })
        }
      }
}