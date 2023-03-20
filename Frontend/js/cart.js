import { data2 } from "./data2.js";

function getSavedIds() {
    // Get existing IDs from local storage (if any)
    let existingIds = JSON.parse(localStorage.getItem('myIds') || '[]');
    return existingIds;
  }
  
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
                        <img src=${item.images[0]}>
                        <div>
                            <p class="cart-title">${item.title}</p>
                            <small>Price: $ ${item.price}</small><br>
                            <a href="" id=${item._id}  onclick="removeItem(event)">Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value="1"></td>
                <td>$ ${item.price}</td>
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
    for (const product of cartData) {
      productCardsHTML += generateCart(product);
    }
    productCardsContainer.innerHTML = productCardsHTML;
  }
  
  generateCartCards();

//   update Subtotal
const total = document.getElementById("total")
let   totalprice = 0
cartData.map(item=>{
    totalprice += parseFloat( item.price)
    return parseFloat(totalprice)
})
total.innerText =` $ ${totalprice.toFixed(2)} `

// tax 
const tax = document.getElementById("tax")
tax.innerText = ` $ ${(0.15 * totalprice).toFixed(2)}`

// total
const finalTotal = document.getElementById("finalPrice")
finalPrice.innerText =` $ ${(totalprice - (0.15 * totalprice)).toFixed(2)}`

