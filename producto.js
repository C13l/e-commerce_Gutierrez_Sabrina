class producto {
    constructor(titulo, detalle, precio, stock, imagen){
    this.titulo = titulo;
    this.detalle = detalle;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;
    }
};

const Modelo1 = new producto("BMW Serie 3 (2020)", "Color Azul", "50,000", 10, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg")

let main = document.querySelector(`main`)

main.innerHTML = `
<div class="card card-margin" style="width: 18rem;">
            <img src=${Modelo1.imagen} class="card-img-top img-card">
            <div class="card-body">
              <h5 class="card-title">${Modelo1.titulo}</h5>
              <p>Detalle: ${Modelo1.detalle}</p>
              <p>Precio: $${Modelo1.precio}</p>
              <p>Cantidad en stock: ${Modelo1.stock}</p>
            </div>
        </div>`