function compara (lista) {
    let valores = Number(lista.split(' '))
    let record = valores[0]
    let piorJogo = 1
    let recordBatido = 0

    for( i = 0 in valores) {
        if(valores[i] > record){
            record = valores[i]
            recordBatido++
        } else if(valores[i] < piorJogo) {
            piorJogo = i 
        }

    }
    return [recordBatido, piorJogo]
}

console.log(compara('10 20 20 8 25 3 0 30 1'))