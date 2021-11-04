export class Conta {
    constructor(tipo, saldoInicial, cliente, agencia) {
        this._tipo = tipo;
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia
    }
   
    get saldo() {
        return this._saldo
    }
    
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    } 

    get cliente() {
        return this._cliente
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        } 
        this._saldo += valor;
    }

    sacar(valor) { 
        let taxa = 1;
        if(this._tipo == "conta corrente") {
            taxa = 1.1
        }
        const valorSaque = taxa * valor;
        if (this._saldo >= valorSaque) {
        this._saldo -= valorSaque }
        return valorSaque;
    }

    transferir(valor, conta) {
        if (valor <= 0) {
            return;
        } 
        this.sacar(valor);
        conta.depositar(valor);
    }
}