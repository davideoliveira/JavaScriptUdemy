const valores = [7.7, 8.9, 6, 7.5, 9.2]
console.log(valores[0], valores[4])  //Exibi os valores de indice 0 e 4 
console.log(valores[5]) // Não existe valor con indice 5, então ele retorna undefined

valores[5] = 10  // adiciona p valor 10 no indice 5
console.log(valores)
console.log(valores.length)  //Exibi quantos valores existem no array

valores.push(false, null, 'teste') // adiciona valores no array
console.log(valores)

console.log(valores.pop())  //deleta o ultimo valor
delete valores[0]  // deleta o primeiro valor
console.log(valores)

console.log(typeof valores)  //Exibi o tipo do array valor
