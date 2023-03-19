import { data } from "./data.js";
import { data2 } from "./data2.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


// get the individualcard div
const individualcard = document.getElementById("individualCard");

function getData() {
  let cardData =  data2.find((item) => item._id == id);

  if (cardData) {
    individualcard.innerHTML = `
   <div class="card">
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
     <p class="lightColor" >Shop> ${cardData.seller} > <span class="bold">${cardData.brand}</span> </p>
     <p class="inStock">IN STOCK</p>
     <h1>${cardData.title}</h1>
     <h3 id="price" class="price">$ 80.26</h3>
     <p class="lightColor">${cardData.description}</p>
     <div>
     <span class="bold">Category: <span class="lightColor">${cardData.category}</span></span>
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

getData()
// SAVE ID FOOR CART
const btn = document.getElementById("cart-id")
btn.addEventListener("click", function() {
  console.log("got clicked");
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
}
)

{/* <div class="mySlides">
       <img class="slideImage " src=${imgitem} style="width:100%">
     </div> */}
// image animation

function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /*create lens:*/
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /*insert lens:*/
  img.parentElement.insertBefore(lens, img);
  /*calculate the ratio between result DIV and lens:*/
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  lens.addEventListener("mousemove", moveLens);
  img.addEventListener("mousemove", moveLens);
  /*and also for touch screens:*/
  lens.addEventListener("touchmove", moveLens);
  img.addEventListener("touchmove", moveLens);
  function moveLens(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /*set the position of the lens:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /*display what the lens "sees":*/
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}
// slider giving error
window.onload = function() {
  // imageZoom("myimage", "myresult");
};

