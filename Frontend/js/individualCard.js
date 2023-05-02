import { data2 } from "./data2.js";
import { productCards } from "./components.js";
import {getProducts,shuffle} from './api/products.js'
import { getOneUserData, updateUser } from "./api/user.js";


// Get the user
const userID = await JSON.parse(localStorage.getItem('userID'));
const userData = await getOneUserData(userID)

// All products
const AllProductsdata= await shuffle(await getProducts())

// Get the productid from url
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


// Fetch the individual card data form the backend and then concatinate with generating the html for it
// ******************* get the individualcard div**********************
let loading = true
const individualcard = document.getElementById("individualCard");

// The card
const ProductsData = async()=>{
  console.log(loading);
  const AllProductsdata= await shuffle(await getProducts())
  loading =  false
  console.log(loading);


function getData() {
  let cardData = AllProductsdata.find((item) => item._id == id);

  if (cardData) {
    individualcard.innerHTML = `
 <div class="cardinIndividualPage">
   <!-- THE IMAGE SLIDE SIDE -->
     <div class="container">
   
   <!-- all images -->
    <div class="images ">
     ${cardData.images
       .map(
         (imgitem) =>
           ` 
           <div class="img-zoom-container mySlides">
            <img id="myimage" src=${imgitem} class="slideImage"  width="100%"   alt="Girl">
           <!--  <div id="myresult" class="img-zoom-result"></div> -->
         </div>
     `
       )
       .join("")}
     </div>
   
     <!-- Next and previous buttons -->
     <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
     <a class="next" onclick="plusSlides(1)">&#10095;</a>
   
     <!-- Thumbnail images -->
     <div class="row">
     ${cardData.images
       .map(
         (imgitem, i) =>
           `
       <div class="column">
         <img class="demo cursor" src=${imgitem} onclick="currentSlide(${
             i + 1
           })" alt="The Woods">
       </div>
       `
       )
       .join("")}
     </div>
   </div>
   
   <!-- ********************* THE TEXT SIDE ******************** -->
   <div class="right">
     <p class="lightColor" >Shop> ${cardData.seller} > <span class="bold">${
      cardData.brand
    }</span> </p>
     <p class="inStock">IN STOCK</p>
     <h1>${cardData.title}</h1>
     <h3 id="price" class="price">$ ${cardData.price}</h3>
     <p class="lightColor">${cardData.description}</p>
     <div>
     <span class="bold">Category: <span class="lightColor">${
       cardData.category
     }</span></span>
     </div>
     <hr/>
     <!-- ************ COUNTER ********** -->
    <div class="quantity-counter">
     <button class="counter-button decrease" onclick="decrease()">-</button>
     <span id="qtyinput" class="quantity" >1</span>
     <button class="counter-button increase" onclick="increase()">+</button>
    </div>
   
  <!-- ************************ buttons ****************** -->
  <div class="buttons">
     <button id="Addtocart" class="btn" >Add to Cart</button>
  </div>
   </div>
   </div>
   
   `;
  }
}
 getData();
}
await ProductsData()



// ***************** relatedProduct ************
const relatedProduct = document.getElementById("relatedProduct");
let relatedProductHTML = "";
for (let i = 0; i < 10; i++) {
  relatedProductHTML += productCards(AllProductsdata[i], false);
}
relatedProduct.innerHTML = `
${relatedProductHTML}
`;

// ADD TO CART FUNCITONALITY FOR THE TAP CARDS
const btn = document.getElementById("Addtocart");
btn.addEventListener("click", async function () {
  var quantityElement = document.querySelector(".quantity");
  var quantity = parseInt(quantityElement.innerText);
  console.log("got clicked", quantity);

  const cartitems = await userData.Carts

  // Get existing cart items ids from carts arrays
  let existingIds = await cartitems.map(item=>item.itemId);

  // Check if ID is already in the array
  if (existingIds.includes(id)) {
    alert("Item already in cart");
    return;
  }
  const newCartItem = {
    itemId : id,
    qty : quantity
  }
  // Add the nw item into the carts
  await cartitems.push(newCartItem);

  // Send the updated carts  to the backend
  await updateUser(userData._id,{Carts : cartitems})
  window.location.reload()
 
});


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
