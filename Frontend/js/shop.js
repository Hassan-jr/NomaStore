import { getStores } from "./api/store.js";
import { getHeader } from "./components.js";


// Set the loader to false
const loader = document.getElementById("loader");
loader.style.display = "block";


const headerData = {
    imgURL : '../assets/robot.png',
    title1 : 'The Number 1 B2B  Platform in The World',
    title2 : 'A Place Where retail Traders Meet Customers',
    description : 'Discover the Ultimate Online Shopping Experience with NomaStore Shop Now and Enjoy Fast Shipping and Secure Payment Options.',
    backgroundIMG: false
}

const headerHTML = getHeader(headerData)
const header = document.getElementById("header")
header.innerHTML = headerHTML


// store cards
const storeCardsHtml=(item)=>{
    let totalPrice = 0;
   item.StoreProducts.map(item2 => totalPrice+=item2.price)
    return`
    <div id=${item._id} class="storeItemsDiv">
    <img class="storeImg" src=${item.HomeData.imgURL ? item.HomeData.imgURL :"../assets/cart4.png" } alt=${item.ShopName}>
     <!-- Store details -->
     <div class="storeDetails">
        <h3>${item.ShopName}</h3>
        <h4>${item.StoreProducts.length}+ Products</h4>
     </div>
     <div class="storeDetails">
        <h4>KES ${totalPrice.toFixed(2)} Total</h4>
     </div>
</div>
    `
}

const stores = await getStores()
loader.style.display = "none";
const allStoresContainer = document.getElementById("allStores")
const renderStore = ()=>{
    let html = ''
    for(const store of stores){
        html +=storeCardsHtml(store)
    }

    allStoresContainer.innerHTML = html
}

renderStore()

const storecards = document.querySelectorAll(".storeItemsDiv")
for(let i = 0 ; i< storecards.length; i++){
    storecards[i].addEventListener("click", (event)=>{
        const productId = event.currentTarget.id;
        const currentUrl = window.location.href;
        const newUrl = `${currentUrl.split('/').slice(0, -1).join('/')}/mystore.html?id=${productId}`;
        window.location.href = newUrl;
    })
}