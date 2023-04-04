import {data2} from "./data2.js"

// dynamically feed the best seller products
const card = document.getElementById("best-seller-cards")
for (let i = 0; i<8; i++){
    card.innerHTML += `
    <div class="shopping-card"  >
    <div id=${data2[i]._id} onclick="handleCardClick(event)">
      <a href="#" class="card" >
        <img src="${data2[i].images[0]}" alt="Product Image" class="product-image" >
        <div class="product-details">
          <p class="store-name"><span class="store_name2">${data2[i].seller}</span></p>
          <p class="product-title" >${data2[i].title}</p>
         <!-- <p class="card_dec">${data2[i].description}</p> -->
          <div class="">
            <div>
              <h4 class="price">Price $${data2[i].price}</h4>
            </div>
            
          </div>
        </div>
       </a>
      </div>

      <div class="bottom_ratings">
            <div class="product-rating ">
                <i class="material-icons ">star</i>
               <span class="product-rating-count">${data2[i].rating}</span>
               <span class="product-total-rating-count">(${data2[i].reviews})</span>
            </div>
            <button id=${data2[i]._id} class="btn-cart">+</button>
            </div>
    </div>
    `
}

const testimonials = document.getElementById("testimonials")
for (let i = 0; i<3; i++){
      testimonials.innerHTML += `
    <div class="testimonials">
      <img class="quotes" src="./assets/quotes.svg" alt="quotes">
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