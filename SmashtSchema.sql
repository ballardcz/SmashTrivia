DROP DATABASE IF EXISTS Smasht;
CREATE database Smasht;

USE Smasht;

CREATE TABLE USERS (
    _idUser int (10) NOT NULL AUTO_INCREMENT,
    _lastname varchar (255) NOT NULL,
    _firstname varchar (255) NOT NULL,
    _email varchar (255),
    _rating int (10),
    PRIMARY KEY (_idUser)
);

CREATE TABLE Trivia (
    _idTrivia int (10) NOT NULL AUTO_INCREMENT,
    _title varchar (255) NOT NULL,
    _category varchar (255) NOT NULL,
    _rating INT (10) NOT NULL,
    _level varchar (255)NOT NULL,
    _tags varchar (25), 
    PRIMARY KEY (_idTrivia) 
);

CREATE TABLE Questions (
    _idquestion int (10) NOT NULL AUTO_INCREMENT,
    _quest TINYTEXT NOT NULL,
    _tags varchar (25),
    PRIMARY KEY (_idquestion)
);

CREATE TABLE Answers (
    _idAns int (10) AUTO_INCREMENT NOT NULL,
    _ans varchar (255) NOT NULL,
    PRIMARY KEY (_idAns)
);