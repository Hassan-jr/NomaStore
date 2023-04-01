// var currentUrl = window.location.href;
// var filename = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
// const navExtension = filename == "index.html" ? "./pages/" : ''
// const navExtensionLogo = filename == "index.html" ? "" : '../'
// const searchIconExtension = filename == "index.html" ? "" : '.'


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
        <a href="./pages/signUp.html">Account</a>
        <a href="./pages/cart.html">Cart<span class="cartItems">${cartItems.length}</span></a>
        <a href="./pages/dashboard.html">Dashboard</a>
        <a href="./pages/about.html">About Us</a>
        <a href="./pages/privacy.html">Privacy Policy</a>
      </div>
      <div class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </div>`
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
        <a href="signUp.html">Account</a>
        <a href="cart.html">Cart<span class="cartItems">${cartItems.length}</span></a>
        <a href="dashboard.html">Dashboard</a>
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
 
}

const result = get_nav();
const Homenav = document.getElementById('Homenav')
const nav = document.getElementById("nav");
document.getElementById("nav") ? nav.innerHTML = result : 'null'
document.getElementById('Homenav') ? Homenav.innerHTML = result : 'null'

//Responsive nav
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("toggle_nav");
});


  
document.querySelector('.nav-toggle').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});