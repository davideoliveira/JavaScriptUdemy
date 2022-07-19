const triangulo = function(a, b, c) {
    if( a == b & a == c){
        console.log('Este é um triângulo equilátero')
    } else if( (a == b & a != c) || ( a == c & a != b) || (c == b & c != a) ) {
        console.log('Este é um triângulo Isósceles')
    } else {
        console.log('Este é um triângulo escaleno')
    }

}

triangulo( 5, 5, 5)