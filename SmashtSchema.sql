DROP DATABASE IF EXISTS Smasht;
CREATE database Smasht;

USE Smasht;

CREATE TABLE USERS (
_firstname varchar (255) NOT NULL,
_lastname varchar (255) NOT NULL,
_idUser int (10) NOT NULL AUTO_INCREMENT,
_email varchar (255),
PRIMARY KEY (_idUser)
);

CREATE TABLE Trivia (
_title varchar (255) NOT NULL,
_category varchar (255) NOT NULL,
_rating INT (10) NOT NULL,
_level varchar (255)NOT NULL,
_idTrivia int (10) NOT NULL AUTO_INCREMENT,
_tags varchar (25) 
PRIMARY KEY (_idTrivia) 
);

CREATE TABLE Questions (
_idquestion int (10) NOT NULL AUTO_INCREMENT,
_quest TINYTEXT NOT NULL,

);

CREATE TABLE Answers (
    _ans varchar (255)
)


-_title
-_category 
-_rating
-_level
-_primary key(id)
-_tags
