import express from "express"
import ReservationsCtrl from "./reservations.controller.js"

const router = express.Router();


router.route("/").post(ReservationsCtrl.apiPostReservation)

router.route("/user/:id").get(ReservationsCtrl.apiGetReservationsByUserId)
router.route("/:id").get(ReservationsCtrl.apiGetReservationById)
router.route("/:id").delete(ReservationsCtrl.apiCancelReservation)
router.route("/:id").put(ReservationsCtrl.apiUpdateReservation)          


export default router;