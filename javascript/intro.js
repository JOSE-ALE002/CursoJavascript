/* METODOS PARA MOSTRAR TEXTO
1. alert("Hola")  GENERA UN MENSAJE EN LA PAGINA
2. document.write(); IMPRIME TEXTO EN LA PAGINA
3. console.log() IMPRIME TEXTO EN LA CONSOLA
*/

//MOSTRAR
/*
var nombre;
nombre = prompt("Ingresa tu nombre");
edad = prompt("Ingresa la edad");
console.log(nombre + " " + edad);
*/

/*VARIABLES

// int - integer
var numero = 19;

//String - cadena de texto
var nombre = "jose";
var apellido = "Martinez";
var texto = "Jose Alejandro:\"Ing. Sistemas Informaticos\"";
document.write(texto);

//Arreglos - Arrays
var amigos = ["Jose", "Alejandro", "Benjamin", "Gerson"];
document.write(amigos[2]);

//Objetos - object
var objeto = {
	color: "White",
	size: 12
}

// Booleanos - Boolean
var boleano = true;

// Valor indefinido - Undefined
var falcon;
//document.write(falcon);

// NULL
var numer = 12;
var numer = null;

// NaN----->OPERACIONES INVALIDAS
var texto2 = "hola como estas";
document.write(texto2 * 2);*/

// Arreglos
var amigos = ["Jose", "Alejandro", "Benjamin", "Gerson", "Aldair"];
var amigos2 = ["Josefina", "Alejandra", "Benja", "Gersona", "Fatima"];

/* MOSTRAMOS TODOS LOS ITEMS DEL ARREGLO
for (var i = 0; i < amigos.length; i++) {
	document.write(" " + amigos[i]);
}*/

//Funciones de los arreglos
//1. document.write("Tienes" + amigos.length + "amigos"); ----------amigos.lenght es el numero total
//2. amigos.push("Douglas", "Silvia", "Adolfo"); ---------------------Agrega al arreglo
//3. amigos.pop() ------>Elimina el ultimom elementon de el arreglo
//4. amigos.concat()--------concatena dos arreglos y retorna un array completo
//5. amigos.join()--------------concatena una cadena al arreglo
//6. amigos.sort()-------------Ordena los elementos por orden alfabetico
//7. amigos.reverse()-----------Ordena de forma inversa del ultimo a el primero

//INGRESAMOS AL ARREGLO AMIGOS TRES ITEMS MAS 
var numero = amigos.push("Douglas", "Silvia", "Adolfo", "Zeus");
//document.write("Tengo" + numero + "amigos");

//CONCATENAMOS O UNIMOS LOS ARREGLOS AMIGOS Y AMIGOS2
var amigos3 = amigos.concat(amigos2);
//document.write(amigos3.join(" - "));

//MOSTRAMOS DATOS EN ORDEN ALFABETICO
//var ordenado = amigos3.sort();
document.write(amigos3.sort());
