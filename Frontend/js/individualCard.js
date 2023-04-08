import { data } from "./data.js";
import { data2 } from "./data2.js";
import { productCards } from "./components.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// ******************* get the individualcard div**********************
const individualcard = document.getElementById("individualCard");

function getData() {
  let cardData = data2.find((item) => item._id == id);

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
     <h3 id="price" class="price">$ 80.26</h3>
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
     <span class="quantity">1</span>
     <button class="counter-button increase" onclick="increase()">+</button>
    </div>
   
  <!-- ************************ buttons ****************** -->
  <div class="buttons">
     <button class="btn">Buy</button>
     <button id="cart-id" class="btn" >Add to Cart</button>
  </div>
   </div>
   </div>
   
   `;
  }
}
getData();

// ***************** relatedProduct ************
const relatedProduct = document.getElementById("relatedProduct");
let relatedProductHTML = "";
for (let i = 0; i < 10; i++) {
  relatedProductHTML += productCards(data2[i], false);
}
relatedProduct.innerHTML = `
${relatedProductHTML}
`;

// ADD TO CART FUNCITONALITY FOR THE TAP CARDS
const btn = document.getElementById("cart-id");
btn.addEventListener("click", function () {
  console.log("got clicked");
  // Get existing IDs from local storage (if any)
  let existingIds = JSON.parse(localStorage.getItem("myIds") || "[]");

  // Check if ID is already in the array
  if (existingIds.includes(id)) {
    console.log("ID already exists in array");
    return;
  }
  // Add the new ID to the array
  existingIds.push(id);
  // Save the updated array to local storage
  localStorage.setItem("myIds", JSON.stringify(existingIds));
});


// ADD TO CART FUNCTIONLAITU FOR REALTED PRODUCTS
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
