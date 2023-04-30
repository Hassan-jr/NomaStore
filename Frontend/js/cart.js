import { data2, getSavedIds } from "./data2.js";
import {getProducts} from './api/products.js'
import { getOneUserData, updateUser } from "./api/user.js";
import { getStores,updateStore } from "./api/store.js";


// Set the loader to false
const loader = document.getElementById("loader");
loader.style.display = "none";

// Get all products
const AllProductsdata= await getProducts()
// Get the user
const userID = await JSON.parse(localStorage.getItem('userID'));
const userData = await getOneUserData(userID)

// Get cart
let cartItems = await userData.Carts
let ProductsInCart = cartItems.map(item=>({...AllProductsdata.find(item2=>item.itemId == item2._id), qty: item.qty, }))


// Get the Orders 
const OderedItems = await userData.Orders
const OrederProducts = OderedItems.map(item=>({...AllProductsdata.find(item2=>item.itemId == item2._id), qty: item.qty, }))

const ids = getSavedIds()
function getSavedData(savedIds) {
    return data2.filter((item) => savedIds.includes(item._id));
  }
  
const cartData = getSavedData(ids)
console.log(cartData);

const table = document.getElementsByClassName("table")

// For random delivary date
function getRandomDate() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const randomDay = Math.floor(Math.random() * 5) + 1;
    date.setDate(date.getDate() + randomDay);
    return `${date.getDate()} ${days[date.getDay()]}`
  }

// Fuction for generatin a single row of carts
function generateCart(item, orders=false){
    return`
    <tr>
                <td>
                    <div class="cart-info">
                        <img class="cartIMG" src=${(item.images) ? item.images[0] : ""} alt="item.title">
                        <div>
                            <p class="cart-title">${item.title}</p>
                            <small>Price: $ ${item.price}</small><br>
                            ${ !orders ? `<p  id=${item._id} class="removeFromCart" >Remove</p>` : ''}
                        </div>
                    </div>
                </td>
                <td class="qty">${item.qty}</td>
                <td>$ ${(item.price * item.qty).toFixed(2)}</td>
                ${orders && `<td class="qty">${getRandomDate()}</td>`}
            </tr>
    `
}

// Loops throug the product array to create a product for each item
function generateCartCards() {
    const productCardsContainer = document.getElementById("table")
    let productCardsHTML = ` <tr>
    <th>Product</th>
    <th>Quantity</th>
    <th>Subtotal</th>
</tr>`
    for (const product of ProductsInCart) {
      productCardsHTML += generateCart(product);
    }
    productCardsContainer.innerHTML = productCardsHTML;


    //   update Subtotal
const total = document.getElementById("total")
let   totalprice = 0
ProductsInCart.map(item=>{
    totalprice += parseFloat( item.price * item.qty)
    return parseFloat(totalprice)
})
total.innerText =` $ ${totalprice.toFixed(2)} `

// tax 
const tax = document.getElementById("tax")
tax.innerText = ` $ ${(0.15 * totalprice).toFixed(2)}`

// total
const finalTotal = document.getElementById("finalPrice")
finalTotal.innerText =` $ ${(totalprice - (0.15 * totalprice)).toFixed(2)}`
  } 
generateCartCards();


// *********************** Ordered section (html)
const OrderedProductFunction = ()=>{
const OrderedItemsContainer = document.getElementById("OrderedItems")
let productCardsHTML = ` <tr>
    <th>Product</th>
    <th>Quantity</th>
    <th>Subtotal</th>
    <th>Delivary Data</th>
</tr>`
    for (const product of OrederProducts) {
      productCardsHTML += generateCart(product,true);
    }
    OrderedItemsContainer.innerHTML = productCardsHTML;
}
OrderedProductFunction()
// removeFromCart
const removeFromCart  = document.querySelectorAll(".removeFromCart")
for(let i=0; i<removeFromCart.length; i++){
    removeFromCart[i].addEventListener("click", async(e)=>{
        const idToRemove = e.currentTarget.id
        console.log("Remove", idToRemove);
        ProductsInCart = ProductsInCart.filter(item => !(item._id == idToRemove))
        cartItems =  cartItems.filter(item => !(item.itemId == idToRemove))
        updateUser(userID, {Carts : cartItems})
        window.location.reload()
        // generateCartCards();
    })
}



// ************************ Make payments ***********************************
const checkoutbtn = document.getElementById("checkoutbtn")
checkoutbtn.addEventListener("click", async()=>{
    // start loader
    loader.style.display = "block";
    // handle payment
    const cartProductsData = await ProductsInCart
    console.log("The cart Products are ", cartProductsData);
    await fetch("http://localhost:4000/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [...cartProductsData],
    }),
  })
    .then(async(res) => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(async({ url }) => {
        // Add the cart items in the orders section of the user
        const NewOrders = [...await userData.Orders,...cartItems]
        updateUser(userID, {Carts: [], Orders: NewOrders })
        // Update the stores to have the orders
        const stores = await getStores()
        await Promise.all(cartProductsData.map(async(cartItem)=>{
            const Store = await stores.find(storeItem => storeItem.ShopName == cartItem.seller)
            const OderedItem = {
                itemId: cartItem._id,
                qty: cartItem.qty
            }
            const NewOrders = [...Store.Orders, OderedItem]
            updateStore(Store._id, {Orders : NewOrders})
        }))
        // Remove loader
        loader.style.display = "none";
        window.location = url
    })
    .catch(e => {
      console.log(e)
    })
})
