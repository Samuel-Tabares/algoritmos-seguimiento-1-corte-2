
const sala1 = Array(10).fill(false); // crea las dos salas de cine vacias con 10 asientos
const sala2 = Array(10).fill(false);
let costo = 15000

function verDisponibilidad() {
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n")); //  dice si algun asiento esta disponible
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

function reservarAsiento() {
  const sala = prompt("Ingresa el número de la sala (1 o 2), recuerde que el valor de la boleta es de 15.000 pesos");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1; // ponemos el -1 para que el indice del array concuerde con el numero de asiento ya que comienza en "0"

  if (sala === "1" && !sala1[asiento]) { // cuando el asiento es falso "no esta reservado" 
    sala1[asiento] = true; // reserva el asiento
    alert(`Asiento ${asiento + 1} de la sala 1 reservado.`); // el indice del asiento le agrega 1 al comenzar desde 0 para que concuerde el asiento y que no haya un asiento 0
  } else if (sala === "2" && !sala2[asiento]) {
    sala2[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 2 reservado.`);
  } else {
    alert("El asiento ya está reservado o la sala no es válida.");
  }
}


function verPelicula() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento); // pregunta si la sala es la 1 para filtrar los asientos disponibles de ambas salas

  if (asientosLibres.length > 0) { // si hay asientos libres muestra cuandos hay en cual sala
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);
    alert("Disfrutad de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`); // si no hay asientos libres
  }
}

function verBalance() {
  let sala = parseInt(prompt("Ingresa el número de la sala (1 o 2) para ver su balance")) // ingersa el 1 o el 2 para ver el balance de la sala

  if(sala == 1){
    let sala1ocupados = sala1.filter(num => num > 0) // definimos "sala1ocupados" como el filtro de los asientos ocupados "true" del array sala1
    dineroRecaudado = costo * sala1ocupados.length // el dinero recaudado es el costo "15000 pesos" por el numero de asientos ocupados
    alert(`El dinero recaudado de la sala 1 es de: ${dineroRecaudado} pesos`)
  } else if(sala == 2){
    let sala2ocupados = sala2.filter(num => num > 0)
    dineroRecaudado = costo * sala2ocupados.length
    alert(`El dinero recaudado de la sala 2 es de: ${dineroRecaudado} pesos`)
  }else {
    alert(`Valor invalido`)
  }
}

while (true) { // muestra el menu de usuario
  console.log("hola")
  const opcion = prompt("Ingresa tu opción:Bienvenido a la sala de cine"+ " \nSelecciona una opción:" +"1. Ver disponibilidad de asientos"+ 
  " 2. Reservar asiento"+ " 3. Ver ocupación sala" + "4. ver dinero recaudado" + " 5. Salir" );

  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
    case "4":
      verBalance();
      break;
    case "5":
      alert("¡Hasta luego!");
      break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}