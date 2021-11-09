import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const pedro = new Cliente("Pedro", "11122233300");
const contaPedro = new ContaCorrente(pedro, "1001");

const camila = new Cliente("Camila", "44455566600");
const contaCamila = new ContaPoupanca(0, camila, "1001");

contaPedro.depositar(500);
contaPedro.transferir(100, contaCamila);
contaCamila.sacar(50);

const salarioPedro = new ContaSalario(pedro)


salarioPedro.depositar(100);
salarioPedro.sacar(10);

console.log(salarioPedro);





