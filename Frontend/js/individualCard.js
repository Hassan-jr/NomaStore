import { data } from "./data.js";
// get the id for required item from session storage
let id = window.sessionStorage.getItem("ProductID");
console.log(id);

// get the data of the id
// +++++++++++++++++++ to be removed later +++++++++++++++++++
let cardData = data.find((item) => item.id == id);
console.log("Card data is :", cardData);

// get the individualcard div
const individualcard = document.getElementById("individualCard");
individualcard.innerHTML = `
<div class="card">
<!-- THE IMAGE SLIDE SIDE -->
<div class="container">

<!-- all images -->
 <div class="images">
  <!-- Full-width images with number text -->
  <div class="mySlides">
      <img class="slideImage" src="https://www.w3schools.com/howto/img_woods_wide.jpg" style="width:100%">
  </div>

  <div class="mySlides">
      <img class="slideImage" src="https://www.w3schools.com/howto/img_5terre_wide.jpg" style="width:100%">
  </div>

  <div class="mySlides">
      <img class="slideImage" src="https://www.w3schools.com/howto/img_mountains_wide.jpg" style="width:100%">
  </div>

  <div class="mySlides">
      <img class="slideImage" src="https://www.w3schools.com/howto/img_lights_wide.jpg" style="width:100%">
  </div>

  <div class="mySlides">
      <img class="slideImage" src="https://www.w3schools.com/howto/img_nature_wide.jpg" style="width:100%">
  </div>

  <div class="mySlides">
      <img class="slideImage" src="https://www.w3schools.com/howto/img_snow_wide.jpg" style="width:100%">
  </div>
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
  

  <!-- Image text -->
  <!-- <div class="caption-container">-->
  <!--   <p id="caption"></p>-->
  <!-- </div>-->

  <!-- Thumbnail images -->
  <div class="row">
    <div class="column">
      <img class="demo cursor" src="https://www.w3schools.com/howto/img_woods.jpg" style="width:100%" onclick="currentSlide(1)" alt="The Woods">
    </div>
    <div class="column">
      <img class="demo cursor" src="https://www.w3schools.com/howto/img_5terre.jpg" style="width:100%" onclick="currentSlide(2)" alt="Cinque Terre">
    </div>
    <div class="column">
      <img class="demo cursor" src="https://www.w3schools.com/howto/img_mountains.jpg" style="width:100%" onclick="currentSlide(3)" alt="Mountains and fjords">
    </div>
    <div class="column">
      <img class="demo cursor" src="https://www.w3schools.com/howto/img_lights.jpg" style="width:100%" onclick="currentSlide(4)" alt="Northern Lights">
    </div>
    <div class="column">
      <img class="demo cursor" src="https://www.w3schools.com/howto/img_nature.jpg" style="width:100%" onclick="currentSlide(5)" alt="Nature and sunrise">
    </div>
    <div class="column">
      <img class="demo cursor" src="https://www.w3schools.com/howto/img_snow.jpg" style="width:100%" onclick="currentSlide(6)" alt="Snowy Mountains">
    </div>
  </div>
</div>

<!-- THE TEXT SIDE -->
<div class="right">
</div>
</div>

`;

