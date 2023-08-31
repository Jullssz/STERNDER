const d = document
const b = d.body
b.classList = 'bodyIndex'
b.style.backgroundImage = "url('../img/Blu.jpg')"
const h = d.head
const titulo = d.createElement('title')
const titulo1 = titulo.innerText = 'Conversor de Divisas | Sternder'
h.appendChild(titulo)

// Creacion del Footer
const footer = d.createElement('footer')
footer.classList = 'footerIndex'
const spanFooter = d.createElement('span')
const aFooter = spanFooter.innerHTML = `<span class="footerSpan">
Todos los derechos reservados - Desarrollado por 
<a class="footerLink" href="https://linktr.ee/Jullss" target="_blank">Jullss</a></span>`
b.prepend(footer)
footer.append(spanFooter)

// Creacion del Main
const main = d.createElement('main')
const h2Main = d.createElement('h2')
h2Main.classList = 'mainTitulo'
const h2MainText = h2Main.innerText = 'Conversor de divisas - ST'
const aMain = d.createElement('a')
aMain.classList = 'mainParrafo'
const aMainText = aMain.innerText = 'Aqui puedes seleccionar la moneda de tu interes y realizar el cambio actualizado en tiempo real!'

// Creacion del Section para el convertidor de divisas
const sectionMain = d.createElement('section')
sectionMain.classList = 'sectionMain'
const contentDiv = d.createElement('div')
contentDiv.classList = 'contentDiv'
const divSectionMain = d.createElement('div')
divSectionMain.classList = 'gridDiv'
const divSectionMainContGrid = divSectionMain.innerHTML = `
<div class="hijo monto">
<label> Monto </label>
</div>

<div class="hijo entrada">
<label> Entrada </label>
</div>

<div class="hijo salida">
<label> Salida </label>
</div>

<div class="hijo number gridAc input-group mb-3">
<span class="input-group-text">$</span>
<input id="montoInput" type="number" class="form-control">
</div>

<div class="hijo divisa1 input-group mb-3">
<input id="divisa1Input" type="text" class="form-control" value="ARS" readonly>
</div>

<div class="hijo divisa2 input-group mb-3">
<input id="divisa2Input" type="text" class="form-control" readonly>
  <button type="text" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul id="ulDivisas" class="dropdown-menu dropdown-menu-end">
    <li><button id="USD" class="dropdown-item">USD</button>
    </li>
    <li><button id="EUR" class="dropdown-item">EUR</button>
    </li>
    <li><button id="JPY" class="dropdown-item">JPY</button>
    </li>
  </ul>
</div>
`

const calculador = d.createElement('button')
calculador.classList = 'calculador'
calculador.id = 'calcularBoton'
const calculadorText = calculador.innerText = `Calcular`

mensajeError = d.createElement('p')
mensajeError.id = 'mensajeError'
mensajeError.classList = 'mensajeError'

b.prepend(main)
main.append(h2Main)
main.append(aMain)
main.appendChild(sectionMain)
sectionMain.appendChild(contentDiv)
sectionMain.appendChild(mensajeError)
divSectionMain.appendChild(calculador)
contentDiv.appendChild(divSectionMain)


// Creacion del Header
const header = d.createElement('header')
header.classList = 'headerIndex'
const h1 = d.createElement("h1")
h1.classList = 'headerTitulo'
const spanHeader = d.createElement('span') //Creacion del SpanHeader
const aHeader = spanHeader.innerHTML = `<span class="headerSpan">
<a class="headerLink" href="index.html">Sternder</a>
</span>`
const icon = d.createElement('button')     //Creacion del Boton Oscuro
icon.classList = 'cambiarModoBoton'
icon.id = 'cambiarModoBoton'
const iconSpan1 = d.createElement('span')
iconSpan1.classList = 'spanBoton'
const iconSpan2 = d.createElement('span')
iconSpan2.classList = 'spanBoton'
const iconSpanUno = iconSpan1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
<path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>`
const iconSpanDos = iconSpan2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
</svg>`

b.prepend(header)
header.append(h1)
header.appendChild(icon)
icon.appendChild(iconSpan1)
icon.appendChild(iconSpan2)
h1.appendChild(spanHeader)

