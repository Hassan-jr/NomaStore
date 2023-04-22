import {productCards} from './components.js'
import {getProducts,shuffle} from './api/products.js'

let loading = true
// Get the data from the backend
const ProductsData = async()=>{
  console.log(loading);
  const AllProductsdata= shuffle(await getProducts())
  loading =  false
  console.log(loading);
  console.log(AllProductsdata);  


// Loops throug the product array to create a product for each item
function generateProductCards() {
  const productCardsContainer = document.getElementById('product-cards');
  let productCardsHTML = ''; // collects the html card to be displayed
 
  for (const product of AllProductsdata) {
    productCardsHTML += productCards(product);
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

const categories = getCategories(AllProductsdata)

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
})

}

}
ProductsData()