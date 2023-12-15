import { Router } from "express"
import * as userC from "../controllers/userC.js"
export const router = Router()

router.post('/createuser', (req, res) => {
	userC.createUser({...req.body})
	.then(data => res.status(200).json(data))
	.catch(e => res.status(400).json(e))
})
