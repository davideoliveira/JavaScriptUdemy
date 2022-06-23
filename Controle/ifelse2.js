const entre = function(num1) {
    if(8 <= num1 && num1 < 10) {
        console.log('Quadro de honra')
    } else if(6 <= num1 && num1 < 8) {
        console.log('Aprovado')
    } else if (4 <= num1 && num1 < 6 ){
        console.log('Exame')
    } else if(0 < num1 && num1 < 4){
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

entre(2)
entre(4)
entre(6)
entre(8)
entre(-1)
