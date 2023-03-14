import { data } from "./data.js";
// get the id for required item from session storage
let id = window.sessionStorage.getItem("ProductID");


// get the data of the id
// +++++++++++++++++++ to be removed later +++++++++++++++++++
let cardData = data.find((item) => item.id == id);


const images = [
  "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71MzaFpWjwL._AC_UL320_.jpg",
  "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71F29ae7awL._AC_SX425_.jpg",
  "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71aAk1BMhpL._AC_UL320_.jpg",
  "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61LFz4eGS6L._AC_UL320_.jpg",
  "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61t4mpabO+L._AC_UL320_.jpg",
  "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/616nC5r+gyL._AC_UL320_.jpg",
];

// get the individualcard div
const individualcard = document.getElementById("individualCard");
individualcard.innerHTML = `
<div class="card">
<!-- THE IMAGE SLIDE SIDE -->
<div class="container">

<!-- all images -->
 <div class="images">
  ${images.map(
    (imgitem) =>
     ` 
  <div class="mySlides">
    <img class="slideImage" src=${imgitem} style="width:100%">
  </div>
  `
  ).join('')}
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>

  <!-- Thumbnail images -->
  <div class="row">
  ${images.map((imgitem, i)=>
    `
    <div class="column">
      <img class="demo cursor" src=${imgitem} onclick="currentSlide(${i+1})" alt="The Woods">
    </div>
    `).join('')}
  </div>
</div>

<!-- THE TEXT SIDE -->
<div class="right">
  <p class="lightColor" >Shop > Noma > <span class="bold">Hassan's Chair</span> </p>
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
</div>
</div>

`;

