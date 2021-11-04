export class ContaPoupanca {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia
    }
    get saldo() {
        return this._saldo;
    
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        } 
        this._saldo += valor;
    }

    sacar(valor) { 
        if (this._saldo >= valor) {
        this._saldo -= valor }
        return valor;
    }

    transferir(valor, conta) {
        if (valor <= 0) {
            return;
        } 
        this.sacar(valor);
        conta.depositar(valor);
    }
}