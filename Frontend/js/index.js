import {data2} from "./data2.js"
import {productCards, testimonialComponent, featuredProductsDataComponents, getHeader} from './components.js'
import { addSubs } from "./api/store.js"


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
      name: "Abdiladif Hassan",
      img: "https://www.hassanjr.com/static/media/profile.b5b3138ff8c65c7bdf84.png",
      feedback: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem i"
  },
  {
      name: "Abdiladif Hassan",
      img: "https://www.hassanjr.com/static/media/profile.b5b3138ff8c65c7bdf84.png",
      feedback: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem i"
  },
  {
      name: "Abdiladif Hassan",
      img: "https://www.hassanjr.com/static/media/profile.b5b3138ff8c65c7bdf84.png",
      feedback: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem i"
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