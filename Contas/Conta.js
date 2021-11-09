export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois ele é uma classe abstrata");
        }
       
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;    
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
        throw new Error("O método sacar do objeto Conta é abstrato")
        
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