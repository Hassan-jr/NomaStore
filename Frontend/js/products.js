import { data } from "./data.js";
import {data2, getSavedIds} from './data2.js'
import {productCards} from './components.js'


// fuction to generate the html product card
function generateProductCard(product) {
   return productCards(product)
}


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