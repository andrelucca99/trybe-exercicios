--  Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) 
-- e internacionais (international_sales) de cada filme.

SELECT m.title, b.domestic_sales, b.international_sales
FROM pixar.movies AS m
INNER JOIN box_office AS b
ON b.movie_id = m.id;

