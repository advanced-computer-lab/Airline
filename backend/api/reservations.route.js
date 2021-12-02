import express from "express"
import ReservationsCtrl from "./reservations.controller.js"

const router = express.Router();

router.route("/").get(ReservationsCtrl.apiGetReservations)
router.route("/").post(ReservationsCtrl.apiPostReservation)
                 


export default router;