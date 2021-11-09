import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Contas/ContaCorrente.js";
import {ContaPoupanca} from "./Contas/ContaPoupanca.js";
import {ContaSalario} from "./Contas/ContaSalario.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./Funcionarios/SistemaAutenticacao.js";

const pedro = new Cliente("Pedro", "11122233300", 456);
const contaPedro = new ContaCorrente(pedro, "1001");
const salarioPedro = new ContaSalario(pedro);

const camila = new Cliente("Camila", "44455566600");
const contaCamila = new ContaPoupanca(0, camila, "1001");


const diretor = new Diretor("Glauco", 11122233300, 10000);
diretor.cadastrarSenha(123456);

const gerente = new Gerente("Jobson", 44455566600, 5000);
gerente.cadastrarSenha(123);

const diretorLogado = SistemaAutenticacao.login(diretor, 123456);
const gerenteLogado = SistemaAutenticacao.login(gerente, 123);

console.log(diretorLogado,gerenteLogado)
const clienteLogado = SistemaAutenticacao.login(pedro, 456);

console.log(clienteLogado)



