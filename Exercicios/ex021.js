function calculaPlanoSaude(idade) {
    let preco = 100

    if(idade < 10){
        preco += 80
    } else if(idade < 30) {
        preco += 50
    } else if(idade < 60) {
        preco +=95
    } else {
        preco += 130
    }
    return preco
}

console.log(calculaPlanoSaude(19))