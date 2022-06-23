function soBoaNoticia (nota) {
    if(nota >= 7 ) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.2)
soBoaNoticia(5.4)

function seforVardadeEuFalo(valor) {
    if(valor) {
        console.log("É verdade... " + valor)
    }
}

seforVardadeEuFalo()
seforVardadeEuFalo(null)
seforVardadeEuFalo(undefined)
seforVardadeEuFalo(NaN)
seforVardadeEuFalo('')
seforVardadeEuFalo(0)
seforVardadeEuFalo(-1)
seforVardadeEuFalo(' ')
seforVardadeEuFalo('??')
seforVardadeEuFalo([])
seforVardadeEuFalo([1, 2])
seforVardadeEuFalo({})