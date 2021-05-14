// // primera tabla con primer ticket
let btnActualizar = document.getElementById('actualizar');
let table = document.querySelector('.grid');
let viewMore = document.getElementById('ver_mas');
let detProduct = document.getElementById('det_producto');
let btnContinuar = document.getElementById('continuar');
let contenedorEtiqueta = document.querySelector('.conatiner-etiqueta');
let etiqueta = document.querySelector('.ticked');
let btnExit = document.getElementById('btn-exit');


btnActualizar.addEventListener('click', function () {
    table.className = 'grid d-block'
    btnActualizar.className = 'd-none'
})

viewMore.addEventListener('click', function () {
    detProduct.style.visibility = 'visible'
    detProduct.style.height = "150px"
})

btnContinuar.addEventListener('click', function () {
    table.className = 'd-none'
    contenedorEtiqueta.style.visibility = 'visible'
    etiqueta.className = 'ticked d-block'
})

btnExit.addEventListener('click', function () {
    contenedorEtiqueta.className = 'd-none'
    etiqueta.className = 'ticked d-none'
    btnSecond.classList = 'btn btn-info btnAct'
})
    

// ////////////////

// // egunda tabla con segundo ticket

let btnSecond = document.getElementById('actualizar_second');
let tableSecond = document.querySelector('.grid_second');
let verMasDos = document.getElementById('vermasBtnSecond');
let detalleSegundoPedido = document.getElementById('det_producto-segundopedido');
let btnContinuarDos = document.getElementById('btnContinuardos')
let containerSegundaEtiqueta = document.querySelector('.conatiner-etiqueta-second');
let etiqueta2 = document.querySelector('.tickedtwo');
let btnExitTwo = document.getElementById('btn-exit-tow');


btnSecond.addEventListener('click', function () {
    tableSecond.className = 'grid_second d-block'
    btnSecond.className = 'd-none'
})
verMasDos.addEventListener('click', function () {
    detalleSegundoPedido.style.visibility = 'visible'
})
btnContinuarDos.addEventListener('click', function(){
    detProduct.style.visibility = 'visible'
    tableSecond.className = 'd-none'
    containerSegundaEtiqueta.style.visibility = 'visible'
    etiqueta2.className = 'tickedtwo d-block'
})
btnExitTwo.addEventListener('click', function () {
    containerSegundaEtiqueta.style.visibility = 'hidden'
    etiqueta2.className = 'd-none'
    btnTres.classList = 'btn btn-info btnAct'

})


// // Tercera tabla con trercer ticket
let btnTres = document.getElementById('actualizar_tres');
let tablaTres = document.querySelector('.grid_tres')
let detProductTres = document.getElementById('det_producto_tres');
let btnSalir = document.getElementById('btn-exit-tres');
let containerSegundaEtiquetaTres = document.querySelector('.conatiner-etiqueta-tres');
let etiqueta3 = document.querySelector('.tickedtres');
let saveAndExitTres = document.getElementById('save_exit_tres');
let btnFinal = document.getElementById('btn_final')

btnTres.addEventListener('click', function () {
    tablaTres.className = 'grid_tres d-block'
    btnTres.className = 'd-none'
})

saveAndExitTres.addEventListener('click', function () {
    detProductTres.style.visibility = 'visible'
    tablaTres.className = 'd-none'
    containerSegundaEtiquetaTres.style.visibility = 'visible'
    etiqueta3.className = 'tickedtres d-block'
})

btnSalir.addEventListener('click', function () {
    containerSegundaEtiquetaTres.style.visibility = 'hidden'
    etiqueta3.className = 'd-none'
    btnFinal.classList = 'btn btn-info btnAct'

    btnFinal.addEventListener('click', function(){
        alert('Sin pedidos en fila')
    })
})
