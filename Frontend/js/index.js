import {productCards, testimonialComponent, featuredProductsDataComponents, getHeader} from './components.js'
import { addSubs } from "./api/store.js"
import { getProducts } from './api/products.js'



// Set the loader to false
const loader = document.getElementById("loader");
loader.style.display = "block";

const data2 = await getProducts()
loader.style.display = "none";
// ************************** Header ****************
const headerData = {
  imgURL : './assets/cart6.png',
  title1 : 'Find Everything You Need:',
  title2 : 'Shop Our Extensive Online Catalog',
  description : 'Discover the Ultimate Online Shopping Experience with NomaStore Shop Now and Enjoy Fast Shipping and Secure Payment Options.',
  backgroundIMG: false
}
const headerHTML = getHeader(headerData)
const header = document.getElementById("header")
header.innerHTML = headerHTML

// Newletter Form
const newletterForm = document.getElementById("newletterForm")
newletterForm.addEventListener("submit", async(event)=>{
  event.preventDefault()
  const Email = newletterForm.elements['Email'].value;
  const NomaID= "64450f72b3d8f9a409a26d49"
  await addSubs(NomaID,{subscriber: Email})
  alert("Subscribed Successfully")
  window.location.reload()
  console.log('The email is', Email);
})



const featuredProductsData = [
  {
    imgURL: "https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Sneakers"
  },
  {
    imgURL: "https://images.unsplash.com/photo-1537261131936-3cdff36a1ac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnN3ZWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Mens Wear"
  },
  {
    imgURL: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkaWVzJTIwd2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Ladies Wear"
  },
  {
    imgURL: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Computers/Laptops"
  },
  {
    imgURL: "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGlwaG9uZSUyMDE0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Mobile Phones"
  }
]

const testimonialData =   [
  {
      name: "Zakaria Issack",
      img: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
      feedback: "NomaStore provided an excellent shopping experience. Easy-to-use website, accurate product descriptions, smooth checkout, and prompt delivery. Highly recommended!"
  },
  {
      name: "Jhon Kamau",
      img: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      feedback: "Impressed with NomaStore's exceptional customer service. Prompt and friendly support team. Will definitely shop here again."
  },
  {
      name: "Hassan Adan",
      img: "https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      feedback: "NomaStore's product quality exceeded my expectations. Top-notch materials, impeccable craftsmanship. A trusted online store for outstanding products."
  }
]


// dynamically feed the best seller products
const card = document.getElementById("best-seller-cards")
for (let i = 0; i<8; i++){
    card.innerHTML += productCards(data2[i])
}


// Featured products components
const featured = document.getElementById("features")
featuredProductsData.map(item=>
  featured.innerHTML += featuredProductsDataComponents(item)
  )



// Testmonilas
const testimonials = document.getElementById("testimonials")
for (let i = 0; i<3; i++){
      testimonials.innerHTML += testimonialComponent(testimonialData[i])
}