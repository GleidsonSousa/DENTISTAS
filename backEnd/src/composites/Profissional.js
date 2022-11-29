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