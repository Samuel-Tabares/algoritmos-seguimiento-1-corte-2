function primo(number) {
    if (number < 2) {
        return false
    }
    if (number == 2){
        return true
    }
    if (number % 2 == 0){
        return false
    } 

    const limite = Math.sqrt(number)
    for (let i = 3; i <= limite; i+=2) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}
console.log(primo(69))