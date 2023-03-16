import { data } from "./data.js";
import { data2 } from "./data2.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log("finalyy", id);

// get the individualcard div
const individualcard = document.getElementById("individualCard");

async function getData() {
  let cardData = await data2.find((item) => item._id == id);
  console.log("THE DATA", cardData);

  if (cardData) {
    individualcard.innerHTML = `
   <div class="card">
   <!-- THE IMAGE SLIDE SIDE -->
   <div class="container">
   
   <!-- all images -->
    <div class="images">
     ${cardData.images
       .map(
         (imgitem) =>
           ` 
     <div class="mySlides">
       <img class="slideImage " src=${imgitem} style="width:100%">
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
     <p class="lightColor" >Shop> ${cardData.seller} > <span class="bold">${cardData.brand}</span> </p>
     <p class="inStock">IN STOCK</p>
     <h1>Hassan's Chair</h1>
     <h3 class="price">$ 80.26</h3>
     <p class="lightColor">Supplement Right Metatarsal-Tarsal Joint with Nonautologous Tissue Substitute, Open Approach Supplement Right Metatarsal-Tarsal Joint with Nonautologous Tissue Substitute, Open Approach</p>
     <div>
     <span class="bold">Category: <span class="lightColor">Chair</span></span>
     </div>
     <hr/>
     <!-- ************ COUNTER ********** -->
     <span>
     <span class="bold">QTY</span> <span class="counter">
       <span class="down" onClick='decreaseCount(event, this)'>-</span>
       <input id="qty" type="text" value="1">
       <span class="up" onClick='increaseCount(event, this)'>+</span>
   </span>
   </span>
  <!-- ************************ buttons ****************** -->
  <div class="buttons">
     <button class="btn">Buy</button>
     <button class="btn">Add to Cart</button>
  </div>
   </div>
   </div>
   
   `;
  }
}

getData()