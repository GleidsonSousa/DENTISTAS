const Consulta = require('../models/consulta');
const conDB = require('../DAO/bcdDAO');


const listaConsulta = (req, res) => {
    conDB.query(Consulta.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}



module.exports = {
    listaConsulta
}