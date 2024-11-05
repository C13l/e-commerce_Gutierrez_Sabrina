let menu = [
    {
        texto: "Página Principal", href: "/index.html",
    },
    {
        texto: "Productos", href: "/index.html"
    },
    {
        texto: "Contacto", href: "/contacto.html"
    }
]

let header = document.querySelector(`header`);
header.innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
    <il>
      </il>
        <div class="d-flex" role="search">
          <input class="form-control me-2" id="inputbuscador" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success form-control" type="submit">Search</button>
          <button class="btn btn-outline-danger delete-button" type="submit">Delete</button>
        </div>
    </div>
    <div>
    ${localStorage.getItem("userEmail") ? `<span class="colortexto">${localStorage.getItem("userEmail")}</span>
        |<span><a href="cart.html"><img height="25" src="img/cart.png"> <b class="colortexto" id="quantity">${localStorage.getItem("quantity")}</b></a></span>
        |<span onclick="logout()"><img height="25" src="img/logout.png"></span>`
        : `<a href="login.html"><span><img height="25" src="img/login.png"></span></a>`}
    </div>
</nav>`;


const arraybuttons = []

let num = 0;

for(let crearnavbar of menu){

let buttons = `
    <a class="navbar-brand colortexto" href="${menu.at(num).href}">${menu.at(num).texto}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    `;
    arraybuttons.push(buttons)
    num = num + 1;
}
document.querySelector("il").innerHTML = arraybuttons.join('');

function logout(){
    localStorage.clear()
    location.href = "./login.html"
}