function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

const obj = { max: 50, min: 40}
console.log(rand(obj))  // Assumi os valores definidos em obj
console.log(rand({min: 955}))  //Assumi o valor max já definido
console.log(rand({}))  // Assumi o valor min e max
console.log(rand())  // Erro
