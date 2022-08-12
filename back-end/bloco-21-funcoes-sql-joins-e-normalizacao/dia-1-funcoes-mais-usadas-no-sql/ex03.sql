--  Escreva uma query que exiba a média salarial de 
-- cada job_id, ordenando pela média salarial em ordem decrescente.

SELECT job_id, AVG(salary) AS 'media_salary' FROM hr.employees
GROUP BY job_id
ORDER BY media_salary DESC;
