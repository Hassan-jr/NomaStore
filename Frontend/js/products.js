import { data } from "./data.js";

// variables for ratting functionalities
let rattings_2
let options
const rate = [1,2,3,4,5]

// fuction to generate the html product card
function generateProductCard(product) {
  
  return `
    <div class="shopping-card" id=${product.id} onclick="myFunction(${product.id})">
      <a href="individualcard.html" class="card" >
        <img src="${product.imageurl}" alt="Product Image" class="product-image" >
        <div class="product-details">
          <p class="store-name">Sold by: <span class="store_name2">${product.storeName}</span></p>
          <h2 class="product-name">${product.name}</h2>
          <p class="card_dec">${product.description}</p>
          <div class="line-break"></div>
          <div class="price_ratings">
            <div>
              <h3>${product.price}</h3>
            </div>
            <div class="product-rating">
               ${
                rattings_2 = (((5*product.stars_5) + (4*product.stars_4)+(3*product.stars_3) + (2*product.stars_2) + (1*product.stars_1))/(product.stars_5 + product.stars_4 + product.stars_3 + product.stars_2 + product.stars_1)).toFixed(1),
                options=1,
                rate.map(i=> {
                  if(i<=rattings_2)
                    return `<i class="material-icons ">star</i>`
                  else if ((i > rattings_2 ) && (i - rattings_2 > 0) && options ===1 ){
                    options = 0;
                    return (`<i class="material-icons ">star_half</i>`)
                  }
                  else
                    return `<i class="material-icons ">star_outline</i>`
                 
                }).join('')
               }
               <span class="product-rating-count">${rattings_2}</span>
               <span class="product-rating-count">${product.stars_5 + product.stars_4 + product.stars_3 + product.stars_2 + product.stars_1}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  `;
}


// Loops throug the product array to create a product for each item
function generateProductCards() {
  const productCardsContainer = document.getElementById('product-cards');
  let productCardsHTML = ''; // collects the html card to be displayed
 
  for (const product of data) {
    productCardsHTML += generateProductCard(product);
  }
  productCardsContainer.innerHTML = productCardsHTML;
}

generateProductCards();




 
