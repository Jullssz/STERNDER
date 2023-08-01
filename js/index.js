let solicitarNombre = prompt("Bienvenido a tu conversor de divisas ARS! Por favor de ingresar su nombre.")
console.log(solicitarNombre)

let solicitarApellido = prompt("Bienvenido " + solicitarNombre + ", ingrese su apellido")
console.log(solicitarApellido)

let correoMail = prompt("Perfecto " + solicitarNombre + ", ingrese su correo electronico para finalizar su registro y poder estar al tanto de nuestras actualizaciones!")
console.log(correoMail)

alert("Hemos registrado su correo con exito! recibira nuestras actualizaciones por este medio: " + correoMail)

// En este caso se utiliza la divisa ARS como principal tasa de intercambio, por lo tanto USD -> EUR, entre otros, no funcionan.

const conversiones = {
    ARS: 1,
    USD: 500,
    JPY: 1.93,
    EUR: 300,
    CLP: 0.33,
    GBP: 350,
    BRL: 57
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

    const montoConvertido = parseFloat((cantidad * (conversiones[entrada] / conversiones[salida])).toFixed(2));
    return cantidad + " " + entrada + " = " + montoConvertido + " " + salida
}

for (let i = 0; i < 1; i++) {
    const cantidad = parseFloat(prompt("Ingresa la cantidad a convertir:"))
    const entrada = prompt("Ingresa la divisa de origen (ARS):")
    const salida = prompt("Ingresa la divisa de destino (USD, JPY, EUR, CLP, GBP O BRL):")

    const resultado = convertidor(cantidad, entrada, salida)
    alert("El resultado de tu conversión: " + resultado)
    console.log(resultado)
}

let gracias = alert("¡Gracias por elegirnos!")

function actualizacionAutomatica (){
    const fechaHora = new Date()
    const fechaHoraAct = fechaHora.toLocaleString()
    alert("Ultima actualización de divisas: " + fechaHoraAct)
}

actualizacionAutomatica()

const cuentaDeAct = 10 * 60 * 1000

setInterval(actualizacionAutomatica, cuentaDeAct)

  