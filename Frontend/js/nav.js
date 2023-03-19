let cartItems = JSON.parse(localStorage.getItem('myIds') || '[]');


function get_nav(){
  return ` 
  <div class="navbody">
  <nav class="navbar">
    <div class="nav-logo"><a href="index.html">NomaStore</a></div>
    <div class="nav-search">
      <form action="#">
        <input type="text" placeholder="Search...">
        <button type="submit"><img src="../assets/search.png" class="svg" alt="Search SVG" /></button>
      </form>
    </div>
    <div class="nav-links ">
      <a href="products.html">Products</a>
      <a href="shop.html">Shops</a>
      <a href="mystore.html">My Store</a>
      <a href="signIn.html">Sign In</a>
      <a href="signUp.html">Sign Up</a>
      <a href="cart.html">Cart<span class="cartItems">${cartItems.length}</span></a>
      <a href="about.html">About Us</a>
      <a href="privacy.html">Privacy Policy</a>
    </div>
    <div class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</div>`
}

const result = get_nav();
const nav = document.getElementById("nav");
nav.innerHTML = result;

//Responsive nav
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("toggle_nav");
});



  