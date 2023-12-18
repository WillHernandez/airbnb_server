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
	const room = await pool.query(`
	INSERT INTO Rooms (street, owner_id)	
	VALUES(?, ?)`, [street, owner_id])
	return room[0]
}

export const getAllRooms = async () => {
	const rooms = await pool.query(`
	SELECT * FROM Rooms
	`)
	return rooms[0]
}