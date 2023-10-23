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
    }
  } else {
    dataCartShop = [...dataCartShop, {
      src: src,
      title: title,
      prise: prise,
      amount: amount,
      dataId: id
    }];
  }


  FillCart(dataCartShop)
}

function EmptyCart() {
  dataCartShop = [];
  console.log(dataCartShop, 'vaciar carrito');
}


function FillCart(dataCartShop) {
  console.log(dataCartShop, 'llenar carrito');
  console.log(contenedorCarrito);
}
