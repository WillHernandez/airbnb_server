import { Router } from "express"
import * as bookingC from "../controllers/bookingC.js"
export const router = Router()

router.post('/createbooking', (req, res) => {
	const {room_id, user_id} = req.body
	bookingC.createBooking(room_id, user_id)	
	.then(data => res.status(200).json(data))
	.catch(e => res.status(400).json(e))
})