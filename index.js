const h1 = document.querySelector("h1")
h1.innerText = "Productos";

const data = [
  {
    id: 1,
    title: "Blood in the Mobile",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    image: "img/Blood in the Mobile.png",
    genre: "Documentary",
    price: 16,
    stock: 30,
  },
  {
    id: 2,
    title: "Toe to Toe",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    image: "img/Toe to Toe.png",
    genre: "Drama",
    price: 56,
    stock: 20,
  },
  {
    id: 3,
    title: "Country Strong",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    image: "img/Country Strong.png",
    genre: "Drama|Musical|Romance",
    price: 22,
    stock: 14,
  },
  {
    id: 4,
    title: "Barbershop 2: Back in Business",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    image: "img/Barbershop 2.png",
    genre: "Comedy",
    price: 19,
    stock: 12,
  },
  {
    id: 5,
    title: "Filming 'Othello'",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    image: "img/Filming 'Othello'.png",
    genre: "Documentary",
    price: 79,
    stock:50,
  },
  {
    id: 6,
    title: "Noise",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    image: "img/Noise.png",
    genre: "Drama|Thriller",
    price: 5,
    stock: 1,
  },
  {
    id: 7,
    title: "Parasite",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    image: "img/Parasite.png",
    genre: "Horror|Sci-Fi",
    price: 99,
    stock:23,
  },
  {
    id: 8,
    title: "Boiling Point (3-4 x jûgatsu)",
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    image: "img/Boiling Point.png",
    genre: "Action|Comedy|Crime",
    price: 39,
    stock:18,
  },
  {
    id: 9,
    title: "Elegy",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    image: "img/Elegy.png",
    genre: "Drama|Romance",
    price: 54,
    stock: 13,
  },
  {
    id: 10,
    title: "Mississippi Grind",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    image: "img/Mississippi Grind.png",
    genre: "Drama",
    price: 48,
    stock: 43,
  },
  {
    id: 11,
    title: "Lost in La Mancha",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    image: "img/Lost in La Mancha.png",
    genre: "Documentary",
    price: 39,
    stock:71,
  },
  {
    id: 12,
    title: "Stockholm Stories",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    image: "img/Stockholm Stories.png",
    genre: "Drama",
    price: 2,
    stock:1,
  },
];

const container = document.querySelector("section");

const MostrarCards = (items) =>{
const cards = data.map((movie) => {
  return `
  <div class="card card-margin" style="width: 18rem;">
            <img src="${movie.image}">
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p>Precio: $${movie.price}</p>
              <p>stock: ${movie.stock}</p>
              <a href="./producto.html?prod=${movie.id}" class="btn btn-primary">Ver más</a>
            </div>
        </div>
        `;
}).join('');

container.innerHTML = cards;
};

const promise = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve("Cargado")
  }, 5000)
})

promise.then(() => MostrarCards(data));

// Variable para almacenar el filtro
let filteredMovies = data;

// Función para crear tarjetas filtradas
const createCards = (movies) => {
  const cards = movies.map((movie) => {
    return `
      <div class="card card-margin" style="width: 18rem;">
        <img src="${movie.image}">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p>Precio: $${movie.price}</p>
          <p>stock: ${movie.stock}</p>
          <a href="./producto.html?prod=${movie.id}" class="btn btn-primary">Ver más</a>
        </div>
      </div>
    `;
  }).join('');
  container.innerHTML = cards; // Mostrar el resultado en el contenedor
};

// Función para filtrar las películas por el nombre ingresado en el input
const filterMovies = (event) => {
  const moviename = event.target.value.toLowerCase();
  filteredMovies = moviename 
    ? data.filter((movie) => movie.title.toLowerCase().includes(moviename))
    : data;
  createCards(filteredMovies);
};

// Event listener para el input de búsqueda
const input = document.querySelector("#inputbuscador");
if (input) {
  input.addEventListener("input", filterMovies);
}

// Event listener para el botón de reset
const resetbutton = document.querySelector(".delete-button");
if (resetbutton) {
  resetbutton.addEventListener("click", () => {
    input.value = "";
    filteredMovies = data;
    createCards(filteredMovies);
  });
}

// Inicializamos con todas las tarjetas;
promise.then(() => createCards(filteredMovies));


// Función para filtrar películas con precios menores a 50
const filterByPriceLow = () => {
  const filteredMovies = data.filter((movie) => movie.price < 50);
  createCards(filteredMovies);
};

// Función para filtrar películas con precios mayores o iguales a 50
const filterByPriceHigh = () => {
  const filteredMovies = data.filter((movie) => movie.price >= 50);
  createCards(filteredMovies);
};

// Event listener para el botón de filtro de precios menores a 50
const filterPriceButtonLow = document.getElementById("filterPriceButtonLow");
if (filterPriceButtonLow) {
  filterPriceButtonLow.addEventListener("click", filterByPriceLow);
}

// Event listener para el botón de filtro de precios mayores o iguales a 50
const filterPriceButtonHigh = document.getElementById("filterPriceButtonHigh");
if (filterPriceButtonHigh) {
  filterPriceButtonHigh.addEventListener("click", filterByPriceHigh);
}


// Función para restablecer el filtro de precios
const resetPriceFilter = () => {
  // Reiniciar filteredMovies a su estado original
  filteredMovies = data;
  // Llamar a createCards para mostrar todas las tarjetas
  createCards(filteredMovies);
};

// Event listener para el botón de restablecimiento del filtro de precios
const resetPriceButton = document.getElementById("resetPriceFilterButton");
if (resetPriceButton) {
  resetPriceButton.addEventListener("click", resetPriceFilter);
}