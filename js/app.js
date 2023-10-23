const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
let dataCartShop = [];

addEventsHandle();
function addEventsHandle() {

  listaCursos.addEventListener('click', addCurso);

  vaciarCarrito.addEventListener('click', EmptyCart)
}

function addCurso(e) {

  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    const cart = e.target.parentNode.parentNode;

    upDateCart(cart)
  };

}

function upDateCart(cart) {
  const src = cart.querySelector("img").src;
  const title = cart.querySelector("h4").textContent;
  const prise = cart.querySelector("p span").textContent;
  const id = cart.querySelector("a").getAttribute("data-id");
  const amount = 1;


  if (dataCartShop.length !== 0) {
    if (dataCartShop.some((el) => el.dataId == id)) {
      alert("No puedes comprar dos cursos de un mismo tipo");
    }
    else {
      dataCartShop = [...dataCartShop, {
        src: src,
        title: title,
        prise: prise,
        amount: amount,
        dataId: id
      }];
      FillCart(dataCartShop)
    }
  } else {
    dataCartShop = [...dataCartShop, {
      src: src,
      title: title,
      prise: prise,
      amount: amount,
      dataId: id
    }];
    FillCart(dataCartShop)
  }



}


function FillCart(dataCartShop) {
  const row = document.createElement('tr');

  row.innerHTML = ''

  dataCartShop.forEach((curso) => {
    row.innerHTML = `
      <td><img src=${curso.src} width=150 ></td>
      <td><h4>${curso.title}</h4></td>
      <td><span>${curso.prise}</span></td>
      <td><spam>${curso.amount}</spam></td>
      <td><a href='#' class='borrar-curso'>x</a></td>
    `
    contenedorCarrito.children[1].appendChild(row);

  })

}

function EmptyCart() {
  dataCartShop = [];
  contenedorCarrito.children[1].innerHTML = ''
}
