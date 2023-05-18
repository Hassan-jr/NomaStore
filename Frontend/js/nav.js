import { ProfileJS, profileHMTL } from "./profile.js";
import { getOneUserData } from "./api/user.js";
import { getProducts } from "./api/products.js";

const userID = JSON.parse(localStorage.getItem("userID"));
// console.log("USER ID IS ", userID);
const userData = userID ? await getOneUserData(userID) : "";
const NumbercartItems = await (userData ? await userData.Carts.length : 0);
// console.log("Fetched UserData", userData);

const profilePopUp = `
<div id="profilePopUp" class="profile">
<span class="close">&times;</span>
${profileHMTL(userData)} 
</div>`;

function get_nav() {

  if (document.getElementById("Homenav")) {
    return ` 
    <div class="navbody">
    <nav class="navbar">
      <div class="nav-logo">
       <a href="index.html">
        <p>NomaStore</p>
        <p class="subLogo">Ecommerce Platform</p>
       </a>
      </div>
      <div class="search-container">
         <input type="text" placeholder="Search Products" id="search-input">
          <div class="search-results" id="search-results"></div>
      </div>
      <div class="nav-links ">
        <a href='./pages/products.html'>Products</a>
        <a href="./pages/shop.html">Shops</a>
        ${
          userData.HasStore
            ? `<a href="./pages/mystore.html">My Store</a>`
            : ""}
        <a href="./pages/cart.html">Cart<span class="cartItems">${NumbercartItems}</span></a>
        ${
          userData.HasStore
            ? `<a href="./pages/dashboard.html">Dashboard</a>`
            : ""
        }
        ${
          !userID
            ? '<a href="./pages/account.html">Account</a>'
            : '<a id="profile">Profile</a>'
        }
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

  `;
  } else {
    return ` 
    <div class="navbody">
    <nav class="navbar">
    <div class="nav-logo">
    <a href="../index.html">
     <p>NomaStore</p>
     <p class="subLogo">Ecommerce Platform</p>
    </a>
   </div>
      <div class="search-container">
        <input type="text" placeholder="Search Products" id="search-input">
          <div class="search-results" id="search-results"></div>
      </div>
      <div class="nav-links ">
        <a href='products.html'>Products</a>
        <a href="shop.html">Shops</a>
        ${
          userData.HasStore
            ? `<a href="mystore.html">My Store</a> `
            : ""}
        <a href="cart.html">Cart<span class="cartItems">${NumbercartItems}</span></a>
        ${userData.HasStore ? `<a href="dashboard.html">Dashboard</a>` : ""}
        ${
          !userID
            ? '<a href="./account.html">Account</a>'
            : '<a id="profile">Profile</a>'
        }
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

  `;
  }
}

const result = get_nav();
const Homenav = document.getElementById("Homenav");
const nav = document.getElementById("nav");
document.getElementById("nav") ? (nav.innerHTML = result) : "null";
document.getElementById("Homenav") ? (Homenav.innerHTML = result) : "null";

// RUN THE PROFILE JS AFTER CREATING THE NAV
ProfileJS(userData);

//Responsive nav
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("toggle_nav");
});

document.querySelector(".nav-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

// ************************* PROFILE POP UP **********************
// Get the modal
var modal = document.getElementById("profilePopUp");
var btn = document.getElementById("profile");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Search functionality
const products = await getProducts();
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

function displaySearchResults(products) {
  searchResults.innerHTML = "";

  products.forEach((product) => {
    // create a warpper div
    const div = document.createElement("div")
    div.className ="searchResultWrapper"
  // create img
  const img = document.createElement("img")
  img.src = product.images[0]
  img.alt = product.title
// create link
    const link = document.createElement("a");
    link.href = document.getElementById("Homenav")? `pages/individualCard.html?id=${product._id}` : `individualCard.html?id=${product._id}`;
    link.textContent = product.title;
    div.appendChild(img)
    div.appendChild(link)
    searchResults.appendChild(div);
    // searchResults.appendChild(link);
  });
}

function handleSearchInput() {
  const searchQuery = searchInput.value.toLowerCase();
  if (!searchQuery) {
    searchResults.innerHTML = "";
  }
  const matchingProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery)
  );
  displaySearchResults(matchingProducts);
}

// if user clicks outside the search area he will end the search funtionality
document.addEventListener("click", function(event) {
  // Check if the target of the click is outside the search input and search result
  if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
    // Clear the search input and search result
    searchInput.value = "";
    searchResults.innerHTML = "";
  }
});

searchInput.addEventListener("input", handleSearchInput);


export { profilePopUp };
