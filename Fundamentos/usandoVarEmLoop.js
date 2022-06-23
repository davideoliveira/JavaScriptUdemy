for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i = ', i)  //  Imprime 10



for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i = ', i)  //  Erro



//===============================================

const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2] ()
funcs[8] ()