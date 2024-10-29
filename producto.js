const data = [
  {
    id: 1,
    title: "Blood in the Mobile",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    image: "http://dummyimage.com/132x100.png/5fa2dd/ffffff",
    genre: "Documentary",
    price: 16,
    stock: 30,
  },
  {
    id: 2,
    title: "Toe to Toe",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    image: "http://dummyimage.com/119x100.png/dddddd/000000",
    genre: "Drama",
    price: 56,
    stock: 20,
  },
  {
    id: 3,
    title: "Country Strong",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    image: "http://dummyimage.com/216x100.png/cc0000/ffffff",
    genre: "Drama|Musical|Romance",
    price: 22,
    stock: 14,
  },
  {
    id: 4,
    title: "Barbershop 2: Back in Business",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    image: "http://dummyimage.com/190x100.png/dddddd/000000",
    genre: "Comedy",
    price: 19,
    stock: 12,
  },
  {
    id: 5,
    title: "Filming 'Othello'",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    image: "http://dummyimage.com/153x100.png/5fa2dd/ffffff",
    genre: "Documentary",
    price: 79,
    stock:50,
  },
  {
    id: 6,
    title: "Noise",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    image: "http://dummyimage.com/144x100.png/dddddd/000000",
    genre: "Drama|Thriller",
    price: 5,
    stock: 1,
  },
  {
    id: 7,
    title: "Parasite",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    image: "http://dummyimage.com/172x100.png/dddddd/000000",
    genre: "Horror|Sci-Fi",
    price: 99,
    stock:23,
  },
  {
    id: 8,
    title: "Boiling Point (3-4 x jûgatsu)",
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    image: "http://dummyimage.com/231x100.png/ff4444/ffffff",
    genre: "Action|Comedy|Crime",
    price: 39,
    stock:18,
  },
  {
    id: 9,
    title: "Elegy",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    image: "http://dummyimage.com/191x100.png/dddddd/000000",
    genre: "Drama|Romance",
    price: 54,
    stock: 13,
  },
  {
    id: 10,
    title: "Mississippi Grind",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    image: "http://dummyimage.com/164x100.png/cc0000/ffffff",
    genre: "Drama",
    price: 48,
    stock: 43,
  },
  {
    id: 11,
    title: "Lost in La Mancha",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    image: "http://dummyimage.com/171x100.png/cc0000/ffffff",
    genre: "Documentary",
    price: 39,
    stock:71,
  },
  {
    id: 12,
    title: "Stockholm Stories",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    image: "http://dummyimage.com/149x100.png/cc0000/ffffff",
    genre: "Drama",
    price: 2,
    stock:1,
  },
];

const productId = window.location.search.split("=")[1];
const product = data.find((item) => item.id == productId);

let main = document.querySelector("main");


if (product) {
  const card = `
    <div class="card card-margin" style="width: 18rem;">
      <img src="${product.image}" class="card-img-top img-card">
      <div class="card-body">
        <h4 class="card-title">${product.title}</h4>
        <h5 class="card-title">${product.genre}</h5>
        <p>Detalle: ${product.description}</p>
        <p>Precio: $${product.price}</p>
        <p>Stock: ${product.stock}</p>

        ${localStorage.getItem("userEmail") ?
        `<div class="counter-container">
            <button class="counter-button" onclick="decrement()">-</button>
            <div class="counter-display" id="counter">1</div>
            <button class="counter-button" onclick="increment()">+</button>
        </div>
        <div class="d-flex justify-content-between w-100">
          <button class="btn btn-outline-dark flex-grow-1 me-2" onclick="addItems()">Comprar ahora</button>
        </div>`
        :`<div class="d-flex justify-content-center w-100">
          <a href="login.html" class="btn btn-outline-dark unlogged-button">Iniciar sesión para comprar</a>
        </div>`
        }
      </div>
    </div>`;
  main.innerHTML = card;
}

let count = 1;
        
function increment() {
  if (count < product.stock) {
      count++;
      document.getElementById("counter").innerText = count;
  }
}

function decrement() {
  if (count > 1) {
      count--;
      document.getElementById("counter").innerText = count;
  }
}

function addItems() {
  // Obtenemos el carrito de localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Buscamos si el producto ya está en el carrito
  const existingProduct = cart.find(item => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity += count;
  } else {
cart.push({ ...product, quantity: count });
  }

  // Guardamos el carrito actualizado en localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Calculamos la cantidad total de productos
  const quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0);

  // Guardamos la cantidad total en localStorage
  localStorage.setItem("quantity", quantity);

  // Actualizamos el elemento en la página
  const quantityTag = document.querySelector("#quantity");
  if (quantityTag) {
    quantityTag.innerText = quantity;
  }
}