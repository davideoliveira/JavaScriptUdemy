const notas = [2.1, 6.6, 8.8, 9.4]

for(i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 20,
    peso: 64
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}