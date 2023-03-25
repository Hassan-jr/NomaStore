let menuicn = document.querySelector(".menuicn");
let nav2 = document.querySelector(".navcontainer");

menuicn.addEventListener("click",()=>
{
	nav2.classList.toggle("navclose");
})

// ORDERS
const orders = document.getElementById("items")

for(let i =0; i<10; i++){
	orders.innerHTML +=`
	<div  class="item1">
	<div class="item-product">
		<img src="https://m.media-amazon.com/images/I/41rR7Hswk4L._SL1500_.jpg">
		<div>
			<p class="item-product-title">Net10 Motorola Moto e 4G LTE Prepaid Smartphone</p>
			<small>Price: $ 768.98</small><br>
		</div>
	</div>
	<h3 class="t-op-nextlvl">2.9k</h3>
	<h3 class="t-op-nextlvl">210</h3>
	<h3 class="t-op-nextlvl label-tag">Active</h3>
</div>
	`
}