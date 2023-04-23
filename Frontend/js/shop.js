import { getHeader } from "./components.js";


const headerData = {
    imgURL : 'https://plus.unsplash.com/premium_photo-1664202526367-53d9916b0a57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    title1 : 'The #1 B2B  Platform in Kenya',
    title2 : 'A Place Where retail Traders Meet Customers',
    description : 'Discover the Ultimate Online Shopping Experience with NomaStore Shop Now and Enjoy Fast Shipping and Secure Payment Options.',
    backgroundIMG: true
}

const headerHTML = getHeader(headerData)
const header = document.getElementById("header")
header.innerHTML = headerHTML
