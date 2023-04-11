import {
  productCards,
  testimonialComponent,
  featuredProductsDataComponents,
  editCreateProductHTML,
  getOrdersHTML
} from "./components.js";
import { ProfileJS, profileHMTL } from "./profile.js";
import { data2 } from "./data2.js";
import { editCreateProductFunction } from "./editproduct.js";


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
                <H1 class="dashboard-Header">My Dashboard</H1>
                <!-- Oders Top section -->
                <div class="box-container">
                    <div class="box box1">
                        <div class="text">
                            <i class="fa fa-shopping-bag icons" aria-hidden="true"></i>
                            <h2 class="topic">Total Sales</h2>
                        </div>
                        <div class="text2">
                            <h2 class="topic-heading"> <i class="fa fa-usd" style="font-size: 15px;"
                                    aria-hidden="true"></i> 605, 857.68</h2>
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
                            <h2 class="topic-heading">984</h2>
                            <p class="order-card-sales-per">+34.68% <i class="fa fa-arrow-up arrow"
                                    aria-hidden="true"></i> </p>
                        </div>

                    </div>

                    <div class="box box3">
                        <div class="text">
                            <i class="fa fa-star icons" aria-hidden="true"></i>
                            <h2 class="topic">Overall Rattings</h2>
                        </div>
                        <div class="text2">
                            <h2 class="topic-heading">12,456 </h2>
                            <p class="order-card-sales-per">4.5<i class="fa fa-star " aria-hidden="true"></i> </p>
                        </div>

                    </div>

                    <div class="box box4">
                        <div class="text">
                            <i class="fa fa-check icons" aria-hidden="true"></i>
                            <h2 class="topic">Published</h2>
                        </div>
                        <div class="text2">
                            <h2 class="topic-heading">84 </h2>
                            <p class="order-card-sales-per">+ 14.5% <i class="fa fa-check-circle "
                                    aria-hidden="true"></i> </p>
                        </div>
                    </div>
                </div>

                <!-- Bottom Products Orders section-->
                ${getOrdersHTML(data2.slice(0,5), false)}
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
  dashboard.innerHTML = `
	  <button id="homeeditbtn" style="position: absolute; right: 40px; top: 20px; font-size: 34px;  color: #f02d35; border: none; cursor: pointer;"> <i class="fa fa-pencil" aria-hidden="true"></i></button>
	  <iframe src="../pages/mystore.html" frameborder="0" scrolling="yes" width="100%" height="1000" style="margin-top: -100px;"></iframe>
	 
    <-- ********************************** POP UP ************************** --!>
   
    <div id="homeedit" class="popup">
	  <span  class="closePopUp">&times;</span>
            <h1>Edit Your Home Page</h1>
        <form id="homepageEditForm" class="homepageEdit">
        <h2 style="color: #313BAC;">Current Header Image</h2>
        <img src="../assets/cart4.png" alt="homeEditImage"/>
           <div class="hamePageForm">
             <label for="backgroundImg">Header Image</label>
             <input id="backgroundImg" type="file" name="backgroundImg" accept="image/*" />
           </div>
           <div class="hamePageForm">
            <label for="set">Set Image as Background</label>
            <input id="set" type="checkbox"    name="set"/>
           </div>
           <div class="hamePageForm">
           <label for="title1">Header Title 1</label>
           <input id="title1" type="text" placeholder="Enter Header Title 1" name="title1"/>
          </div>
          <div class="hamePageForm">
           <label for="title2">Header Title 2</label>
           <input id="title2" type="text" placeholder="Enter Header Title 2" name="title2"/>
          </div>
          <div class="hamePageForm">
           <label for="desc">Header desc</label>
           <input id="desc" type="text" placeholder="Enter Header  desc" name="desc"/>
          </div>
           <div class="hamePageForm">
           <label for="banner">Banner Producnt</label>
           <input id="banner" type="text" placeholder="Enter Product Id" name="set"/>
          </div>

          <button type="submit">Update</button>
        </form>
   
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

  // Handle Form
  const reader = new FileReader();
  const homepageForm = document.getElementById("homepageEditForm");
  homepageForm &&
    homepageForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission
      const homePageImage = document.getElementById("backgroundImg").files[0];
      const title1 = homepageForm.elements["title1"].value;
      const title2 = homepageForm.elements["title2"].value;
      const desc = homepageForm.elements["desc"].value;
      const setAsBackground = document.getElementById("set").checked;
      const banner = homepageForm.elements["banner"].value;
      let homePageImgUrl;
      reader.onload = (e) => {
        homePageImgUrl = e.target.result;
        console.log("Items are :", {
          homePageImgUrl,
          setAsBackground,
          banner,
          title1,
          title2,
          desc,
        });
      };
      homePageImage && reader.readAsDataURL(homePageImage);
      console.log("Items are :", {
        homePageImgUrl,
        setAsBackground,
        banner,
        title1,
        title2,
        desc,
      });
    });
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
      editCreateProductFunction(id);

      console.log("CLICKED PRODUCT IS", id);
    });
  }
  CloseEditPopUp.onclick = function () {
    EditComponentPopUp.style.display = "none";
  };
});

// Orders
const ordersPage = document.getElementById("option4");
ordersPage.addEventListener("click", () => {
  ordersPage.style.borderLeft = "5px solid #010058af";
  dashboard.innerHTML = ` ${getOrdersHTML(data2, true)}`;
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
  dashboard.innerHTML = `
  <div>
  ${profileHMTL()}
  </div>
  `;
  // RUN THE PROFILE JS AFTER CREATIN THE NAV
  ProfileJS();
  
});


// *********************************** LOG OUT *********************

var logoutmodal = document.getElementById("logoutpopup");
var logoutbtn = document.getElementById("logout");
var span = document.getElementsByClassName("closelogout")[0];

// When the user clicks on the button, open the modal
logoutbtn.onclick = function () {
  logoutmodal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  logoutmodal.style.display = "none";
};
