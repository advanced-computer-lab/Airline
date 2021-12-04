import express from "express"
import ReservationsCtrl from "./reservations.controller.js"

const router = express.Router();


router.route("/").post(ReservationsCtrl.apiPostReservation)

router.route("/:id").get(ReservationsCtrl.apiGetReservationsByUserId)
router.route("/:id").delete(ReservationsCtrl.apiCancelReservation)
                 


export default router;