let menu = [
    {
        texto: "Página Principal", href: "/index.html"
    },
    {
        texto: "Productos", href: "/producto.html"
    },
    {
        texto: "Contacto", href: "/contacto.html"
    }
]

let header = document.querySelector(`header`)
header.innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
    <il>
      </il>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>`

const arraybuttons = []

let num = 0;

for(let crearnavbar of menu){

let buttons = `
    <a class="navbar-brand" href="${menu.at(num).href}">${menu.at(num).texto}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    `;
    arraybuttons.push(buttons)
    num = num + 1;
}
document.querySelector("il").innerHTML = arraybuttons.join('');