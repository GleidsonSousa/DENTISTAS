const Tratamento = require('../models/tratamentos');
const conDB = require('../DAO/bcdDAO');


const cadastrarTratamento = (req, res) => {
    conDB.query(Tratamento.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};

const excluirTratamento = (req, res) => {
    conDB.query(Tratamento.toDelete(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};

const editarTratamento = (req, res) => {
    conDB.query(Tratamento.toUpdate(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};
const listaTratamentos = (req, res) => {
    conDB.query(Tratamento.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const listaTratamento = (req, res) => {
    conDB.query(Tratamento.toReadId(req.params), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    cadastrarTratamento,
    editarTratamento,
    excluirTratamento,
    listaTratamentos,
    listaTratamento
}