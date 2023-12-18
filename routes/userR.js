import { Router } from "express"
import * as userC from "../controllers/userC.js"
export const router = Router()

router.post('/createuser', (req, res) => {
	const {email, bio, country} = req.body
	userC.createUser(email, bio, country)
	.then(data => res.status(200).json(data))
	.catch(e => res.status(400).json(e))
})

router.get('/getuser/:id', (req, res) => {
	userC.getUserId(req.params.id)
	.then(data => res.status(200).json(data))
	.catch(e => res.status(400).json(e))
})

router.get('/getusers/:country', (req, res) => {
	userC.getUserCountry(req.params.country)
	.then(data => res.status(200).json(data))
	.catch(e => res.status(400).json(e))
})