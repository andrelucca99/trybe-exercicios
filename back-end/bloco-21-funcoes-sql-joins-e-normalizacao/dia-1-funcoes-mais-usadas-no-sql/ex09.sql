-- Escreva uma query que exiba em ordem decrescente a média
-- salarial de todos os cargos, exceto das pessoas programadoras 
-- (it_prog).

SELECT job_id, AVG(salary) AS 'media_salarial' FROM hr.employees
WHERE job_id <> 'it_prog'
GROUP BY job_id
ORDER BY media_salarial DESC;