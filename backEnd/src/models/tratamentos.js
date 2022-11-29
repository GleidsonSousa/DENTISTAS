const toCreate = (model) => {
    return `INSERT INTO tratamentos VALUES (DEFAULT, ${model.consulta},'${model.tratamento}',${model.valor})`;
}

const toReadAll = () => {
    return "SELECT * FROM tratamentos";
}

const toReadId = (model) => {
    return `SELECT * FROM vw_info  WHERE id_profissional =  ${model.id_profissional}`;
}


const toDelete = (model) => {
    return `DELETE FROM tratamentos WHERE id_tratamento = ${model.id_tratamento}`;
}

const toUpdate = (model)=>{
    return `UPDATE tratamentos SET consulta = ${model.consulta}, tratamento = '${model.tratamento}', valor = ${model.valor} WHERE id_tratamento = ${model.id_tratamento}`;
    }

module.exports = {
    toCreate,
    toReadAll,
    toReadId,
    toUpdate,   
    toDelete
}