
/*
You're a math teacher at an elementary school. Today you taught
your class basic arithmetic operations ("+", "-", "*", "/") and
now you need to give the students some homework. You have a lot
of expressions in the format a <operation> b = c, where a, b,
and c are some integers and operation is one of the operations
given above.

Information about these expressions is stored in the table
expressions, which has the structure:

id: the unique operation id;
a: an integer;
b: an integer;
operation: one of the operations given above
("+", "-", "*", or "/");
c: an integer.
The homework you're going to give is simple: For each expression,
the student needs to determine whether it's correct or not, i.e.
whether it's true that the expression to the left of the = sign
equals c.

Since you have many students and checking all their answers
manually is a lot of work, you want to streamline the process
by automatically identifying all the expressions that are correct.
Given the table expressions, build the resulting table as follows:
The table should have the same columns as the initial table does,
but it should only contain those rows that represent correct
expressions. The rows should be ordered by id.

Example

For the following table expressions

id	a	b	operation	c
1	2	3	+	5
2	2	3	+	6
3	3	2	/	1
4	4	7	*	28
5	54	2	-	27
6	3	0	/	0
the output should be

id	a	b	operation	c
1	2	3	+	5
4	4	7	*	28
Explanation:

2 + 3 = 5 - correct;
2 + 3 = 6 - incorrect;
3 / 2 = 1 - incorrect;
4 * 7 = 28 - correct;
54 - 2 = 27 - incorrect;
3 / 0 = 0 - incorrect.

*/

SHOW DATABASES;

USE codesignals;

SHOW TABLES;

CREATE TABLE expressions (
  id INT NOT NULL AUTO_INCREMENT,
  a INT NOT NULL,
  b INT NOT NULL,
  operation char(1) NOT NULL,
  c INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO expressions (a,b,operation,c) VALUES (2,3,'+',5);
INSERT INTO expressions (a,b,operation,c) VALUES (2,3,'+',6);
INSERT INTO expressions (a,b,operation,c) VALUES (3,2,'/',1);
INSERT INTO expressions (a,b,operation,c) VALUES (4,7,'*',28);
INSERT INTO expressions (a,b,operation,c) VALUES (54,2,'-',27);
INSERT INTO expressions (a,b,operation,c) VALUES (3,0,'/',0);

TRUNCATE TABLE expressions;

SELECT a,b,operation,c FROM expressions;

CREATE PROCEDURE expressionsVerification()
BEGIN
	SELECT ex.id,ex.a,ex.b,ex.operation,ex.c FROM
    (SELECT id, CASE
               WHEN operation = '+' THEN a + b
               WHEN operation = '*' THEN a * b
               WHEN operation = '-' THEN a - b
               WHEN operation = '/' THEN a / b
           END as Result
    FROM expressions) AS Oper
INNER JOIN expressions ex ON Oper.id = ex.id
AND Oper.Result = ex.c;
END;

DROP PROCEDURE expressionsVerification;

SHOW PROCEDURE STATUS WHERE db = 'CODESIGNALS';

CALL expressionsVerification;