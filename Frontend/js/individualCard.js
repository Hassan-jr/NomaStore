import { data } from "./data.js";
// get the id for required item from session storage
let id = window.sessionStorage.getItem('ProductID')
console.log(id);

// get the data of the id
// +++++++++++++++++++ to be removed later +++++++++++++++++++
let cardData = data.find(item => item.id == id)
console.log("Card data is :", cardData);

// get the individualcard div
const individualcard = document.getElementById("individualCard")
individualcard.innerHTML = `

<div class="slider">
<div class="slider-wrapper">
  <img src="https://via.placeholder.com/800x400.png?text=Slide+1" alt="Slide 1">
  <img src="https://via.placeholder.com/800x400.png?text=Slide+2" alt="Slide 2">
  <img src="https://via.placeholder.com/800x400.png?text=Slide+3" alt="Slide 3">
</div>
<button class="slider-prev">&lt;</button>
<button class="slider-next">&gt;</button>
</div>

 <div class="slider_rightSide">
 </div>

`


// slider functionality
const slider = document.querySelector('.slider');
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');

let slideIndex = 0;
const slides = sliderWrapper.querySelectorAll('img');
const slideCount = slides.length;

function showSlide(index) {
  sliderWrapper.style.transform = `translateX(-${index * 300 / slideCount}%)`;
}

function nextSlide() {
  if (slideIndex < slideCount - 1) {
    slideIndex++;
    showSlide(slideIndex);
  }
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
    showSlide(slideIndex);
  }
}

sliderPrev.addEventListener('click', prevSlide);
sliderNext.addEventListener('click', nextSlide);
