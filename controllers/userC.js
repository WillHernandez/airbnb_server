import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config()

const pool = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PW,
	database: process.env.MYSQL_DB
}).promise()

export const createUser = async (email, bio, country) => {
	const [user] = await pool.query(`
	INSERT INTO Users (email, bio, country)	
	VALUES(?, ?, ?)`, [email, bio, country])
	return user
}

export const getUserId = async (id) => {
	const [user] = await pool.query(`
	SELECT * FROM Users	
	WHERE id = ${id};`)
	return user
}

// be sure to pass in a string as 2 letter country abbreviation
export const getUserCountry = async (country) => {
	const [users] = await pool.query(`
	SELECT * FROM Users
	WHERE country = '${country}';`)
	return users
}

export const getUserProps = async (userId) => {
	const [props] = await pool.query(`
	SELECT
		Users.id as users_id,
		Rooms.id as rooms_id,
		email,
		street
	FROM Users
	INNER JOIN Rooms 
	ON Rooms.owner_id = ${userId};`)
	return props
}

export const getUserHistory = async (id) => {
	const [userH] = await pool.query(`
	SELECT
		guest_id,
		street,
		check_in
	FROM Bookings
	INNER JOIN Rooms
	ON Rooms.owner_id = guest_id
	WHERE guest_id = ${id};`)
	return userH
}