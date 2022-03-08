export class ContaCorrente {
    // publico
    static numeroDeContas = 0;
    agencia;
    cliente;

    // atributo
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    // acessor
    get cliente() {
        return this._cliente;
    }


    // privado
    _saldo = 0;

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
                this._saldo -= valor;
                return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) 
        {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}