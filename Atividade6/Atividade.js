class Estudante{
    constructor(nome, email, RA, curso, disciplinas){
        this.nome = nome,
        this.email = email,
        this.RA = RA,
        this.curso = curso,
        this.disciplinas = disciplinas
    }

    primeiraDisciplina(){
        return this.disciplinas[0]
    }

    ultimaDisciplina(){
        return this.disciplinas[this.disciplinas.length - 1]
    }
}

const estudante1 = new Estudante("Fulano", "Foo@Gmail.com", "999999", "ADS", ["Calculo", "Engenharia", "Sistemas", "Programação"])
const estudante2 = new Estudante("Ciclano", "Bar@Gmail.com", "888888", "COMEX", ["Administração", "Comunicação", "Gestão", "Marketing"])
console.log(JSON.stringify([estudante1, estudante2], null, 2))

console.log(estudante1.primeiraDisciplina())
console.log(estudante1.ultimaDisciplina())