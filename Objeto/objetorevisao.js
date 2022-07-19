const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    prprietario: {
        nome: 'raul', 
        idade: 56,
        endereco: {
            legradouro: 'Rua AbC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19,
    }, {
        nome: 'Ana',
        idade: 42,
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.prprietario.endereco.numero = 1000

console.log(carro)