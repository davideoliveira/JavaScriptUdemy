const escola = 'cod3r'

console.log(escola.charAt(4))  // Exibi o caracter num 4 da string escola.
console.log(escola.charCodeAt(3))  // Exibi o valor unicode do caracter 3 de escola.
console.log(escola.indexOf('r')) // Exxibi em que posição está a letra r.

console.log(escola.substring(1)) //Exibi somente a partir da posição 1
console.log(escola.substring(0,3))  // Exibi do indice 0 até o 3.

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))  //substitui o número 3 por e.

console.log('Ana,Maria,Pedro'.split(',')) // Cria um array utilizando a ',' como separador