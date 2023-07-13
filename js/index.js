let solicitarNombre = prompt("Bienvenido a tu conversor de divisas ARS! Por favor de ingresar su nombre.")
console.log(solicitarNombre)

let solicitarApellido = prompt("Bienvenido " + solicitarNombre + ", ingrese su apellido")
console.log(solicitarApellido)

let correoMail = prompt("Perfecto " + solicitarNombre + ", ingrese su correo electronico para finalizar su registro y poder estar al tanto de nuestras actualizaciones!")
console.log(correoMail)

alert("Hemos registrado su correo con exito! recibira nuestras actualizaciones por este medio: " + correoMail)

// Hasta aca es el inicio, va de 10

const conversiones = {
    ARS: 1,
    USD: 500
};
  
function convertidor(cantidad, entrada, salida) {
    if (isNaN(cantidad)) {
        console.error("ingresa un valor numerico")
    }
    if (entrada === salida) {
        console.error("Las divisas seleccionadas son iguales")
    }
    if (cantidad === 0) {
        console.error("No es posible hacer la conversión")
        return;
    }

    const montoConvertido = cantidad * (conversiones[entrada] / conversiones[salida])
    return cantidad + " " + entrada + " = " + montoConvertido + " " + salida
}
  
for (let i = 0; i < 2; i++) {
    const cantidad = parseFloat(prompt("Ingresa la cantidad a convertir:"))
    const entrada = prompt("Ingresa la divisa de origen (ARS o USD):")
    const salida = prompt("Ingresa la divisa de destino (ARS o USD):")

    const resultado = convertidor(cantidad, entrada, salida)
    alert("El resultado de tu conversión: " + resultado)
    console.log(resultado)
}

let gracias = alert("¡Gracias por elegirnos!")
