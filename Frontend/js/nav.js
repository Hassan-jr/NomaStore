import { ProfileJS, profileHMTL } from "./profile.js";
const userID = JSON.parse(localStorage.getItem('userID'));
console.log("USER ID IS ", userID);


const uri = "http://localhost:4000/users"

// Get all products array
const getUserData = async()=>{
   const result =  fetch(`${uri}/${userID}`)
    .then(res => res.json())
    .then(data => data)
    .catch(rejected => {
      console.log(rejected);
    }); 
    return result
}
const userData = userID? await getUserData() : ''
console.log("Fetched UserData", userData);





const profilePopUp = `
<div id="profilePopUp" class="profile">
<span class="close">&times;</span>
${profileHMTL(userData)} 
</div>`


function get_nav(){
  let cartItems = JSON.parse(localStorage.getItem('myIds') || '[]');
  if(document.getElementById('Homenav')){
    console.log('Home page');
    return ` 
    <div class="navbody">
    <nav class="navbar">
      <div class="nav-logo"><a href="index.html">NomaStore</a></div>
      <div class="nav-search">
        <form action="#">
          <input type="text" placeholder="Search...">
          <button type="submit"><img src="./assets/search.png" class="svg" alt="Search SVG" /></button>
        </form>
      </div>
      <div class="nav-links ">
        <a href='./pages/products.html'>Products</a>
        <a href="./pages/shop.html">Shops</a>
        <a href="./pages/mystore.html">My Store</a>
        <a href="./pages/cart.html">Cart<span class="cartItems">${cartItems.length}</span></a>
        ${userData.HasStore ? `<a href="./pages/dashboard.html">Dashboard</a>`: ""}
        ${!userID ? '<a href="./pages/signUp.html">Account</a>' :
        '<a id="profile">Profile</a>'}
        <a href="./pages/about.html">About Us</a>
        <a href="./pages/privacy.html">Privacy Policy</a>
      </div>
      <div class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </div>

  ${profilePopUp}

  `
  }else{
    return ` 
    <div class="navbody">
    <nav class="navbar">
      <div class="nav-logo"><a href="../index.html">NomaStore</a></div>
      <div class="nav-search">
        <form action="#">
          <input type="text" placeholder="Search...">
          <button type="submit"><img src="../assets/search.png" class="svg" alt="Search SVG" /></button>
        </form>
      </div>
      <div class="nav-links ">
        <a href='products.html'>Products</a>
        <a href="shop.html">Shops</a>
        <a href="mystore.html">My Store</a>
        <a href="cart.html">Cart<span class="cartItems">${cartItems.length}</span></a>
        ${userData.HasStore ? `<a href="dashboard.html">Dashboard</a>`: ""}
        ${!userID ? '<a href="./signUp.html">Account</a>' :
        '<a id="profile">Profile</a>'}
        <a href="about.html">About Us</a>
        <a href="privacy.html">Privacy Policy</a>
      </div>
      <div class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </div>


  ${profilePopUp}

  `
  }
 
}



const result = get_nav();
const Homenav = document.getElementById('Homenav')
const nav = document.getElementById("nav");
document.getElementById("nav") ? nav.innerHTML = result : 'null'
document.getElementById('Homenav') ? Homenav.innerHTML = result : 'null'

// RUN THE PROFILE JS AFTER CREATING THE NAV
ProfileJS(userData)



//Responsive nav
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("toggle_nav");
});


  
document.querySelector('.nav-toggle').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

// ************************* PROFILE POP UP **********************
// Get the modal
var modal = document.getElementById("profilePopUp");
var btn = document.getElementById("profile");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

export{profilePopUp}