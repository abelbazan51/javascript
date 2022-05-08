//function saludar(nombre, mensaje) {
//console.log(mensaje + " " + nombre);
//}

//saludar("mariana", "hola bienvenida");
//saludar("espero que bien", "como estas?");

//let n1 = parseInt(prompt("ingresa un numero"));
//let n2 = parseInt(prompt("ingresa un numero"));
//let n3 = parseInt(prompt("ingresa otro producto "));
//function sumar(num1, num2, num3) {
// alert("el resultado de la sumaa es " + (num1 + num2 + num3));
//}
//sumar(n1, n2, n3);

//let nombre = prompt("ingresa tu nombre");
//console.log(
//"este es nuestro catalogo de nuestros productos " +
"\nhamburguesa" + "\nempanadas" + "\nmilanesas";
//);
//let vari = parseInt(prompt());
//let resultado = 0;
//console.log(resultado);
//function sumar(num1, num2) {
// resultado = num1 + num2;
//}
//function mostrar(mensaje) {
// console.log(mensaje);
//}
//sumar(vari, 5);
//mostrar(resultado);
//

//let result = 0;
//function restar(num1, num2) {
//result = num1 - num2;
//}
//restar(23, 4);

//console.log(result);

//arrays
//const papas = ["con cheddar", "sin cheddar"];
//const hamburguesas = [
//"con cheddar",
//"sin cheddar",
// "con panceta",
//"sin panceta",
//];
//let mod = prompt("ingrese el nombre que desea eliminar");
//let arraystring = ["horacio", "maria", "pablo", "paola"];
//const producto = papas.concat(hamburguesas);

//console.log(producto);

//console.log(arraystring);
//eliminar elementos
//arraystring.pop();

//agregar elementos al final del array

//arraystring.push("florencia", "julian", "mauricio");

//for (let index = 0; index < arraystring.length; index++) {
//  console.log(arraystring[index]);
//}

const hambur = {
  nombre: "hamburguesas",
  precio: 450,
};

const mila = {
  nombre: "milanesas gigantes",
  precio: 1000,
};
const papas = {
  nombre: "papas fritas",
  precio: 220,
};

const pizzas = {
  nombre: "pizzas",
  precio: 500,
};
const empanada = {
  nombre: "empanadas",
  precio: 600,
};
//console.log(empanada);
//console.log(pizzas);
//console.log(mila);
//console.log(papas);
//console.log(hambur);
//array
const prod = [hambur, mila, papas, pizzas, empanada];
console.log(prod);
let datos = prompt("ingrese su nombre y apellido ");

let direccion = prompt("indique la direccion de su domicilio");
console.log("envio para " + datos + " ala direccion " + direccion);
let productos = prompt(
  "ingresa un producto de nuestra lista " +
    "\nhamburguesas" +
    "\nmilanesas gigantes" +
    "\npapas " +
    "\npizzas" +
    "\nempanadas"
);

let cantidad = parseInt(prompt("que cantidad quiere ? "));
console.log(cantidad + " " + productos);
let vuelto = parseInt(prompt("indique con cuanto va a abonar"));
let total;
switch (productos) {
  case "hamburguesas":
    total = cantidad * 450;

  case "milanesas gigantes":
    total = cantidad * 1000;
    break;
  case "papas":
    total = cantidad * 200;
    break;
  case "pizzas":
    total = cantidad * 500;
    break;
  case "empanadas":
    total = cantidad * 600;
    break;

  default:
    alert("esa opcion no esta disponible");
    break;
}
console.log("el precio es $" + total);
alert(
  "ya estamos preparando su pedido muchas grasias " +
    datos +
    " lo llevaremos a " +
    direccion +
    " apenas este hasta pronto "
);
console.log("el cliente va a abonar con $" + vuelto);

if (vuelto > productos) {
  console.log(
    "nuesto delivery devera llevar un total de $",
    vuelto - total,
    "para darle cambio al cliente"
  );
} else {
  console.log("no le alcanza para pagar el producto ");
  alert("su dinero no alcanza para pagar el producto");
}
