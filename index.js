import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// clientes
const cliente1 = new Cliente("Isadora", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


// cliente 1 transações
const contaCorrenteIsadora = new ContaCorrente(1001, cliente1);
contaCorrenteIsadora.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteIsadora.transferir(valor, conta2);

console.log(contaCorrenteIsadora);
console.log(ContaCorrente.numeroDeContas);
