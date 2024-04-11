function generarfibonacci(Numero) {
    if (Numero <= 0 || !Number.isInteger(Numero)) {
        return "por favor ingrese un numero entero positivo"
    }

    let resultado = ""
    let a = 0
    let b = 1
    resultado += `${a}, ${b}`


    for (let i = 2; i < Numero; i++) {
        const siguiente = a+b
        resultado += `, ${siguiente}`
        a = b
        b = siguiente
    }
    return resultado
}
console.log(generarfibonacci(8))
console.log(generarfibonacci(0))
console.log(generarfibonacci(-5))