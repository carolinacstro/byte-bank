import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// clientes
const cliente1 = new Cliente();
cliente1.nome = "Isadora";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;


// cliente 1
const contaCorrenteIsadora = new ContaCorrente();
contaCorrenteIsadora.agencia = 1001;

// movimentações conta corrente - cliente 1
contaCorrenteIsadora.depositar(100);
contaCorrenteIsadora.depositar(100);
contaCorrenteIsadora.depositar(100);

const valorSacado = contaCorrenteIsadora.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteIsadora);


