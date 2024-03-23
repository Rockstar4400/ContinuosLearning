SHOW DATABASES;

CREATE DATABASE HACKERRANK;

USE HACKERRANK;

CREATE TABLE Company (
    company_code varchar(100) NOT NULL,
    founder varchar(100) NOT NULL
);

CREATE TABLE Lead_Manager (
  lead_manager_code varchar(100) NOT NULL,
  company_code varchar(100) NOT NULL
);

CREATE TABLE Senior_Manager  (
    senior_manager_code varchar(100)NOT NULL,
    lead_manager_code varchar(100) NOT NULL,
    company_code varchar(100) NOT NULL
);

CREATE TABLE Manager  (
    manager_code varchar(100) NOT NULL,
    senior_manager_code varchar(100) NOT NULL,
    lead_manager_code varchar(100) NOT NULL,
    company_code varchar(100) NOT NULL
);

CREATE TABLE Employee   (
    employee_code varchar(100) NOT NULL,
    manager_code varchar(100) NOT NULL,
    senior_manager_code varchar(100) NOT NULL,
    lead_manager_code varchar(100) NOT NULL,
    company_code varchar(100) NOT NULL
);

SHOW TABLES;

DROP TABLE company;
DROP TABLE employee;
DROP TABLE lead_manager;
DROP TABLE manager;
DROP TABLE senior_manager;

TRUNCATE TABLE company;
TRUNCATE TABLE employee;
TRUNCATE TABLE lead_manager;
TRUNCATE TABLE manager;
TRUNCATE TABLE senior_manager;

INSERT INTO company VALUES ('C1','Monika');
INSERT INTO company VALUES ('C2','Samantha');
-- INSERT INTO company VALUES ('C2','Samantha');
-- INSERT INTO company VALUES ('C2','Samantha');

INSERT INTO lead_manager VALUES ('LM1','C1');
INSERT INTO lead_manager VALUES ('LM2','C2');
-- INSERT INTO lead_manager VALUES ('LM3','C2');
-- INSERT INTO lead_manager VALUES ('LM3','C2');

INSERT INTO senior_manager VALUES ('SM1','LM1','C1');
INSERT INTO senior_manager VALUES ('SM2','LM1','C1');
INSERT INTO senior_manager VALUES ('SM3','LM2','C2');

INSERT INTO manager VALUES ('M1','SM1','LM1','C1');
INSERT INTO manager VALUES ('M2','SM3','LM2','C2');
INSERT INTO manager VALUES ('M3','SM3','LM2','C2');

INSERT INTO employee VALUES ('E1','M1','SM1','LM1','C1');
INSERT INTO employee VALUES ('E2','M1','SM1','LM1','C1');
INSERT INTO employee VALUES ('E3','M2','SM3','LM2','C2');
INSERT INTO employee VALUES ('E4','M3','SM3','LM2','C2');


SELECT * FROM company;
SELECT * FROM lead_manager;
SELECT * FROM senior_manager;
SELECT * FROM employee;
SELECT * FROM manager;

-- BEGIN LEVEL 04
SELECT
    T3.company_code, T3.founder, T3.Total_LM, T3.Total_SM,
    T3.Total_M
    ,COUNT(DISTINCT E.employee_code) AS Total_E
FROM
    (
    -- BEGIN LEVEL 03
    SELECT
        T2.company_code, T2.founder, T2.Total_LM, T2.Total_SM
        ,COUNT(DISTINCT M.manager_code) AS Total_M
    FROM
        (
        -- BEGIN LEVEL 02
        SELECT
            T1.company_code, T1.founder, Total_LM
            ,COUNT(DISTINCT SM.senior_manager_code) AS Total_SM
        FROM
            (
            -- BEGIN LEVEL 01
            SELECT
                  CO.company_code, CO.founder
                 ,COUNT(DISTINCT LM.lead_manager_code) AS Total_LM
            from company AS CO
                INNER JOIN lead_manager AS LM
                WHERE CO.company_code = LM.company_code
            GROUP BY
                CO.founder
                ,LM.lead_manager_code
                ,CO.company_code
            HAVING COUNT(DISTINCT LM.lead_manager_code)
            -- END LEVEL 01
            ) AS T1
        INNER JOIN senior_manager AS SM
        WHERE T1.company_code = SM.company_code
        GROUP BY
        T1.founder
        ,T1.company_code
        ,Total_LM
        HAVING COUNT(DISTINCT SM.senior_manager_code)
        -- END LEVEL 02
        ) AS T2
    INNER JOIN manager AS M
    WHERE T2.company_code = M.company_code
    GROUP BY
    T2.founder,T2.company_code
    ,T2.Total_LM, T2.Total_SM
    -- END LEVEL 03
    ) AS T3
INNER JOIN employee AS E
WHERE T3.company_code = E.company_code
GROUP BY
T3.founder,T3.company_code,
T3.Total_LM, T3.Total_SM,T3.Total_M
ORDER BY IF(T3.company_code RLIKE '^[a-z]', 1, 2),T3.company_code ASC;
-- END LEVEL 04



-- BEST SOLUTION
select c.company_code, c.founder,
    count(distinct l.lead_manager_code), count(distinct s.senior_manager_code),
    count(distinct m.manager_code),count(distinct e.employee_code)
from Company c, Lead_Manager l, Senior_Manager s, Manager m, Employee e
where c.company_code = l.company_code
    and l.lead_manager_code=s.lead_manager_code
    and s.senior_manager_code=m.senior_manager_code
    and m.manager_code=e.manager_code
group by c.company_code order by c.company_code;