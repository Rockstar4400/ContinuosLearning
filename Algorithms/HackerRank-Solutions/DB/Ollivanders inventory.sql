SHOW DATABASES ;

USE hackerrank;

SHOW TABLES;

CREATE TABLE challenges_wands_table (
    id INT,
    code INT,
    coins_needed INT,
    power INT
);

CREATE TABLE challenges_wands_properties (
    code INT,
    age INT,
    is_evil INT
);

SELECT * FROM challenges_wands_table;
SELECT * FROM challenges_wands_properties;

INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (1,4,3688,8);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (2,3,9365,3);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (3,3,7187,10);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (4,3,734,8);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (5,1,6020,2);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (6,2,6773,7);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (7,3,9873,9);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (8,3,7721,7);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (9,1,1647,10);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (10,4,504,5);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (11,2,7587,5);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (12,5,9897,10);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (13,3,4651,8);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (14,2,5408,1);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (15,2,6018,7);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (16,4,7710,5);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (17,2,8798,7);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (18,2,3312,3);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (19,4,7651,6);
INSERT INTO challenges_wands_table (id, code, coins_needed, power ) VALUES (20,5,5689,3);


INSERT INTO challenges_wands_properties (code, age, is_evil ) VALUES (1,45,0);
INSERT INTO challenges_wands_properties (code, age, is_evil ) VALUES (2,40,0);
INSERT INTO challenges_wands_properties (code, age, is_evil ) VALUES (3,4,1);
INSERT INTO challenges_wands_properties (code, age, is_evil ) VALUES (4,20,0);
INSERT INTO challenges_wands_properties (code, age, is_evil ) VALUES (5,17,0);

-- SOLUTION

SELECT wands.id, proper.age, wands.coins_needed, wands.power FROM challenges_wands_table wands
INNER JOIN challenges_wands_properties proper
    on wands.code = proper.code AND
       proper.is_evil = 0
ORDER BY wands.power DESC,  proper.age DESC;

SELECT wands.id, proper.age, wands.coins_needed, wands.power
FROM challenges_wands_table wands
JOIN challenges_wands_properties proper
on wands.code = proper.code
WHERE proper.is_evil=0 and wands.coins_needed =
(Select MIN(wandsSub.coins_needed)
From challenges_wands_table wandsSub
JOIN challenges_wands_properties properSub
on wandsSub.code = properSub.code
Where wands.power = wandsSub.power
and proper.age = properSub.age)
ORDER BY wands.power DESC, proper.age DESC;


DROP TABLE challenges_wands_table;
DROP TABLE challenges_wands_properties;