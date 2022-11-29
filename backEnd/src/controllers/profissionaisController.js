const Profissional = require('../models/profissionais');
const conDB = require('../DAO/bcdDAO');



const listaProfissional = (req, res) => {
    conDB.query(Profissional.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}



module.exports = {
    listaProfissional
}