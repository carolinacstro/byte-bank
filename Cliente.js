export class Cliente {
    nome;
    _cpf;

    get cpf() {
        return this._cpf;
    }

    // função especial - usado para inicializar atributo
    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}