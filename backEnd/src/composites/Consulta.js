export class Consulta {
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