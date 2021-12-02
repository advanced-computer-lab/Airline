import express from "express"
import ReservationsCtrl from "./reservations.controller.js"

const router = express.Router();

router.route("/").get(ReservationsCtrl.apiGetReservations)
                 


export default router;