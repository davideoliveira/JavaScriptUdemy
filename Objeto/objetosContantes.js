// pessoa aponta para um endereço do objeto e esse endereço aponta para o valor
const pessoa = {
    nome: 'João'
}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Erro, tentando atribuir um novo endereço para pessoa
pessoa = {
    nome: 'Ana'
}

