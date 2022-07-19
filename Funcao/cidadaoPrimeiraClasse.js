// Criar função de forma literal
function fun1() {

}

//  Armazenar uma função em uma variável
const fun2 = function() {

}

//  Armazenar uma função dentro de uma array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//  Armazenar uma função dentro de um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opaa'}
console.log(obj.falar())

// Passar uma função como parâmetro
function run(fun){
    fun()
}

run(function() {console.log('Executando...')})

//  Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
