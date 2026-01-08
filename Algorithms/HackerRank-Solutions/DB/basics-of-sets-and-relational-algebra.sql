SHOW DATABASES ;

USE hackerrank;

SHOW TABLES;

CREATE TABLE challenges_occupations (
    Name VARCHAR(255),
    Occupation varchar(255)
);

SELECT * FROM challenges_occupations;

INSERT INTO challenges_occupations (Name, Occupation)
VALUES ('Samantha','Doctor');
INSERT INTO challenges_occupations (Name, Occupation)
VALUES ('Julia','Actor');
INSERT INTO challenges_occupations (Name, Occupation)
VALUES ('Maria','Actor');
INSERT INTO challenges_occupations (Name, Occupation)
VALUES ('Meera','Singer');
INSERT INTO challenges_occupations (Name, Occupation)
VALUES ('Ashley','Professor');
INSERT INTO challenges_occupations (Name, Occupation)
VALUES ('Ketty','Professor');
INSERT INTO challenges_occupations (Name, Occupation)
VALUES ('Christeen','Professor');
INSERT INTO challenges_occupations (Name, Occupation)
VALUES ('Jane','Actor');
INSERT INTO challenges_occupations (Name, Occupation)
VALUES ('Jenny','Doctor');
INSERT INTO challenges_occupations (Name, Occupation)
VALUES ('Priya','Singer');


-- SOLUTION

SELECT
    MAX(CASE WHEN Occupation='Doctor' THEN NAME ELSE NULL END ) AS Occupation,
    MAX(CASE WHEN Occupation='Professor' THEN NAME ELSE NULL END ) AS Occupation,
    MAX(CASE WHEN Occupation='Singer' THEN NAME ELSE NULL END ) AS Occupation,
    MAX(CASE WHEN Occupation='Actor' THEN NAME ELSE NULL END ) AS Occupation
FROM (
       SELECT NAME, Occupation, row_number()over(partition by Occupation order by NAME asc ) rn
     FROM challenges_occupations) Occupations
 GROUP BY rn;


DROP TABLE challenges_occupations;

-- Help source:
-- https://www.datacamp.com/tutorial/row-number-sql?utm_cid=21057859163&utm_aid=157296744937&utm_campaign=230119_1-ps-other~dsa-tofu~all_2-b2c_3-latam-en_4-prc_5-na_6-na_7-le_8-pdsh-go_9-nb-e_10-na_11-na&utm_loc=1010204-&utm_mtd=-c&utm_kw=&utm_source=google&utm_medium=paid_search&utm_content=ps-other~latam-en~dsa~tofu~tutorial~sql&gad_source=1&gad_campaignid=21057859163&gclid=Cj0KCQiA9t3KBhCQARIsAJOcR7y-v5V95HM6I7ELC0A5posHYVMHsDPYK2PQ_OsulBn1tv6t-yzDOUYaAlzJEALw_wcB\
-- https://www.geeksforgeeks.org/sql/window-functions-in-sql/
-- https://www.geeksforgeeks.org/sql/sql-max-function/
-- Book: SQL Cooking