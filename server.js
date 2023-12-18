import express from "express"
const app = express()
const port = process.env.PORT || 4000
import { router as userR } from "./routes/userR.js"
import { router as roomR } from "./routes/roomR.js"
import { router as bookingR } from "./routes/bookingR.js"

app.use(express.json())
app.use('/api/users', userR)
app.use('/api/rooms', roomR)
app.use('/api/bookings', bookingR)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
	console.log(`Connected on port ${port}`)
})