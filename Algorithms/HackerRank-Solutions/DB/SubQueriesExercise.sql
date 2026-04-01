# source
# help:https://medium.com/@fapriandry/learn-database-6-mysql-understanding-table-relationships-using-sub-query-in-mysql-5844a4a5cd99

SHOW DATABASES;

CREATE DATABASE Medium;

USE Medium;

CREATE TABLE tb_students (
    student_id INT,
    name VARCHAR(255),
    age INT
);

CREATE TABLE tb_grades (
  student_id INT,
  subject VARCHAR(255),
  grade INT
);

SHOW TABLES;

SELECT * FROM tb_students;
SELECT * FROM tb_grades;

INSERT INTO tb_students VALUES (1,'Andi',20);
INSERT INTO tb_students VALUES (2,'Budi',21);
INSERT INTO tb_students VALUES (3,'Citra',22);
INSERT INTO tb_students VALUES (4,'Dewi',23);
INSERT INTO tb_students VALUES (5,'Eka',20);

INSERT INTO tb_grades VALUES (1,'Matematika',85);
INSERT INTO tb_grades VALUES (1,'Fisika',90);
INSERT INTO tb_grades VALUES (2,'Matematika',78);
INSERT INTO tb_grades VALUES (2,'Fisika',88);
INSERT INTO tb_grades VALUES (3,'Matematika',92);
INSERT INTO tb_grades VALUES (3,'Fisika',95);
INSERT INTO tb_grades VALUES (4,'Matematika',80);
INSERT INTO tb_grades VALUES (4,'Matematika',85);
INSERT INTO tb_grades VALUES (5,'Fisika',89);
INSERT INTO tb_grades VALUES (5,'Matematika',91);

DROP TABLE tb_grades;
DROP TABLE tb_students;


## Subquery 1 - Multiple Column Subquery ???

SELECT grade FROM tb_students
WHERE (grade, subject) = (
    SELECT MAX(grade), subject FROM tb_grades WHERE subject = 'Math'
);

## Subquery 2 - Scalar Subquery

SELECT name, (SELECT AVG(grade) FROM tb_grades) AS avg_grade FROM tb_students;


## Exercises

CREATE TABLE tb_mahasiswa (
  student_id INT,
  subject VARCHAR(255),
  grade INT
);

CREATE TABLE tb_matakuliah (
  student_id INT,
  subject VARCHAR(255),
  grade INT
);

CREATE TABLE tn_jurusan  (
  student_id INT,
  subject VARCHAR(255),
  grade INT
);

CREATE TABLE tb_dosen  (
  student_id INT,
  subject VARCHAR(255),
  grade INT
);
