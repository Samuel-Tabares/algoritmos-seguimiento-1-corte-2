
const rooms = [100, 101, 102, 103, 201, 202, 203, 301, 302, 303]; // set an array for the rooms at the hotel
const roomStatus = Array(10).fill(false); // creates a new array named "status" and sets all the 10 rooms like "false"
const roomReservations = {}; // creates an empty array


const reserveRoom = (roomNumber, name) => { // creates a function with 2 parameters
  const index = rooms.indexOf(roomNumber);// there are some methods that are not seen yet
  if (index !== -1 && roomStatus[index] === false) { // if the index isnt equal to "-1" and the room status is "empty" or false
    roomStatus[index] = true; // the room status is now true
    roomReservations[roomNumber] = name; // and adds the room number in the room reservations array and set it true adding their name
    alert(`La habitación ${roomNumber} ha sido reservada por ${name}.`); // alert with a string with live values
  } else {
    alert(`La habitación ${roomNumber} ya está reservada.`);
  }
};


const freeRoom = (roomNumber) => {
  const index = rooms.indexOf(roomNumber); // new constant named index thath will be the index roomnumber of rooms array
  if (index !== -1 && roomStatus[index] === true) { // if the index is not -1 and the room is not free
    roomStatus[index] = false; 
    delete roomReservations[roomNumber];
    alert(`La habitación ${roomNumber} ha sido liberada.`);
  } else {
    alert(`La habitación ${roomNumber} ya está libre.`);
  }
};


const showAvailableRooms = () => { // no entiendo algunas cosas arle 😭
  const availableRooms = rooms.filter((room, index) => { // filter the array "rooms" that are available
    return roomStatus[index] === false;
  });

  if (availableRooms.length > 0) { // if there are available rooms
    alert(`Las habitaciones disponibles son: ${availableRooms.join(', ')}`); // shows the live available rooms 
  } else {
    alert('No hay habitaciones disponibles.');
  }
};


const showOccupancy = () => { // shows the occupany of the rooms
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false; // set the amount of rooms available based on the rooms
  });
  const reservedRooms = rooms.filter((room, index) => {
    return roomStatus[index] === true; // set the amount of reserved rooms based on the rooms
  });
  alert(`Hay ${availableRooms.length} habitaciones disponibles y ${reservedRooms.length} habitaciones reservadas.`);
};


const handleUserInput = () => {
  let userInput; // will show the menu to do the functions and inteeract with the user 
  do {
  
    userInput = prompt('Menú \n' + '1. Reservar una habitación '+ 
    ' 2. Liberar una habitación'+
    ' 3. Consultar ocupación' +
  ' 4. Salir');

    switch (userInput) { //  select each function based on the user selections 
      case '1':
        const roomNumber = parseInt(prompt('Ingrese el número de la habitación:\n[100, 101, 102, 103, 201, 202, 203, 301, 302, 303]:'));
        if (!isNaN(roomNumber) && rooms.includes(roomNumber)) {
          const name = prompt('Ingrese su nombre:');
          reserveRoom(roomNumber, name);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      case '2':
        const roomNumberToFree = parseInt(prompt('Ingrese el número de la habitación que desea liberar:'));
        if (!isNaN(roomNumberToFree) && rooms.includes(roomNumberToFree)) {
          freeRoom(roomNumberToFree);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      case '3':
        showOccupancy();
        break;
      case '4':
        alert('Saliendo...');
        break;
      default:
        alert('Opción inválida. Intente de nuevo.');
        break;
    }
  } while (userInput !== '4');
};

// Ejecutar la función para manejar la interacción con el usuario
handleUserInput();