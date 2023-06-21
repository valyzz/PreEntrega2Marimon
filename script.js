// Platos y  precios
var plato1 = { nombre: "Cayeye", precio: 15000 };
var plato2 = { nombre: "Hamburguesa", precio: 20000 };
var plato3 = { nombre: "Huevos", precio: 18000 };
var plato4 = { nombre: "Pasta", precio: 22000 };
var plato5 = { nombre: "Pastel", precio: 10000 };

var nombreUsuario = prompt("Ingrese su nombre:");

var mensajePlatos = "Seleccione el número correspondiente al plato que desea comprar:\n";
mensajePlatos += "1. " + plato1.nombre + "\n";
mensajePlatos += "2. " + plato2.nombre + "\n";
mensajePlatos += "3. " + plato3.nombre + "\n";
mensajePlatos += "4. " + plato4.nombre + "\n";
mensajePlatos += "5. " + plato5.nombre + "\n";

var total = 0;

do {
  var opcionPlato = parseInt(prompt(mensajePlatos));

  while (opcionPlato < 1 || opcionPlato > 5) {
    opcionPlato = parseInt(prompt("Opción inválida. Por favor, ingrese un número válido:"));
  }

  if (opcionPlato === 1) {
    total += plato1.precio;
  } else if (opcionPlato === 2) {
    total += plato2.precio;
  } else if (opcionPlato === 3) {
    total += plato3.precio;
  } else if (opcionPlato === 4) {
    total += plato4.precio;
  } else if (opcionPlato === 5) {
    total += plato5.precio;
  }

  var opcionAgregar = prompt("Desea agregar otro plato? (si/no)");

  while (opcionAgregar !== "si" && opcionAgregar !== "no") {
    opcionAgregar = prompt("Opción inválida. Por favor, ingrese 'si' o 'no':");
  }

  if (opcionAgregar === "si") {
    alert("Plato agregado. Continúe seleccionando:");
  }

} while (opcionAgregar === "si");

var opcionPropina = prompt("Gracias por su compra, " + nombreUsuario + "!\nEl total a pagar es: $" + total + "\n\n¿Desea pagar una propina voluntaria del 5%? (si/no)");

while (opcionPropina !== "si" && opcionPropina !== "no") {
  opcionPropina = prompt("Opción inválida. Por favor, ingrese 'si' o 'no':");
}

if (opcionPropina === "si") {
  var propina = total * 0.05;
  var totalConPropina = total + propina;
  alert("Total a pagar (con propina): $" + totalConPropina.toFixed(2) +  "\nGracias por su compra!");
} else {
  alert("Total a pagar: $" + total + "\nGracias por su compra!");}
