--  Escreva uma query que exiba a quantidade de pessoas 
-- que trabalham como pessoas programadoras (it_prog).

SELECT job_id, COUNT(*) AS 'QTD' FROM hr.employees
WHERE job_id = 'it_prog';