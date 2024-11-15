
SHOW DATABASES;

CREATE DATABASE CODESIGNALS;

USE CODESIGNALS;

SHOW TABLES;

CREATE TABLE Suspect(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (20) NOT NULL,
    surname VARCHAR (20) NULL,
    height INT NOT NULL,
    weight INT NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM Suspect;

DROP TABLE Suspect;

INSERT INTO Suspect (name,surname, height, weight)
VALUES ('John','Doe',165,60);
INSERT INTO Suspect (name,surname, height, weight)
VALUES ('Bill','Green',170,67);
INSERT INTO Suspect (name,surname, height, weight)
VALUES ('Baelfire','Grehn',172,70);
INSERT INTO Suspect (name,surname, height, weight)
VALUES ('Bill','Gretan',185,55);
INSERT INTO Suspect (name,surname, height, weight)
VALUES ('Brendon','Grewn',180,50);
INSERT INTO Suspect (name,surname, height, weight)
VALUES ('bill','Green',172,50);

CREATE PROCEDURE suspectsInvestigation2()
BEGIN

	select id, name, surname
    from Suspect
    where not (height > 170
                and name like 'B%'
                and surname like 'Gre_n')
    order by id;

END;

DROP PROCEDURE suspectsInvestigation2;

SHOW PROCEDURE STATUS WHERE db = 'CODESIGNALS';

CALL suspectsInvestigation2();