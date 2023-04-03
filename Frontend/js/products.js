import { data } from "./data.js";
import {data2, getSavedIds} from './data2.js'


// variables for ratting functionalities
let rattings_2
let options
const rate = [1,2,3,4,5]

let id = 0


// fuction to generate the html product card
function generateProductCard(product) {

  return `
    <div class="shopping-card"  >
    <div id=${product._id} onclick="handleCardClick(event)">
      <a href="#" class="card" >
        <img src="${product.images[0]}" alt="Product Image" class="product-image" >
        <div class="product-details">
          <p class="store-name"><span class="store_name2">${product.seller}</span></p>
          <p class="product-title" >${product.title}</p>
         <!-- <p class="card_dec">${product.description}</p> -->
          <div class="">
            <div>
              <h4 class="price">Price $${product.price}</h4>
            </div>
            
          </div>
        </div>
       </a>
      </div>

      <div class="bottom_ratings">
            <div class="product-rating ">
                <i class="material-icons ">star</i>
               <span class="product-rating-count">${product.rating}</span>
               <span class="product-total-rating-count">(${product.reviews})</span>
            </div>
            <button id=${product._id} class="btn-cart">+</button>
            </div>
    </div>
  `;
}

// ****************** RATING FOR LATTER USE
 //rattings_2 = product.rating,
                // // (((5*product.stars_5) + (4*product.stars_4)+(3*product.stars_3) + (2*product.stars_2) + (1*product.stars_1))/(product.stars_5 + product.stars_4 + product.stars_3 + product.stars_2 + product.stars_1)).toFixed(1),
                // options=1,
                // rate.map(i=> {
                //   if(i<=rattings_2)
                //     return `<i class="material-icons ">star</i>`
                //   else if ((i > rattings_2 ) && (i - rattings_2 > 0) && options ===1 ){
                //     options = 0;
                //     return (`<i class="material-icons ">star_half</i>`)
                //   }
                //   else
                //     return `<i class="material-icons ">star_outline</i>`
                 
                // }).join('')




// Loops throug the product array to create a product for each item
function generateProductCards() {
  const productCardsContainer = document.getElementById('product-cards');
  let productCardsHTML = ''; // collects the html card to be displayed
 
  for (const product of data2) {
    productCardsHTML += generateProductCard(product);
  }
  productCardsContainer.innerHTML = productCardsHTML;
}

generateProductCards();


// Get CATEGORIES FROM DATA
function getCategories(data) {
  const categoriesSet = new Set();
  data.forEach(item => categoriesSet.add(item.category));
  return Array.from(categoriesSet);
}

const categories = getCategories(data2)

// generate side nav links
function generateSideNav(item){
  return` <a id=${item.replace(/"/g, '')} onClick=filter(event) href="#home">${item.replace(/"/g, '')}</a>`
}

// LOOP categories to generate side nav
function generateCategoriesLinks() {
  const linksContainer = document.getElementById('sidebar')
  let links = `<a id="All" onClick=filter(event) href="#home">All Products</a>`; // collects the html card to be displayed
 
  for (const link of categories) {
    links += generateSideNav(link);
  }
  linksContainer.innerHTML = links;
}
generateCategoriesLinks();


// ADD TO CART
const btn_cart = document.querySelectorAll(".btn-cart")

for(let i=0; i<btn_cart.length; i++){
btn_cart[i].addEventListener("click", (event)=>{
  const id  = event.currentTarget.id;
  console.log("got clicked", id);
  // Get existing IDs from local storage (if any)
  let existingIds = JSON.parse(localStorage.getItem('myIds') || '[]');

  // Check if ID is already in the array
  if (existingIds.includes(id)) {
    console.log('ID already exists in array');
    return;
  }
  // Add the new ID to the array
  existingIds.push(id);
  // Save the updated array to local storage
  localStorage.setItem('myIds', JSON.stringify(existingIds));
  // const productNav = document.getElementById('nav')
  // productNav.innerHTML = productNav.innerHTML
})

}