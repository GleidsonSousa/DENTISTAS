class Profissional {
    constructor(id_profissional, nome, especialidade){
        this.id_profissional = id_profissional
        this.nome = nome
        this.especialidade = especialidade
    }

    consultas = []

    addComponent(con){
        this.consultas.push(con)
    }
}

class Consulta {
    constructor(id_consulta, nome, data, horario){
        this.id_consulta = id_consulta
        this.nome = nome
        this.data = data
        this.horario = horario
    }

    tratamentos = []

    addComponent(trat){
        this.tratamentos.push(trat)
    }
}

class Tratamento{
    constructor(id_tratamento, consulta, nome, valor){
        this.id_tratamento = id_tratamento
        this.consulta = consulta
        this.nome = nome
        this.valor = valor
    }
}

const Tratament = require('../models/tratamento');
const conDB = require('../DAO/bcdDAO');


const cadastrarTratamento = (req, res) => {
    conDB.query(Tratament.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};

const excluirTratamento = (req, res) => {
    conDB.query(Tratament.toDelete(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};

const editarTratamento = (req, res) => {
    conDB.query(Tratament.toUpdate(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};
const listaTratamentos = (req, res) => {
    conDB.query(Tratament.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}


const listaTratamento = (req, res) => {
    conDB.query(Tratament.toReadId(req.params), (err, result) => {
        if (err == null){
            let prof = new Profissional(result[0].id_profissional, result[0].nome, result[0].especialidade,)
            let consultas = []
            result.forEach(r => {
                consultas.push({"id": r.id_consulta, "nome": r.paciente, "data": r.data, "horario": r.horario})
            });
            consultas = Array.from(new Set(consultas.map(a => a.id)))
            .map(id => {
              return consultas.find(a => a.id === id)
            })
            consultas.forEach(c => {
                let con = new Consulta(c.id_consulta, c.nome, c.data, c.horario)
                result.forEach(r => {
                    if (c.id == r.id_consulta) {
                        let trat = new Tratamento(r.id_tratamento, r.id_consulta, r.tratamento, r.valor)
                        con.addComponent(trat)
                    }
                });
                prof.addComponent(con)
            });
            res.json(prof).end()
        }
        else
            res.status(500).json(err).end();
    });
}


module.exports = {
    cadastrarTratamento,
    editarTratamento,
    excluirTratamento,
    listaTratamentos,
    listaTratamento
}