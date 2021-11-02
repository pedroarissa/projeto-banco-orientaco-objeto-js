import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const pedro = new Cliente("Pedro", "11122233300")
const cCPedro = new ContaCorrente("1001", pedro)

const camila = new Cliente("Camila", "44455566600")
const cCCAmila = new ContaCorrente("1001", camila)




cCPedro.depositar(200);
cCPedro.transferir(50, cCCAmila)


console.log(ContaCorrente.numeroDeContas)
