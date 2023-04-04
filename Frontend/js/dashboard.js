let menuicn = document.querySelector(".menuicn");
let nav2 = document.querySelector(".navcontainer");

menuicn.addEventListener("click",()=>
{
	nav2.classList.toggle("navclose");
})

// ORDERS
const orders = document.getElementById("items")

for(let i =0; i<5; i++){
	orders.innerHTML +=`
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
	`
}



const dashboard = document.getElementById("dashboard")
const DashboardContent = dashboard.innerHTML
// ************************************ CHANGE Dashboard content **********************

// dashboard page
const dashboardPage = document.getElementById("option1")
dashboardPage.addEventListener("click", ()=>{
	dashboardPage.style.borderLeft = '5px solid #010058af'
	dashboard.innerHTML = DashboardContent
})

// Home page
const homePage = document.getElementById("option2")
homePage.addEventListener("click", ()=>{
	homePage.style.borderLeft = '5px solid #010058af'
	dashboard.innerHTML = "HOME PAGE"
})

// Products page
const productsPage = document.getElementById("option3")
productsPage.addEventListener("click", ()=>{
	productsPage.style.borderLeft = '5px solid #010058af'
	dashboard.innerHTML = "productsPage PAGE"
})

// Orders
const ordersPage = document.getElementById("option4")
ordersPage.addEventListener("click", ()=>{
	ordersPage.style.borderLeft = '5px solid #010058af'
	dashboard.innerHTML = "ordersPage PAGE"
})

// SubscribersPage
const subscribersPage = document.getElementById("option5")
subscribersPage.addEventListener("click", ()=>{
	subscribersPage.style.borderLeft = '5px solid #010058af'
	dashboard.innerHTML = "subscribersPage PAGE"
})

// Settings page
const settingsPage = document.getElementById("option6")
settingsPage.addEventListener("click", ()=>{
	settingsPage.style.borderLeft = '5px solid #010058af'
	dashboard.innerHTML = "settingsPage PAGE"
})


// *********************************** LOG OUT *********************

// Get the modal
var logoutmodal = document.getElementById("logoutpopup");
// Get the button that opens the modal
var logoutbtn = document.getElementById("logout");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closelogout")[0];

// When the user clicks on the button, open the modal
logoutbtn.onclick = function() {
	logoutmodal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	logoutmodal.style.display = "none";
}
// When the user clicks anywhere outside of the logout, close it
window.onclick = function(event) {
  if (event.target == modal) {
    logoutmodal.style.display = "none";
  }
}

