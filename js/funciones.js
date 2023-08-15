//Evento con localStorage para el boton modo oscuro. Por el momento solo cambia el bg del header

const cambio = d.querySelector('#cambiarModoBoton')

cambio.addEventListener('click', () => {
    d.body.classList.toggle('dark')
    cambio.classList.toggle('active')

if(d.body.classList.contains('dark')){
    localStorage.setItem('darkMode', 'true')
}else{
    localStorage.setItem('darkMode', 'false')
}   
})

if(localStorage.getItem('darkMode') === 'true'){
    d.body.classList.add('dark')
    cambio.classList.add('active')

}else{
    d.body.classList.remove('dark')
    cambio.classList.remove('active')
}


// Funcion para actualizar el tiempo de cotizacion

// function actualizacionAutomatica (){
//     const fechaHora = new Date()
//     const fechaHoraAct = fechaHora.toLocaleString()
//     alert("Ultima actualización de divisas: " + fechaHoraAct)
// }

// actualizacionAutomatica()

// const cuentaDeAct = 10 * 60 * 1000

// setInterval(actualizacionAutomatica, cuentaDeAct)