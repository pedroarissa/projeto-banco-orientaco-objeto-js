import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0; 
    constructor(agencia, _cliente) {
        this.agencia = agencia;
        this._saldo = 0;
        this._cliente = _cliente;
        ContaCorrente.numeroDeContas += 1;
                
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