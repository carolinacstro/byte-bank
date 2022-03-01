class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
                this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Isadora";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteIsadora = new ContaCorrente();
contaCorrenteIsadora.saldo = 0;
contaCorrenteIsadora.agencia = 1001;

// movimentações conta corrente
console.log(contaCorrenteIsadora.saldo);
console.log(contaCorrenteIsadora.saldo = 100);
contaCorrenteIsadora.sacar(200);
console.log(contaCorrenteIsadora.saldo);


// console.log(cliente1);
// console.log(cliente2);


