function palindromo(numero) {
    if (!Number.isInteger(numero)) {
        return "El valor debe ser entero"   
    }
    const numstring = Math.abs(numero).toString()

    let numinvertido = ""

    for (let i = numstring.length - 1; i >= 0 ; i--) {
        numinvertido += numstring[i]
        
    }
    return numstring == numinvertido
}
console.log(palindromo(101))
console.log(palindromo(1234))
console.log(palindromo("gay"))