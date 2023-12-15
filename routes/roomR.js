import { Router } from "express"
import * as roomC from "../controllers/roomC.js"
export const router = Router()

router.post("createroom", (req, res) => {
	roomC.createRoom({...req.body})
	.then(data => res.status(200).json(data))
	.catch(e => res.status(400).json(e))
})