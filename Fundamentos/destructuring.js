 // Novo recurso do js 2015

 const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
 }

const {nome, idade} = pessoa  //  Tire nome e idade do objeto pessoa.
console.log(nome, idade)

const { nome: n, idade: i } = pessoa  //  Atribuindo nome e idade a n e i
console.log(n, i)

const { sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const { endereco : {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const { conta: {ag, num}}  = pessoa  /// Erro
console.log(ag, num)