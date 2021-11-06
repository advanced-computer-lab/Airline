import express from "express"
import FlightsCtrl from "./flights.controller.js"

const router = express.Router()

router
  .route("/").get(FlightsCtrl.apiGetFlights)
  .post(FlightsCtrl.apiPostFlight)
  .put(FlightsCtrl.apiUpdateFlight)
  .delete(FlightsCtrl.apiDeleteFlight)

export default router