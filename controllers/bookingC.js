import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config()

const pool = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PW,
	database: process.env.MYSQL_DB
}).promise()

export const createBooking = async (room_id, guest_id) => {
	const [booking] = await pool.query(`
	INSERT INTO Bookings(room_id, guest_id)
	VALUES (?, ?);`, [room_id, guest_id])
	return booking
}