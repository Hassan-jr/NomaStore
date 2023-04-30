import { data2 } from "./data2.js";
import { getOneUserData } from "./api/user.js";
import { getStores } from "./api/store.js";

import {
  productCards,
  testimonialComponent,
  featuredProductsDataComponents,
  getHeader,
} from "./components.js";


// Get the user
const userID = JSON.parse(localStorage.getItem('userID'));
const userData = await getOneUserData(userID)

// Get the store id from url incase user is from shops page
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
let mystore
if(id){
  // get the store
const stores = await getStores()
 mystore = await stores.find(storeItem=>storeItem._id == id)
}else{
// get the store
const stores = await getStores()
mystore = await stores.find(storeItem=>storeItem.ShopName == userData.StoreName)
}


// Get dashboard Component form the store
const homePageData = await mystore.HomeData
const storeProducts = await mystore.StoreProducts
const banner = await homePageData.banner
let bannerProduct;
if(!banner){
  bannerProduct = storeProducts[1]
}else{
  bannerProduct = storeProducts.find(item=>item._id == banner)
}
 

const MyStore = {
  features: [
    {
      imgURL:
        "https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Sneakers",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1537261131936-3cdff36a1ac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnN3ZWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Mens Wear",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkaWVzJTIwd2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      category: "Ladies Wear",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Computers/Laptops",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGlwaG9uZSUyMDE0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Mobile Phones",
    },
  ],
  Banner_2: {
    tag_1: "Best From",
    tag_2: mystore.ShopName,
    name: bannerProduct.category,
    button: ` ${ bannerProduct.category} From ${ mystore.ShopName}`,
    desc: bannerProduct.description.slice(0,300),
    img: bannerProduct.images[1],
  },
  best_products: [
    "628c9b02c5f0f6420a0f191c",
    "628c9b02c5f0f6420a0f191b",
    "628c9b02c5f0f6420a0f191a",
    "628c9b02c5f0f6420a0f1919",
    "628c9b02c5f0f6420a0f1917",
    "628c9b02c5f0f6420a0f1915",
  ],
  testimonials: [
    {
      name: "Abdiladif Hassan",
      img: "https://www.hassanjr.com/static/media/profile.b5b3138ff8c65c7bdf84.png",
      feedback:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem i",
    },
    {
      name: "Abdiladif Hassan",
      img: "https://www.hassanjr.com/static/media/profile.b5b3138ff8c65c7bdf84.png",
      feedback:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem i",
    },
    {
      name: "Abdiladif Hassan",
      img: "https://www.hassanjr.com/static/media/profile.b5b3138ff8c65c7bdf84.png",
      feedback:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem i",
    },
  ],
};

const myStoreHeader = document.getElementById("myStoreHeader")
myStoreHeader.innerHTML = getHeader(await homePageData)


// features PRODUCTS
const featuresDiv = document.getElementById("features");
MyStore.features.map(
  (featuresItem) =>
    (featuresDiv.innerHTML += featuredProductsDataComponents(featuresItem))
);

// Banner 2
// tags
const banner_2_tag_1 = document.getElementById("banner-2-tag-1");
banner_2_tag_1.innerText = MyStore.Banner_2.tag_1;
const banner_2_tag_2 = document.getElementById("banner-2-tag-2");
banner_2_tag_2.innerText = MyStore.Banner_2.tag_2;
// img name
const banner_2_name = document.getElementById("banner-2-name");
banner_2_name.innerText = MyStore.Banner_2.name;
// banner-2-button
const banner_2_button = document.getElementById("banner-2-button");
banner_2_button.innerText = `Shop${MyStore.Banner_2.button} `;
// Description
const banner_2_desc = document.getElementById("banner-2-desc");
banner_2_desc.innerText = `Shop${MyStore.Banner_2.desc} `;
// banner-2-img src
const banner_2_img = document.getElementById("banner-2-img");
banner_2_img.src = MyStore.Banner_2.img;
banner_2_img.alt = MyStore.Banner_2.name;


const card = document.getElementById("best-seller-cards");
storeProducts.map(
  (product) => (card.innerHTML += productCards(product))
);

// TESTIMONISALS
const testimonials = document.getElementById("testimonials");
MyStore.testimonials.map(
  (testimonial) => (testimonials.innerHTML += testimonialComponent(testimonial))
);
