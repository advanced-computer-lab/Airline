import express from "express"
import ReservationsCtrl from "./reservations.controller.js"

const router = express.Router();


router.route("/").post(ReservationsCtrl.apiPostReservation)

router.route("/:id").get(ReservationsCtrl.apiGetReservationsByUserId)
                 


export default router;