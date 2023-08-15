const d = document  //Constante con DOCUMENT = d
const b = d.body    //Constante con BODY = b
b.classList = 'bodyIndex'
b.style.backgroundImage = "url('../img/Blu.jpg')"
const h = d.head   //Constante con HEAD  = h
const titulo = d.createElement('title')
const titulo1 = titulo.innerText = 'Conversor de Divisas | Sternder'
h.appendChild(titulo)  

// Creacion del Footer
const footer = d.createElement('footer')
footer.classList = 'footerIndex'
const spanFooter = d.createElement('span') //Creacion del SpanFooter
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
<span> 
<input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
</div>

<div class="hijo divisa1 input-group mb-3">
<input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">ARS</a></li>
    <li><a class="dropdown-item" href="#"></a></li>
    <li><a class="dropdown-item" href="#"></a></li>
  </ul>
</div>

<div class="hijo divisa2 input-group mb-3">
<input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">USD</a></li>
    <li><a class="dropdown-item" href="#">EUR</a></li>
    <li><a class="dropdown-item" href="#">JPY</a></li>
  </ul>
</div>
`
b.prepend(main)
main.append(h2Main)
main.append(aMain)
main.appendChild(sectionMain)
sectionMain.appendChild(contentDiv)
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
const icon = d.createElement('button')   //Creacion del Boton Oscuro
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


// EN PROCESO

// const conversiones = [                  
//     {
//         USD: 1,
//         ARS_usd: 500,
//         JPY_usd: 144,
//         EUR_usd: 0.91,
//         CLP_usd: 855,
//         GBP_usd: 0.78,
//         BRL_usd: 4.91,
//     },
//     {
//         ARS: 1,
//         USD_ars: 500,
//         JPY_ars: 200,
//         BRL_ars: 150,
//     }
// ]


// function convertidor(cantidad, entrada, salida) {
//     if (isNaN(cantidad)) {
//         console.error("ingresa un valor numerico")
//     }
//     if (entrada === salida) {
//         console.error("Las divisas seleccionadas son iguales")
//     }
//     if (cantidad === 0) {
//         console.error("No es posible hacer la conversión")
//         return;
//     }

//     const montoConvertido = parseFloat((cantidad * (conversiones[entrada] / conversiones[salida])).toFixed(2));
//     return cantidad + " " + entrada + " = " + montoConvertido + " " + salida
// }

// for (let i = 0; i < 1; i++) {
//     const cantidad = parseFloat(prompt("Ingresa la cantidad a convertir:"))
//     const entrada = prompt("Ingresa la divisa de origen (ARS O USD):")
//     const salida = prompt("Ingresa la divisa de destino (ARS, USD, JPY, EUR, CLP, GBP O BRL):")

//     const resultado = convertidor(cantidad, entrada, salida)
//     alert("El resultado de tu conversión: " + resultado)
//     console.log(resultado)
// }
