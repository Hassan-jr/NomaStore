import {
  productCards,
  editCreateProductHTML,
  getOrdersHTML,
  subsHTML,
  delsub,
  getStoreHtml,
  delStore,
  updateOrdersState
} from "./components.js";
import { editCreateProductFunction } from "./editproduct.js";
import { getOneUserData,getUsers } from "./api/user.js";
import { getUserProfileCard } from "./components.js";
import { getStores } from "./api/store.js";
import { deleteProduct, getProducts } from "./api/products.js";
import { homePageHtml, homePageEditForm } from "./editHomePage.js";




// Set the loader to false
const loader = document.getElementById("loader");
loader.style.display = "block";

// Get the user
const userID = JSON.parse(localStorage.getItem('userID'));
const userData = await getOneUserData(userID)
// get all user data
const alluser = await getUsers()
// get the store
const stores = await getStores()
const mystore = await stores.find(storeItem=>storeItem.ShopName == userData.StoreName)
const allProducts = await getProducts()

// remove loader
loader.style.display = "none";

// Get dashboard Component form the store
const homePageData = await mystore.HomeData
const storeProducts = mystore.ShopName == "Noma" ? allProducts  : await mystore.StoreProducts
const storeOders = await mystore.Orders
const OrederProducts = await storeOders.map((item)=>({...storeProducts.find(item2=>item.itemId == item2._id), qty: item.qty, delivered: item.delivered, user:  alluser.find(user=>user._id == item.userId)}))
const storeSubscribers = await mystore.Subscribers



// Side Nav Functionanality
let menuicn = document.querySelector(".menuicn");
let nav2 = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
  nav2.classList.toggle("navclose");
});



const dashboard = document.getElementById("dashboard");
dashboard.innerHTML = `
         <div>
                <!-- Dashboader header / Title -->
                <H1 class="dashboard-Header">${ userData.StoreName == "Noma"? "Admin" : userData.StoreName} Dashboard</H1>
                <!-- Oders Top section -->
                <div class="box-container">
                    <div class="box box1">
                        <div class="text">
                            <i class="fa fa-shopping-bag icons" aria-hidden="true"></i>
                            <h2 class="topic">Total Sales</h2>
                        </div>
                        <div class="text2">
                            <h2 class="topic-heading">  KES ${(storeProducts.reduce((partialSum, a) => partialSum + a.price, 0)).toFixed(2)}</h2>
                            <p class="order-card-sales-per">+5.68% <i class="fa fa-arrow-up arrow"
                                    aria-hidden="true"></i> </p>
                        </div>
                    </div>

                    <div class="box box2">
                        <div class="text">
                            <i class="fa fa-shopping-cart icons" aria-hidden="true"></i>
                            <h2 class="topic">Orders</h2>
                        </div>
                        <div class="text2">
                            <h2 class="topic-heading">${OrederProducts.length}</h2>
                            <p class="order-card-sales-per">+24.68% <i class="fa fa-arrow-up arrow"
                                    aria-hidden="true"></i> </p>
                        </div>

                    </div>

                    <div class="box box3">
                        <div class="text">
                            <i class="fa fa-star icons" aria-hidden="true"></i>
                            <h2 class="topic">Overall Rattings</h2>
                        </div>
                        <div class="text2">
                            <h2 class="topic-heading">${(storeProducts.reduce((partialSum, a) => partialSum + Number(a.rating), 0)/storeProducts.length).toFixed(1)} </h2>
                            <p class="order-card-sales-per">Out of 5.0 <i class="fa fa-star " aria-hidden="true"></i> </p>
                        </div>

                    </div>

                    <div class="box box4">
                        <div class="text">
                            <i class="fa fa-check icons" aria-hidden="true"></i>
                            <h2 class="topic">Published Products</h2>
                        </div>
                        <div class="text2">
                            <h2 class="topic-heading">${storeProducts.length} </h2>
                            <p class="order-card-sales-per">+ 14.5% <i class="fa fa-check-circle "
                                    aria-hidden="true"></i> </p>
                        </div>
                    </div>

          <!-- BOX 3 AGAIN FOR REVIEWS -->

                    <div class="box box3">
                        <div class="text">
                            <i class="fa fa-star icons" aria-hidden="true"></i>
                            <h2 class="topic">Overall Reviews</h2>
                        </div>
                        <div class="text2">
                            <h2 class="topic-heading">${(storeProducts.reduce((partialSum, a) => partialSum + (a.reviews), 0)/storeProducts.length).toFixed(0)} </h2>
                            <p class="order-card-sales-per">+ 1.95% <i class="fa fa-arrow-up arrow"
                            aria-hidden="true"></i> </p>
                        </div>
                    </div>

                    <!-- BOX 3 AGAIN FOR SOLD ITEMS PRICES -->

                   <div class="box box3">
                    <div class="text">
                    <i class="fa fa-credit-card icons" aria-hidden="true"></i>
                        <h2 class="topic">Sold</h2>
                    </div>
                    <div class="text2">
                        <h2 class="topic-heading"> KES ${(OrederProducts.reduce((partialSum, a) => partialSum + (a.price * a.qty), 0)).toFixed(2)} </h2>
                    </div>
                    <p class="order-card-sales-per">+ 07.76% <i class="fa fa-arrow-up arrow"
                            aria-hidden="true"></i> </p>
                 </div>
                
                </div>

                <!-- Bottom Products Orders section-->
                ${getOrdersHTML(OrederProducts, false)}
          </div>
`;
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
  dashboard.innerHTML = homePageHtml();
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

  homePageEditForm(mystore._id, homePageData)
});

