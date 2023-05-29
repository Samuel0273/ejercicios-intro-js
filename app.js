let miNombre="Samuel"
let miApellido="Garcia"
let miEdad=19
let miMascota="Lukas"
let edadMascota=4
console.log(miNombre,miApellido,miEdad,miMascota,edadMascota)
let nombreCompleto=(miNombre + " " + miApellido)
console.log(nombreCompleto)
let textoComprendido=`Me llamo ${miNombre} ${miApellido} ,tengo ${miEdad} años,mi mascota se llama ${miMascota} y tiene ${edadMascota} años`
console.log(textoComprendido)
let sumaEdades=miEdad+edadMascota
console.log(sumaEdades);
let restaEdades=miEdad-edadMascota
console.log(restaEdades);
let productoEdades=miEdad*edadMascota
console.log(productoEdades);
let divisionEdades=miEdad/edadMascota
console.log(divisionEdades);
let alumno = {
    nombre: "samuel",
    edad: 19,
    estudio: "Ingeniería",
    pesokg: 60,
    altocm: 70
}
console.log(alumno);
let mascota = {
    nombre: "lukas",
    edad: 4,
    carisma: "jugueton",
    pesokg: 20,
    altocm: 30
}
console.log(mascota);
let frutas = ["manzana", "banana", "naranja", "uva", "sandía"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
let familia = ["madre", "padre", "abuelo", "abuela", "hijo"]
console.log(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);
let textoaleatorio = (frutas[2] + " " +numeros[3] + " " +familia[4])
    console.log(textoaleatorio);
let Edadmia = prompt("Ingresa tu edad:");
let edadCompanero = prompt("Ingresa la edad de tu compañero:");
miEdad = parseInt(miEdad);
edadCompanero = parseInt(edadCompanero);
let edadesIguales = miEdad === edadCompanero;
let soyMayor = miEdad > edadCompanero;
let soyMenor = miEdad < edadCompanero;
console.log("Las edades son iguales", edadesIguales);
console.log("Soy mayor", soyMayor);
console.log("Soy menor", soyMenor);
let soyMayorDeEdad = Edadmia
console.log(Edadmia>= 18, "soy mayor de edad");
let edad = prompt("Ingresa tu edad:");
let altura = prompt("Ingresa tu altura en centímetros:");
edad = parseInt(edad);
altura = parseInt(altura);
let puedeSubir = edad > 6 && altura >= 120;
console.log("¿Puede subir a la atracción?", puedeSubir);
let pase = prompt("Ingresa el tipo de pase (VIP, NORMAL o LIMITADO):");
let saldo = prompt("Ingresa el saldo disponible:");
let puedePasar = pase === "VIP" || parseInt(saldo) > 1000;
console.log("¿La persona puede pasar?", puedePasar);
