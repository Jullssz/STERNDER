//Evento con localStorage para el boton modo oscuro.
const cambio = d.querySelector('#cambiarModoBoton')

cambio.addEventListener('click', () => {
  d.body.classList.toggle('dark')
  cambio.classList.toggle('active')

  if (d.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'true')
  } else {
    localStorage.setItem('darkMode', 'false')
  }
})

if (localStorage.getItem('darkMode') === 'true') {
  d.body.classList.add('dark')
  cambio.classList.add('active')

} else {
  d.body.classList.remove('dark')
  cambio.classList.remove('active')
}

const conversiones = {
  ARS: 1,
  USD: 1,
  EUR: 1,
  JPY: 1,
}

const montoInput = d.getElementById('montoInput')
const divisa1Input = d.getElementById('divisa1Input')
const divisa2Input = d.getElementById('divisa2Input')
const calcularBoton = d.getElementById('calcularBoton')
const ulDivisas = d.getElementById('ulDivisas')
const mensajeError = d.getElementById('mensajeError')

async function tasasActualizadas() {
  try {
    const api = '01b52a1752af0563243b1eee'
    const respuesta = await fetch(`https://v6.exchangerate-api.com/v6/${api}/latest/ARS`)
    const info = await respuesta.json()
    return info.conversion_rates
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Inconvenientes con la tasa de cambios',
      text: 'Disculpe las molestias, reinténtelo más tarde!',
    })
    return null
  }
}

tasasActualizadas().then((tasas) => {
  if (tasas) {
    Object.assign(conversiones, tasas)
  }
})

function convertirMoneda() {
  const monto = parseFloat(montoInput.value)
  const divisa1 = divisa1Input.value
  const divisa2 = divisa2Input.value

  if (conversiones[divisa1] && conversiones[divisa2]) {
    const tasaCambio = conversiones[divisa2] / conversiones[divisa1]
    const resultado = monto * tasaCambio
  } else {
    mensajeError.textContent = 'Divisas no válidas'
  }
}

ulDivisas.addEventListener('click', async function (event) {
  const dropdownItem = event.target
  if (dropdownItem.classList.contains('dropdown-item')) {
    divisa2Input.value = dropdownItem.id
    const tasas = await tasasActualizadas()
    if (tasas) {
      Object.assign(conversiones, tasas)
    }
    if (calcularBoton.clicked) {
      convertirMoneda()
    }
  }
})

const botonesMoneda = document.querySelectorAll('.dropdown-item')
botonesMoneda.forEach(button => {
  button.addEventListener('click', function () {
    divisa2Input.value = button.id
    if (calcularBoton.clicked) {
      convertirMoneda()
    }
  })
})

calcularBoton.addEventListener('click', function () {
  const monto = parseFloat(montoInput.value)
  if (monto > 0) {
    mensajeError.textContent = ''
    convertirMoneda()
    const monto = parseFloat(montoInput.value)
    const divisa2 = divisa2Input.value
    const tasaCambio = conversiones[divisa2] / conversiones['ARS']
    const resultado = monto * tasaCambio
    const fechaHora = new Date()
    const fechaHoraActualizada = fechaHora.toLocaleString()

    // SweetAlert con setTime para que las propiedades tengan un intervalo de aparición simulando una animación
    if (resultado > 0) {

      Swal.fire({
        icon: '',
        title: '',
        text: '',
        footer: '',
        showConfirmButton: false
      })

      setTimeout(() => {
        Swal.update({
          icon: 'success'
        })
      }, 500)

      setTimeout(() => {
        Swal.update({
          title: 'El resultado de tu conversión es:'
        })
      }, 1000)

      setTimeout(() => {
        Swal.update({
          text: `$${monto} ARS = $${resultado.toFixed(2)} ${divisa2}`
        })
      }, 1500)

      setTimeout(() => {
        Swal.update({
          footer: `Horario Actualizado de la conversión: ${fechaHoraActualizada}`
        })
      }, 2000)

      setTimeout(() => {
        Swal.update({
          showConfirmButton: true
        })
      }, 2500)
    }
  } else {
    mensajeError.textContent = 'El monto debe ser mayor a 0 para realizar la conversión.'
  }
})

//Funcion que agrega las nuevas divisas
function agregarNuevaDivisa(divisa, valorConversion) {
  const nuevoBoton = document.createElement('li')
  nuevoBoton.innerHTML = `<button id="${divisa}" class="dropdown-item">${divisa}</button>`
  ulDivisas.appendChild(nuevoBoton)
  conversiones[divisa] = valorConversion
}

agregarNuevaDivisa('GBP', 1)
agregarNuevaDivisa('AUD', 1)
agregarNuevaDivisa('BOB', 1)
agregarNuevaDivisa('CLP', 1)
agregarNuevaDivisa('CAD', 1)