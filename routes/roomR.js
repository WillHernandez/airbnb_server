import { Router } from "express"
import * as roomC from "../controllers/roomC.js"
export const router = Router()

router.post("/createroom", (req, res) => {
	const {street, owner_id} = req.body
	roomC.createRoom(street, owner_id)
	.then(data => res.status(200).json(data))
	.catch(e => res.status(400).json(e))
})

router.get("/getallrooms", (req, res) => {
	roomC.getAllRooms()
	.then(data => res.status(200).json(data))
	.catch(e => res.status(400).json(e))
})