-- Escreva uma query que exiba os nomes dos funcionários 
-- em letra maiúscula.

SELECT UCASE(CONCAT(first_name, ' ', last_name)) FROM hr.employees;