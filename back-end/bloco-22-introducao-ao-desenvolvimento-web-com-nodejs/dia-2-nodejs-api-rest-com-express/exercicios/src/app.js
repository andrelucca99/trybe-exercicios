const express = require('express');
const atividades = require('./activities');

const app = express();

app.get('/myActivities/:id', (req, res) => {
    const atividade = atividades.find(({ id }) => id === Number(req.params.id));
    res.status(200).json(atividade);
});

app.get('/myActivities', (req, res) => {
    res.status(200).json({ atividades });
})

module.exports = app;