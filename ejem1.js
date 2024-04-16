const denominations = [50000, 20000, 10000, 5000, 2000, 1000]; //we define an array for the common denominations of money withdrawn

function getWithdrawalAmount() { //we create the function that will show the amount withdrawn by the user
  const userInput = prompt("¿Cuánto dinero deseas retirar  ?"); // we ask  the user how much do they want to withdraw and thats the value for the variable
  return parseFloat(userInput); // the value of the function is the amount set by the user, its in decimal value
}

function calculateBilletsNeeded(amount) { // we create a function with an "amount" parameter
  return denominations.map(denomination => { // create a new array based on the array "denominations"
    const billetsNeeded = Math.floor(amount / denomination); // we define a constant  that is the floor approx of amount/denomination
    amount -= billetsNeeded * denomination; // idk what is billet
    return billetsNeeded; // the value of the function will be: billetsNeeded
  });
}

function isValidWithdrawalAmount(amount) {
  return amount > 0 && amount % 1 === 0; // the value of the function has to be more than 0 and divisible by 1
}

function ATMTransaction() {
  const withdrawalAmount = getWithdrawalAmount(); // 

  if (!isValidWithdrawalAmount(withdrawalAmount)) { // if the function is not valid
    alert("El monto solicitado no es válido."); // will show the message string
    return;
  }

  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount); // the constant will be the function with the specific parameter

  alert("Para retirar $" + withdrawalAmount + ", necesitas:"); // show string with live values
  denominations.forEach((denomination, index) => { // will show the amount of tickets needed for each denomination
    if (billetsNeeded[index] > 0) { // entiendo a lo que va la funcion pero no entiendo como se ejecuta
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}


ATMTransaction(); // executes the starting function