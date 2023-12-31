import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config()

const pool = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PW,
	database: process.env.MYSQL_DB
}).promise()

export const createRoom = async (street, owner_id) => {
	const [room] = await pool.query(`
	INSERT INTO Rooms (street, owner_id)	
	VALUES(?, ?)`, [street, owner_id])
	return room
}

export const getAllRooms = async () => {
	const [rooms] = await pool.query(`
	SELECT * FROM Rooms
	`)
	return rooms
}
getAllRooms()

export const getRoomHistory = async (roomId) => {
	const [roomH] = pool.query(`
	SELECT
		room_id,
		guest_id,
		email,
		bio
	FROM Bookings
	INNER JOIN Users
	ON Users.id = guest_id
	WHERE room_id = ${roomId}	
	`)
	return roomH
}