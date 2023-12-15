CREATE DATABASE airbnb_clone;
USE airbnb_clone;

CREATE TABLE Users(
	id INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(255) NOT NULL UNIQUE,
	bio TEXT,
	country VARCHAR(2)
);
CREATE INDEX email_index ON Users(email);

CREATE TABLE Rooms(
	id INT AUTO_INCREMENT,
	street VARCHAR(255),
	owner_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (owner_id) REFERENCES Users(id)
);

SELECT
	Users.id as users_id,
	Rooms.id as rooms_id,
	email,
	street
FROM Users
INNER JOIN Rooms 
ON Rooms.owner_id = Users.id
ORDER BY Users.id ASC;

CREATE TABLE Bookings(
	id INT AUTO_INCREMENT,
	guest_id INT NOT NULL,
	room_id INT NOT NULL,
	check_in DATETIME,
	PRIMARY KEY (id),
	FOREIGN KEY (guest_id) REFERENCES Users(id),
	FOREIGN KEY (room_id) REFERENCES Rooms(id)
);