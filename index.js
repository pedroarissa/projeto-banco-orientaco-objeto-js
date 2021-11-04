import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";

const pedro = new Cliente("Pedro", "11122233300");
const contaPedro = new Conta("conta corrente", 0, pedro, "1001");


const camila = new Cliente("Camila", "44455566600");
const contaCamila = new Conta("conta poupança", 0, camila, "1001");

contaPedro.depositar(500);
contaPedro.transferir(100, contaCamila);
contaCamila.sacar(50);


console.log(contaPedro);
console.log(contaCamila);




