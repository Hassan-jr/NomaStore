import {data2} from "./data2.js"
// https://media.istockphoto.com/id/1195697777/photo/womens-sport-shoes-pair-of-sport-shoes-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=-SgTk6vs4plhivzC13bUuNsDIVtsN3B6s0-f6r3Sglo=

const card = document.getElementById("best-seller-cards")
for (let i = 0; i<4 ; i++){
    card.innerHTML += `
    <div class="index-card">
      <div class="imgdiv">
        <img class="img" src=${data2[i].images[0]} alt="test">
      </div>
      <div class="card-text">
        <p class="img-title">${data2[i].brand}</p>
        <div class="icons">
        <i class="material-icons ">star</i>
        <i class="material-icons ">star</i>
        <i class="material-icons ">star</i>
        <i class="material-icons ">star</i>
        <i class="material-icons ">star</i>
        </div>
        <p class="img-price">$ ${data2[i].price}</p>
      </div>
    </div>
    `
}
