export class Cliente {
    constructor(nome, _cpf, senha) {
        this.nome = nome;
        this._cpf = _cpf;
        this._senha = senha;
    }

    get cpf() {
        return this._cpf;
    }

    
}