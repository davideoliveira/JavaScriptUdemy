function aredondamento(nota){
    
    if(nota >= 38 & (nota % 5 <= 3) ) {
        
        nota += (5 - nota % 5)
        
    }
    return nota
}

console.log(aredondamento(48))