
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
      <a href="#">My Store</a>
      <a href="signIn.html">Sign In</a>
      <a href="signUp.html">Sign Up</a>
      <a href="#">Cart</a>
      <a href="#">About Us</a>
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
console.log("from nav", result);
const nav = document.getElementById("nav");
nav.innerHTML = result;

//Responsive nav
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("toggle_nav");
});



  