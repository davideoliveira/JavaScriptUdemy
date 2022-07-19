function jurosSimples(capInicial, taxaJuros, tempo) {
    return capInicial + (capInicial * taxaJuros * tempo)
}

function jurosCompostos(capInicial1, taxaJuros1, tempo1) {
    return  capInicial1 * (1 + taxaJuros1) ** tempo1
}


console.log('Juros simples: ' +  jurosSimples(10, 0.1, 6))
console.log('Juros compostos: ' + jurosCompostos(10, 0.1, 6))