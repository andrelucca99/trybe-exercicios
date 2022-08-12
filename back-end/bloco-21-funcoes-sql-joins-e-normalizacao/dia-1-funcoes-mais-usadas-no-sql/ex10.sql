-- Escreva um query que exiba média salarial e o número de 
-- funcionários de todos os departamentos com mais de dez 
-- funcionários. Dica: agrupe pelo department_id.

SELECT department_id, AVG(salary) AS 'media-salarial', COUNT(*) AS 'QTD' FROM hr.employees
GROUP BY department_id
HAVING QTD > 10;