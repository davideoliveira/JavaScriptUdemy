function contaNotas(valor) {
    let nota100 = 0
    let nota50 = 0 
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    let saque = valor
   
    while(saque > 0) {
    
        if (saque >= 100) {
            nota100++
            saque -= 100
        } else if (saque >= 50) {
            nota50++
            saque -= 50
        } else if(saque >= 10) {
            nota10++
            saque -= 10
        } else if(saque >= 5) {
            nota5++
            saque -= 5
        } else if(saque >= 1) {
            nota1++
            saque -= 1
        }
    }
    preparaSaida(nota100, nota50, nota10, nota5, nota1)

}

function preparaSaida(nota100, nota50, nota10, nota5, nota1){
    if(nota100 > 0){
        console.log(`${nota100} nota(s) de R$100`)
    }
    if(nota50 > 0){
        console.log(`${nota50} nota(s) de R$50`)
    }
    if(nota10 > 0){
        console.log(`${nota10} nota(s) de R$10`)
    }
    if(nota5 > 0){
        console.log(`${nota5} nota(s) de R$5`)
    }
    if(nota1 > 0){
        console.log(`${nota1} nota(s) de R$1`)
    }
}

contaNotas(951)

