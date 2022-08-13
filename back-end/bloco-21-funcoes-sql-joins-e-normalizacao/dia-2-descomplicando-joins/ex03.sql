-- Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente

SELECT m.title, b.rating
FROM pixar.movies AS m
INNER JOIN box_office AS b
ON b.movie_id = m.id
ORDER BY b.rating DESC;
