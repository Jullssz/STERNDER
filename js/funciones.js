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
  } catch {
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

    if (conversiones[divisa2]) {
      mostrarTablasExponenciales(monto, 'ARS', divisa2);
    }

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


// Funcion de creacion y demostracion de las tablas con valores exponenciales
function mostrarTablasExponenciales(monto, divisa1, divisa2) {
  const tasaCambio = conversiones[divisa2] / conversiones[divisa1]

  const tablaMoneda1 = document.getElementById('tablaMoneda1')
  const tablaMoneda2 = document.getElementById('tablaMoneda2')

  tablaMoneda1.innerHTML = ''
  tablaMoneda2.innerHTML = ''

  const encabezado1 = document.createElement('thead')
  encabezado1.innerHTML = `
    <tr>
      <th>Monto (${divisa1})</th>
      <th>Valor (${divisa2})</th>
    </tr>
  `

  const encabezado2 = document.createElement('thead')
  encabezado2.innerHTML = `
    <tr>
      <th>Monto (${divisa2})</th>
      <th>Valor (${divisa1})</th>
    </tr>
  `

  tablaMoneda1.appendChild(encabezado1)
  tablaMoneda2.appendChild(encabezado2)

  const cuerpo1 = document.createElement('tbody')
  const cuerpo2 = document.createElement('tbody')

  const valoresExponenciales = [1, 5, 10, 25, 50, 100, 500, 1000]

  valoresExponenciales.forEach((valor) => {
    const fila1 = document.createElement('tr')
    const fila2 = document.createElement('tr')

    const valorEnDivisa1 = (monto * tasaCambio * valor).toFixed(2)
    const valorEnDivisa2 = (monto * valor).toFixed(2)

    fila1.innerHTML = `
      <td>${valor} ${divisa1}</td>
      <td>$${valorEnDivisa1} ${divisa2}</td>
    `

    fila2.innerHTML = `
      <td>${valor} ${divisa2}</td>
      <td>$${valorEnDivisa2} ${divisa1}</td>
    `

    cuerpo1.appendChild(fila1)
    cuerpo2.appendChild(fila2)
  })

  tablaMoneda1.appendChild(cuerpo1)
  tablaMoneda2.appendChild(cuerpo2)

  // Mostrar las tablas
  tablaMoneda1.style.display = 'table'
  tablaMoneda2.style.display = 'table'
}