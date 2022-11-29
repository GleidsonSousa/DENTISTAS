const express = require('express');
const router = express.Router();

const RotaProfissionais = require("../controllers/profissionaisController");
const RotaConsulta = require("../controllers/consultasController");
const RotaTratamentos = require("../controllers/tratamentosController");


router.get("/profissionais/read/", RotaProfissionais.listaProfissional);

router.get("/consultas/read/", RotaConsulta.listaConsulta);

router.post("/tratamentos/create/", RotaTratamentos.cadastrarTratamento);
router.get("/tratamentos/read/", RotaTratamentos.listaTratamentos);
router.get("/tratamentos/profissional/:id_profissional", RotaTratamentos.listaTratamento);
router.delete("/tratamentos/delete/", RotaTratamentos.excluirTratamento);
router.put("/tratamentos/update/", RotaTratamentos.editarTratamento);


module.exports = router;