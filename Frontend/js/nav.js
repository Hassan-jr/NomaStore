var currentUrl = window.location.href;
var filename = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
const navExtension = filename == "index.html" ? "./pages/" : ''
const navExtensionLogo = filename == "index.html" ? "" : '../'
const searchIconExtension = filename == "index.html" ? "" : '.'


function get_nav(){
  let cartItems = JSON.parse(localStorage.getItem('myIds') || '[]');
  return ` 
  <div class="navbody">
  <nav class="navbar">
    <div class="nav-logo"><a href="${navExtensionLogo}index.html">NomaStore</a></div>
    <div class="nav-search">
      <form action="#">
        <input type="text" placeholder="Search...">
        <button type="submit"><img src="${searchIconExtension}./assets/search.png" class="svg" alt="Search SVG" /></button>
      </form>
    </div>
    <div class="nav-links ">
      <a href='${navExtension}products.html'>Products</a>
      <a href="${navExtension}shop.html">Shops</a>
      <a href="${navExtension}mystore.html">My Store</a>
      <a href="${navExtension}signUp.html">Account</a>
      <a href="${navExtension}cart.html">Cart<span class="cartItems">${cartItems.length}</span></a>
      <a href="${navExtension}dashboard.html">Dashboard</a>
      <a href="${navExtension}about.html">About Us</a>
      <a href="${navExtension}privacy.html">Privacy Policy</a>
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


  
document.querySelector('.nav-toggle').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});