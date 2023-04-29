import { data2, getSavedIds } from "./data2.js";
import {getProducts} from './api/products.js'
import { getOneUserData, updateUser } from "./api/user.js";
import { productCards } from "./components.js";


// Get all products
const AllProductsdata= await getProducts()
// Get the user
const userID = await JSON.parse(localStorage.getItem('userID'));
const userData = await getOneUserData(userID)

// Get cart
let cartItems = await userData.Carts
let ProductsInCart = cartItems.map(item=>({...AllProductsdata.find(item2=>item.itemId == item2._id), qty: item.qty, }))
console.log("The cart Products are ", ProductsInCart);

const ids = getSavedIds()
function getSavedData(savedIds) {
    return data2.filter((item) => savedIds.includes(item._id));
  }
  
const cartData = getSavedData(ids)
console.log(cartData);

const table = document.getElementsByClassName("table")

function generateCart(item){
    return`
    <tr>
                <td>
                    <div class="cart-info">
                        <img src=${(item.images) ? item.images[0] : ""} alt="item.title">
                        <div>
                            <p class="cart-title">${item.title}</p>
                            <small>Price: $ ${item.price}</small><br>
                            <p  id=${item._id} class="removeFromCart" >Remove</p>
                        </div>
                    </div>
                </td>
                <td><input type="number" value=${item.qty}></td>
                <td>$ ${(item.price * item.qty).toFixed(2)}</td>
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

