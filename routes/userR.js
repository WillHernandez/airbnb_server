import { Router } from "express"
import * as userC from "../controllers/userC.js"
export const router = Router()

router.post('/createuser', (req, res) => {
	const {email, bio, country} = req.body
	userC.createUser(email, bio, country)
	.then(data => res.status(200).json(data))
	.catch(e => res.status(400).json(e))
})