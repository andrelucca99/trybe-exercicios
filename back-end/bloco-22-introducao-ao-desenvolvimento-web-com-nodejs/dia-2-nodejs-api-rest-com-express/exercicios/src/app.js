const express = require('express');
const atividades = require('./activities');

const app = express();

app.get('/myActivities/:id', (req, res) => {
    const atividade = atividades.find(({ id }) => id === Number(req.params.id));
    res.status(200).json(atividade);
});

app.get('/myActivities', (req, res) => {
    res.status(200).json({ atividades });
});

app.get('/filter/myActivities', (req, res) => {
    const { status } = req.query;
    let filterAtiv = atividades;

    if (status) {
        filterAtiv = atividades.filter((atividade) => atividade.status === status);
    }

    res.status(200).json({ ativida: filterAtiv });
});

module.exports = app;