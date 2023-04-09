import {
  productCards,
  testimonialComponent,
  featuredProductsDataComponents,
  editCreateProductHTML
} from "./components.js";
import { data2 } from "./data2.js";
import {editCreateProductFunction} from './editproduct.js'
let menuicn = document.querySelector(".menuicn");
let nav2 = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
  nav2.classList.toggle("navclose");
});

// ORDERS
const orders = document.getElementById("items");

for (let i = 0; i < 5; i++) {
  orders.innerHTML += `
	<div  class="item1">
	<div class="item-product">
		<img src="https://m.media-amazon.com/images/I/41rR7Hswk4L._SL1500_.jpg">
		<div>
			<p class="item-product-title">Net10 Motorola Moto e 4G LTE Prepaid Smartphone</p>
			<small>Price: $ 768.98</small><br>
		</div>
	</div>
	<h3 class="t-op-nextlvl" >6</h3>
	<h3 class="t-op-nextlvl" >210</h3>
	<h3 class="t-op-nextlvl label-tag" >Active</h3>
</div>
	`;
}

const dashboard = document.getElementById("dashboard");
const DashboardContent = dashboard.innerHTML;
// ************************************ CHANGE Dashboard content **********************

// dashboard page
const dashboardPage = document.getElementById("option1");
dashboardPage.addEventListener("click", () => {
  dashboardPage.style.borderLeft = "5px solid #010058af";
  dashboard.innerHTML = DashboardContent;
});

// Home page
const homePage = document.getElementById("option2");
homePage.addEventListener("click", () => {
  homePage.style.borderLeft = "5px solid #010058af";
  dashboard.innerHTML = `
	  <button id="homeeditbtn" style="position: absolute; right: 40px; top: 20px; font-size: 34px;  color: #f02d35; border: none; cursor: pointer;"> <i class="fa fa-pencil" aria-hidden="true"></i></button>
	  <iframe src="../pages/mystore.html" frameborder="0" scrolling="yes" width="100%" height="1000" style="margin-top: -100px;"></iframe>
	  <div id="homeedit" class="popup">
	  <span  class="closePopUp">&times;</span>
    <div class="homepageEdit">
        <h1>EDIT HOME PAGE POP UP</h1>
    </div>
	  </div>
	 `;
  // pop up
  const homeeditbtn = document.getElementById("homeeditbtn");
  const homeedit = document.getElementById("homeedit");
  homeeditbtn &&
    homeeditbtn.addEventListener("click", () => {
      homeedit.style.display = "block";
    });
  // close
  var span = document.getElementsByClassName("closePopUp")[0];
  span.onclick = function () {
    homeedit.style.display = "none";
  };
});

// Products page
const productsPage = document.getElementById("option3");
productsPage.addEventListener("click", () => {
  productsPage.style.borderLeft = "5px solid #010058af";
  let productsHTML = "";
  data2.map((productItem, i) => {
    productsHTML += productCards(productItem, true);
  });
  dashboard.innerHTML = `
	<H1 class="dashboard-Header">Products </H1>
	<div class="productsPageProducts">
	 ${productsHTML}
	</div>
	`;

  // DELETE POP UP
  const deletbtn = document.querySelectorAll('.deleteProduct') // delete button that opens pop up
  var DeleteComponentPopUp = document.getElementById("productDeletePopUp"); // The Component gets open before delting
  var CloseDeletePopUp = document.getElementsByClassName("closePopUpDelete")[0];  // closes the delete pop
   for(let i=0; i<deletbtn.length; i++){
    deletbtn[i].addEventListener("click", (event)=>{
       const id = event.currentTarget.id;
       DeleteComponentPopUp.style.display = "block";

       console.log("CLICKED PRODUCT IS", id);
    })
   }
    CloseDeletePopUp.onclick = function () {
    DeleteComponentPopUp.style.display = "none";
  };

  // EDIT POP UP
  const EditContent = document.getElementById("EditContent") 
  const editbtn = document.querySelectorAll('.editProduct') // delete button that opens pop up
  var EditComponentPopUp = document.getElementById("productEditPopUp"); // The Component gets open before delting
  var CloseEditPopUp = document.getElementsByClassName("closePopUpEdit")[0];  // closes the delete pop
   for(let i=0; i<editbtn.length; i++){
    editbtn[i].addEventListener("click", (event)=>{
       const id = event.currentTarget.id;
       EditComponentPopUp.style.display = "block";
       EditContent.innerHTML = editCreateProductHTML() // create the edit components
       editCreateProductFunction(id)

       console.log("CLICKED PRODUCT IS", id);
    })
   }
   CloseEditPopUp.onclick = function () {
      EditComponentPopUp.style.display = "none";
  };

});

// Orders
const ordersPage = document.getElementById("option4");
ordersPage.addEventListener("click", () => {
  ordersPage.style.borderLeft = "5px solid #010058af";
  dashboard.innerHTML = "ordersPage PAGE";
});

// SubscribersPage
const subscribersPage = document.getElementById("option5");
subscribersPage.addEventListener("click", () => {
  subscribersPage.style.borderLeft = "5px solid #010058af";
  dashboard.innerHTML = "subscribersPage PAGE";
});

// Settings page
const settingsPage = document.getElementById("option6");
settingsPage.addEventListener("click", () => {
  settingsPage.style.borderLeft = "5px solid #010058af";
  dashboard.innerHTML = "settingsPage PAGE";
});

// *********************************** LOG OUT *********************

// Get the modal
var logoutmodal = document.getElementById("logoutpopup");
// Get the button that opens the modal
var logoutbtn = document.getElementById("logout");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closelogout")[0];

// When the user clicks on the button, open the modal
logoutbtn.onclick = function () {
  logoutmodal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  logoutmodal.style.display = "none";
};
// When the user clicks anywhere outside of the logout, close it
window.onclick = function (event) {
  if (event.target == modal) {
    logoutmodal.style.display = "none";
  }
};
