-- Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas
-- para cada filme que possui um número maior de vendas internacionais (international_sales)
-- do que vendas nacionais (domestic_sales).

SELECT m.title, (b.domestic_sales + b.international_sales) AS 'VENDAS'
FROM pixar.movies AS m
INNER JOIN box_office AS b
ON b.movie_id = m.id
WHERE b.international_sales > domestic_sales;