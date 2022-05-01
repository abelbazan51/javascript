//let uno = prompt("juguemos a la batalla naval :) cuanto es 2x2 ??");

//if (uno == 4) {
//console.log("me diste");
//alert("me diste ");
//} else {
// console.log("fallaste !! aguaaaa!!!");
// alert("fallaste !!!aguaaaa!!!");
//}

//let ingreso = parseInt(prompt("ingresa un numero para ver su tabla numerica "));
//let limite = parseInt(prompt("por cuanto lo queres multiplicar?"));

//for (let fin = 0; fin < limite; fin = fin + 1) {
// console.log(
// "resultado " + ingreso + "x" + fin + " es igual a " + ingreso * fin
// );
//}

let repetir = true;

let ingreso = prompt(
  "seleccione un producto de nuestra lista " +
    "\nhamburguesas" +
    "\npancho" +
    "\npapas" +
    "\nbebida"
);

switch (ingreso) {
  case "hamburguesas":
    alert("que disfrute de su " + ingreso);

    break;
  case "pancho":
    alert("buen probecho su " + ingreso + " esta listo");
    break;
  case "papas":
    alert("grasias ya salen sus " + ingreso);

  case "bebida":
    alert("su " + ingreso + "bien fria");

    while (ingreso != "SALIR") {
      console.log("el producto ingresado es " + ingreso);
      ingreso = prompt(
        "ingresa otro producto " + " si quiere salir ingrese SALIR"
      );
    }
}
