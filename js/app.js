const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
let dataCartShop = [];

addEventsHandle();
function addEventsHandle() {
    listaCursos.addEventListener('click', addCurso)
}

function addCurso(e) {
    e.preventDefault()

    console.log(e.terget)
}
