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
	const user = await pool.query(`
	INSERT INTO Users (email, bio, country)	
	VALUES(?, ?, ?)`, [email, bio, country])
	return user[0]
}