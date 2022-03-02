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
contaCorrenteIsadora.cliente = cliente1;
contaCorrenteIsadora.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;


contaCorrenteIsadora.transferir(200, conta2);
console.log(conta2);
console.log(contaCorrenteIsadora);

