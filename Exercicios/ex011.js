function anoBissexto(ano) {
    if((ano % 4) == 0 & (ano % 100) != 0  ){
        console.log(`${ano} é um ano bissexto`)
    } else{
        console.log(`${ano} não é um ano bissexto`)
    }
}

anoBissexto(2024)

console.log(2024 % 400)