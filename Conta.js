export class Conta {
    constructor(saldoInicial, cliente, agencia) {
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
        return this._sacar(valor, taxa);
        
    }

    _sacar(valor, taxa) {
        const valorSaque = taxa * valor;
        if (this._saldo >= valorSaque) {
            this._saldo -= valorSaque 
            return valorSaque; 
        }
        return 0;

    }

    transferir(valor, conta) {
        if (valor <= 0) {
            return;
        } 
        this.sacar(valor);
        conta.depositar(valor);
    }
}