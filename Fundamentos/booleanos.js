let isAtivo = false

console.log(isAtivo)
  
isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!'teste')

console.log("Os falsos....")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

let nome = 'Davi'
console.log(nome || 'Desconhecido') // Se for verdadeiro exibi nome se não exibi Desconhecido.