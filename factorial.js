function factorial(number){
    if (number < 0) {
        return "Numero negativo no tiene factorial"
    } else if(number == 0){
        return 1
    } else{
        let factorial = 1
        for (let i = 1; i <= number; i++) {
            factorial *= i
        }
        return factorial
    }
}
console.log(factorial(4))