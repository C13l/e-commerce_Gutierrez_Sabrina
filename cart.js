const cardsSection = document.querySelector("#cart-cards");

// Función para obtener y renderizar los productos en el carrito
function getCart(cards) {
    const list = cards.map(
        card => `
     <div class="card border shadow-none mb-2">
      <div class="card-body">
       <div class="d-flex align-items-start border-bottom pb-3">
        <div class="me-4">
         <img
          src="${card.image}"
          alt="${card.title}"
          class="img-fluid rounded-start"
         />
        </div>
        <div class="flex-grow-1 overflow-hidden">
         <h5 class="text-truncate font-size-18">${card.title}</h5>
         <div class="row">
          <div class="col-md-4">
           <div class="mt-3">
            <p class="text-muted mb-2">Precio</p>
            <h5 class="mb-0 mt-2">$${card.price}</h5>
           </div>
          </div>
          <div class="col-md-5">
           <div class="mt-3">
            <p class="text-muted mb-2">Cantidad</p>
            <h5 class="mb-0 mt-2">${card.quantity}</h5>
           </div>
          </div>
          <div class="col-md-3">
           <div class="mt-3">
            <p class="text-muted mb-2">Total</p>
            <h5>$${card.price * card.quantity}</h5>
           </div>
          </div>
          <div class="col-md-2">
           <div class="mt-3">
            <p class="text-muted mb-2" onclick="removeItem(${card.id})">Eliminar</p>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>`
    );
    // Inserta las tarjetas generadas en el contenedor
    cardsSection.innerHTML = list.join("");
}

// Llama a la función para renderizar el carrito
getCart(JSON.parse(localStorage.getItem("cart")));


function total(cards){
    let cartTotal = document.querySelector("#cart-total")
    let total = cards.reduce(
    (acumulado, actual) => acumulado + actual.price * actual.quantity, 0
    )
    cartTotal.innerText = "$" + total
}
total(JSON.parse(localStorage.getItem("cart")))

function removeItem(id) {
    const cards = JSON.parse(localStorage.getItem("cart"));
    const newCards = cards.filter(card => card.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCards));
    getCart(newCards);
    total(newCards);
    let quantity = newCards.reduce((acumulado, actual) => acumulado + actual.quantity, 0);
    localStorage.setItem("quantity", quantity);

    // Si el carrito está vacío, establece quantity en cero
    if (quantity === 0) {
        localStorage.setItem("quantity", "0");
    }

    const quantityTag = document.querySelector("#quantity");
    quantityTag.innerText = quantity;
}

function clearCart() {
    let quantityTag = document.querySelector("#quantity");
    quantityTag.innerText = "0";
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("quantity", "0"); // Establece quantity en cero
    getCart([]);
    total([]);
}