// Products page
const productsPage = document.getElementById("option3");
productsPage.addEventListener("click", () => {
  productsPage.style.borderLeft = "5px solid #010058af";
  let productsHTML = "";
  storeProducts.map((productItem, i) => {
    productsHTML += productCards(productItem, true);
  });
  dashboard.innerHTML = `
	<H1 class="dashboard-Header">Products </H1>
	<div class="productsPageProducts">
	 ${productsHTML}
	</div>
	`;

  // ***************************** Product delte section  **************************
  const Productdeletbtns = document.querySelectorAll(".deleteProduct")
  for (let i = 0; i < Productdeletbtns.length; i++) {
    Productdeletbtns[i].addEventListener("click", (event) => {
      const id = event.currentTarget.id;
      deleteProduct(id)
      alert("Product to be delete is successfully");
      window.location.reload()
    });
  }

  // ******************************* Product Edit section as a pop up **************************
  // DELETE POP UP
  const deletbtn = document.querySelectorAll(".deleteProduct"); // delete button that opens pop up
  var DeleteComponentPopUp = document.getElementById("productDeletePopUp"); // The Component gets open before delting
  var CloseDeletePopUp = document.getElementsByClassName("closePopUpDelete")[0]; // closes the delete pop
  for (let i = 0; i < deletbtn.length; i++) {
    deletbtn[i].addEventListener("click", (event) => {
      const id = event.currentTarget.id;
      DeleteComponentPopUp.style.display = "block";

      console.log("CLICKED PRODUCT IS", id);
    });
  }
  CloseDeletePopUp.onclick = function () {
    DeleteComponentPopUp.style.display = "none";
  };

  // EDIT POP UP
  const EditContent = document.getElementById("EditContent");
  const editbtn = document.querySelectorAll(".editProduct"); // delete button that opens pop up
  var EditComponentPopUp = document.getElementById("productEditPopUp"); // The Component gets open before delting
  var CloseEditPopUp = document.getElementsByClassName("closePopUpEdit")[0]; // closes the delete pop
  for (let i = 0; i < editbtn.length; i++) {
    editbtn[i].addEventListener("click", (event) => {
      const id = event.currentTarget.id;
      EditComponentPopUp.style.display = "block";
      EditContent.innerHTML = editCreateProductHTML(); // create the edit components
      editCreateProductFunction(id, userData.StoreName);

      console.log("CLICKED PRODUCT IS", id);
    });
  }
  CloseEditPopUp.onclick = function () {
    EditComponentPopUp.style.display = "none";
  };
});

// Add new Product From side NAV
const addnewproductbtn = document.getElementById("newProduct")
 // EDIT POP UP
 const EditContent = document.getElementById("EditContent");
 var EditComponentPopUp = document.getElementById("productEditPopUp"); // The Component gets open before delting
 var CloseEditPopUp = document.getElementsByClassName("closePopUpEdit")[0]; // closes the delete pop
     addnewproductbtn.addEventListener("click", (event) => {
     const id = event.currentTarget.id;
     EditComponentPopUp.style.display = "block";
     EditContent.innerHTML = editCreateProductHTML(); // create the edit components
     editCreateProductFunction("new",  userData.StoreName);

     console.log("CLICKED PRODUCT IS", id);
   });
   CloseEditPopUp.onclick = function () {
    EditComponentPopUp.style.display = "none";
  };
 


// Orders
const ordersPage = document.getElementById("option4");
ordersPage.addEventListener("click", () => {
  ordersPage.style.borderLeft = "5px solid #010058af";
  // const deleveredProducts = OrederProducts.find(item=>item.delivered == true)
  // const pendingProducts = OrederProducts.find(item=>!item.delivered || item.delivered == false)
  // const deleveredProductsHTML = getOrdersHTML( deleveredProducts, true) // second true is for checkbox button
  // const pendingProductsHTML = getOrdersHTML( pendingProducts, true)
  dashboard.innerHTML =  `${getOrdersHTML( OrederProducts, true)}`; 
  updateOrdersState(storeOders, mystore._id)
});



// SubscribersPage
const subscribersPage = document.getElementById("option5");
subscribersPage.innerHTML = mystore.ShopName == "Noma" ? `<i class="fa fa-envelope" aria-hidden="true"></i>
<h3>Subscribers</h3>` : ""
mystore.ShopName == "Noma" && subscribersPage.addEventListener("click", () => {
  subscribersPage.style.borderLeft = "5px solid #010058af";
  dashboard.innerHTML = `${subsHTML(storeSubscribers)}`;
  delsub()
});

// Settings page
const settingsPage = document.getElementById("option6");
settingsPage.addEventListener("click", () => {
  settingsPage.style.borderLeft = "5px solid #010058af";
  dashboard.innerHTML = `
  <div>
  ${getUserProfileCard(userData)}
  </div>
  `;  
});


// All store
const allStores = document.getElementById("allstores");
allStores.innerHTML = mystore.ShopName == "Noma" ? `<i class="fa fa-shopping-basket" aria-hidden="true"></i>
<h3>All Stores</h3>` : ""
mystore.ShopName == "Noma" && allStores.addEventListener("click", () => {
  allStores.style.borderLeft = "5px solid #010058af";
  let storeHtml = ''
  stores.map(store=>{
    storeHtml +=  getStoreHtml(store)
  })
  dashboard.innerHTML = `<div> 
   ${storeHtml} 
   </div>`
  delStore()
});

