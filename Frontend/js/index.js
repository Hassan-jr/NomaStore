import {data2} from "./data2.js"
// https://media.istockphoto.com/id/1195697777/photo/womens-sport-shoes-pair-of-sport-shoes-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=-SgTk6vs4plhivzC13bUuNsDIVtsN3B6s0-f6r3Sglo=

// dynamically feed the best seller products
const card = document.getElementById("best-seller-cards")
for (let i = 0; i<10 ; i++){
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

const testimonials = document.getElementById("testimonials")
for (let i = 0; i<3; i++){
      testimonials.innerHTML += `
    <div class="testimonials">
      <img class="quotes" src="../assets/quotes.svg" alt="quotes">
      <p class="testimonials-feedback">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem i</p>
      <div class="icons">
        <!-- ratings -->
        <i class="material-icons ">star</i>
        <i class="material-icons ">star</i>
        <i class="material-icons ">star</i>
        <i class="material-icons ">star</i>
        <i class="material-icons ">star</i>
      </div>
       <img class="testimonials-img" src="https://www.hassanjr.com/static/media/profile.b5b3138ff8c65c7bdf84.png" alt="">
       <p class="testimonials-name">Abdiladif Hassan</p>
    </div>
      `
}