const [a] = [10]
console.log(a)

const[ n1, , n3, n4,n5 = 0 ] = [10, 9, 8, 5]
console.log(n1, n3, n4, n5)

const[, [, nota]] = [[,8 , 8], [9, 6, 8]]  //Array de arrays, ignora o primeiro valor e dentro do segundo, ignore o primerio e pegue o segundo.
console.log(nota)