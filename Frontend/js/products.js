import {productCards} from './components.js'
import {getProducts,shuffle} from './api/products.js'
import { getOneUserData, updateUser } from "./api/user.js";


// Get the user
const userID = await JSON.parse(localStorage.getItem('userID'));
const userData = await getOneUserData(userID)

let loading = true
// Get the data from the backend
const ProductsData = async()=>{
  console.log(loading);
  const AllProductsdata= shuffle(await getProducts())
  loading =  false 


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
  return` <a id=${item.replace(/"/g, '')} class="categorySideNav">${item.replace(/"/g, '')}</a>`
}

// LOOP categories to generate side nav
function generateCategoriesLinks() {
  const linksContainer = document.getElementById('sidebar')
  let links = `<a id="All Products" class="categorySideNav" >All Products</a>`; // collects the html card to be displayed
  for (const link of categories) {
    links += generateSideNav(link);
  }
  linksContainer.innerHTML = links;
// Seacrh Funtionality
const allcategories = document.querySelectorAll(".categorySideNav")
for(let i=0; i<allcategories.length; i++){
    allcategories[i].addEventListener("click", (event)=>{
    const ctg = event.currentTarget.id
    const ProductPageTitile = document.getElementById("ProductPageTitile")
    ProductPageTitile.innerHTML = ctg
    if(ctg == 'All Products'){
     generateProductCards();
     return
    }
    
    const productCardsContainer = document.getElementById('product-cards');
    let productCardsHTML = ''; // collects the html card to be displayed
 
  for (const product of AllProductsdata) {
    productCardsHTML += product.category == ctg? productCards(product): "";
  }
  productCardsContainer.innerHTML = productCardsHTML;
  })
}


}
generateCategoriesLinks();






// ADD TO CART FUNCTIONLAITU FOR REALTED PRODUCTS
const btn_cart = document.querySelectorAll(".btn-cart")
for(let i=0; i<btn_cart.length; i++){
btn_cart[i].addEventListener("click", async(event)=>{
  const itemId  = event.currentTarget.id;
  let cartitems = await userData.Carts

  // Get existing cart items ids from carts arrays
  let existingIds = await cartitems.map(item=>item.itemId);

  // Check if ID is already in the array
  if (existingIds.includes(itemId)) {
    alert("Item already in cart");
    return;
  }
  const newCartItem = {
    itemId : itemId,
    qty : 1
  }
  // Add the nw item into the carts
  await cartitems.push(newCartItem);

  // Send the updated carts  to the backend
  await updateUser(userData._id,{Carts : cartitems})
  cartitems = await userData.Carts
})
}

}
ProductsData()