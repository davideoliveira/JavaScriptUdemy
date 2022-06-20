// Função sem retorno
function imprimiSoma(a, b) {
    console.log(a + b)
}

imprimiSoma(2, 3)
imprimiSoma(2) // retorna NaN
imprimiSoma(2, 4, 5, 6)  //Utiliza apenas os dois primeiros e ignora o resto
imprimiSoma()  //Retorna NaN

//Função com retorno

function soma(a, b = 0) {
    return a + b 
}

console.log(soma(2))  //Retorna 2
console.log(soma(2, 3))  //Retorna 5