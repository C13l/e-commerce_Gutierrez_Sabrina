const h1 = document.querySelector("h1")
h1.innerText = "Productos";

function generarcards(){

    const arraycard =[];

    for(let i=1; i < 10; i++){
            let card = `<div class="card card-margin" style="width: 18rem;">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top img-card" alt="${i}">
            <div class="card-body">
              <h5 class="card-title">Card title ${i}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Ver más</a>
            </div>
        </div>
        `;
        arraycard.push(card)
    }

    document.querySelector("section").innerHTML = arraycard.join('');
}

generarcards();
