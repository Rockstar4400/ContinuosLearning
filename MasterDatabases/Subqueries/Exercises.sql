-- Source: https://learnsql.com/blog/sql-subquery-practice/

SHOW DATABASES;

CREATE DATABASE Subqueries;

USE Subqueries;

SHOW TABLES;

-- ORCHESTRAS

CREATE TABLE Orchestras (
id_Orchestra int(100) NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
rating varchar(100) NOT NULL,
city_origin varchar(100) NOT NULL,
country_origin varchar(100) NOT NULL,
year int NOT NULL,
PRIMARY KEY (id_Orchestra)
);

CREATE TABLE Concerts (
id_Concerts int(100) NOT NULL AUTO_INCREMENT,
city varchar(64) NOT NULL,
country varchar(32) NOT NULL,
year int NOT NULL,
rating decimal,
orchestra_id int NOT NULL,
CONSTRAINT fk_Orchestra_Concerts
FOREIGN KEY (orchestra_id)
REFERENCES Orchestras(id_Orchestra),
PRIMARY KEY (id_Concerts)
);

CREATE TABLE Members (
id_member int(100) NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
position varchar(100) NOT NULL,
experience varchar(100) NOT NULL,
wage int NOT NULL,
orchestra_id int NOT NULL,
CONSTRAINT fk_Orchestra_Members
FOREIGN KEY (orchestra_id)
REFERENCES Orchestras(id_Orchestra),
PRIMARY KEY (id_member)
);

DROP TABLE Concerts;
DROP TABLE Members;
DROP TABLE Orchestras;

TRUNCATE TABLE Concerts;
TRUNCATE TABLE orchestras;
TRUNCATE TABLE Members;

SELECT * FROM concerts;
SELECT * FROM Orchestras;
SELECT * FROM members;

INSERT INTO orchestras (id_Orchestra, name, rating, city_origin, country_origin, year) VALUES (1,'The Beatles', 4.0, 'Liverpool', 'ENGLAND', 1960);
INSERT INTO orchestras (id_Orchestra, name, rating, city_origin, country_origin, year) VALUES (2,'U2', 4.2, 'Dublin', 'IRELAND', 1976);
INSERT INTO orchestras (id_Orchestra, name, rating, city_origin, country_origin, year) VALUES (3,'The police', 4.1, 'London', 'ENGLAND', 1977);
INSERT INTO orchestras (id_Orchestra, name, rating, city_origin, country_origin, year) VALUES (4,'Black Sabbath', 4.3, 'Birmingham', 'ENGLAND', 1968);
INSERT INTO orchestras (id_Orchestra, name, rating, city_origin, country_origin, year) VALUES (5,'The Outfield', 4.2, 'London', 'ENGLAND', 1984);
INSERT INTO orchestras (id_Orchestra, name, rating, city_origin, country_origin, year) VALUES (6,'Pearl Jam', 4.1, 'Seattle', 'USA', 1990);
INSERT INTO orchestras (id_Orchestra, name, rating, city_origin, country_origin, year) VALUES (7,'Yes', 4.4, 'London', 'ENGLAND', 1990);

INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (1,'New York', 'USA', 1965, 4.0, 1 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (2,'Seattle', 'USA', 1975, 3.0, 1 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (3,'Sidney', 'AUSTRALIA', 1985, 3.4, 1 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (4,'Mechelen', 'BELGIUM', 1983, 3.8, 2 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (5,'Guadalajara', 'MEXICO', 1992, 3.8, 2 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (6,'Alberta', 'CANADA', 1980, 3.7, 2 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (7,'Medellin', 'COLOMBIA', 1988, 3.4, 3 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (8,'Caracas', 'VENEZUELA', 1989, 4.1, 3 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (9,'Paris', 'FRANCE', 1998, 4.2, 3 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (10,'Moscue', 'RUSSIA', 2000, 3.8, 4 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (11,'Venice', 'ITALY', 2001, 3.3, 4 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (12,'Medellin', 'VENEZUELA', 1970, 3.2, 4 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (13,'California', 'USA', 1990, 3.0, 5 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (14,'Monterrey', 'MEXICO', 1995, 2.0, 5 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (15,'Toronto', 'CANADA', 2000, 2.4, 5 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (16,'Warsaw', 'POLAND', 2000, 3.8, 6 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (17,'Sidney', 'AUSTRALIA', 2010, 3.8, 6 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (18,'Berlin', 'GERMANY', 2015, 3.8, 6 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (19,'Quito', 'ECUADOR', 2020, 4.1, 7 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (20,'Santiago de chile', 'CHILE', 2000, 4.2, 7 );
INSERT INTO Concerts (id_Concerts, city, country, year, rating, orchestra_id) VALUES (21,'Buenos aires', 'ARGENTINA', 1995, 4.3, 7 );

INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (1, 'James Paul McCartney', 'Guitar', 69, 400000, 1);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (2, 'Richard Starkey', 'Drums', 69, 350000, 1);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (3, 'George Harrison', 'Guitar', 43, 300000, 1);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (4, 'James Paul McCartney', 'Keyboard', 19, 200000, 1);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (5, 'Paul David Hewson', 'Vocal', 50, 150000, 2);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (6, 'David Howell Evans', 'Drums', 50, 100000, 2);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (7, 'Adam Charles Clayton', 'Bass', 50, 100000, 2);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (8, 'Laurence Joseph Mullen Jr.', 'Drums', 50, 100000, 2);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (9, 'Stewart Armstrong Copeland', 'Drums', 52, 200000, 3);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (10, 'Gordon Matthew Thomas Sumner', 'Vocal', 57, 300000, 3);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (11, 'Henry Padovani', 'Guitar', 54, 100000, 3);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (12, 'Andrew James Summers', 'Guitar', 57, 100000, 3);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (13, 'Geezer Butler', 'Bass', 59, 200000, 4);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (14, 'Tony Iommi', 'Guitar', 59, 210000, 4);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (15, 'William Thomas Ward', 'Drums', 45, 100000, 4);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (16, 'John Michael Osbourne', 'Vocal', 57, 250000, 4);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (17, 'Alan Jackman', 'Drums', 10, 50000, 5);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (18, 'Tony Lewis ', 'Vocals', 59, 100000, 5);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (19, 'John Spinks', 'Keyboards', 45, 100000, 5);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (20, 'Simon Dawson', 'Drums', 57, 100000, 5);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (21, 'Michael David McCready', 'Guitar', 57, 150000, 6);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (22, 'Jeff Ament', 'Bass', 55, 15000, 6);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (23, 'Eddie Jerome Vedder', 'Vocal', 48, 200000, 6);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (24, 'Matthew David Cameron', 'Drums', 51, 150000, 6);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (25, 'Stone Carpenter Gossard', 'Drums', 42, 150000, 6);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (26, 'Christopher Russell Edward Squire', 'Bass', 50, 150000, 7);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (27, 'Anthony John Selvidge', 'Keyboards', 64, 150000, 7);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (28, 'Trevor Charles Rabin', 'Guitar', 67, 150000, 7);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (29, 'Jon Anderson', 'Vocal', 67, 150000, 7);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (30, 'Bill Bruford', 'Drums', 45, 150000, 7);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (31, 'Richard Christopher Wakeman', 'Keyboards', 67, 150000, 7);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (32, 'Alan White', 'Drums', 52, 150000, 7);
INSERT INTO Members (id_member, name, position, experience, wage, orchestra_id) VALUES (33, 'Stephen James Howe', 'Guitar', 62, 150000, 7);


-- Exercise 1: Select Orchestras with a City of Origin Where a Concert Was Held in 2010
SELECT name FROM orchestras WHERE city_origin IN (SELECT city FROM concerts WHERE year = 2010);

-- Exercise 2: Select Members that Belong to High-Rated Orchestras
SELECT name, position FROM members WHERE experience > 50 AND orchestra_id NOT IN (SELECT id_Orchestra FROM orchestras WHERE rating < 4.0);

-- Exercise 3: Select Members Who Earn More Than Guitars
SELECT name, position FROM members WHERE wage > (SELECT AVG(wage) FROM members WHERE position = 'Guitar');

-- Exercise 4: Select High-Rated Orchestras Newer Than the Chamber Orchestra
SELECT name FROM orchestras WHERE year > (SELECT year FROM orchestras WHERE name = 'The Outfield') AND rating > 3.5;

-- Exercise 5: Select Players in Large Orchestras
SELECT o.name, COUNT(m.orchestra_id) FROM orchestras o JOIN members m
ON o.id_Orchestra = m.orchestra_id GROUP BY o.name
HAVING COUNT(m.orchestra_id) > (SELECT AVG(d.count)
                                FROM (SELECT orchestra_id, COUNT(orchestra_id) as count
                                FROM members GROUP BY orchestra_id) AS d);

-- UNIVERSITY

CREATE TABLE student (
id_student int NOT NULL AUTO_INCREMENT,
firstName varchar(128) NOT NULL,
lastName varchar(128) NOT NULL,
email varchar(128) NOT NULL,
birth_date DATE NOT NULL,
start_date DATE NOT NULL,
PRIMARY KEY (id_student)
);

CREATE TABLE course_enrollment (
id_Concerts int(100) NOT NULL AUTO_INCREMENT,
city varchar(64) NOT NULL,
country varchar(32) NOT NULL,
year int NOT NULL,
rating decimal,
orchestra_id int NOT NULL,
CONSTRAINT fk_Orchestra_Concerts
FOREIGN KEY (orchestra_id)
REFERENCES Orchestras(id_Orchestra),
PRIMARY KEY (id_Concerts)
);

CREATE TABLE course_edition (
id_member int(100) NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
position varchar(100) NOT NULL,
experience varchar(100) NOT NULL,
wage int NOT NULL,
orchestra_id int NOT NULL,
CONSTRAINT fk_Orchestra_Members
FOREIGN KEY (orchestra_id)
REFERENCES Orchestras(id_Orchestra),
PRIMARY KEY (id_member)
);

CREATE TABLE academy_semester (
id_member int(100) NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
position varchar(100) NOT NULL,
experience varchar(100) NOT NULL,
wage int NOT NULL,
orchestra_id int NOT NULL,
CONSTRAINT fk_Orchestra_Members
FOREIGN KEY (orchestra_id)
REFERENCES Orchestras(id_Orchestra),
PRIMARY KEY (id_member)
);

CREATE TABLE lecturer (
id_member int(100) NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
position varchar(100) NOT NULL,
experience varchar(100) NOT NULL,
wage int NOT NULL,
orchestra_id int NOT NULL,
CONSTRAINT fk_Orchestra_Members
FOREIGN KEY (orchestra_id)
REFERENCES Orchestras(id_Orchestra),
PRIMARY KEY (id_member)
);

CREATE TABLE course (
id_member int(100) NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
position varchar(100) NOT NULL,
experience varchar(100) NOT NULL,
wage int NOT NULL,
orchestra_id int NOT NULL,
CONSTRAINT fk_Orchestra_Members
FOREIGN KEY (orchestra_id)
REFERENCES Orchestras(id_Orchestra),
PRIMARY KEY (id_member)
);


