import { getOneUserData } from "./api/user.js";
import { getStores } from "./api/store.js";
import {
  productCards,
  testimonialComponent,
  featuredProductsDataComponents,
  getHeader,
} from "./components.js";


const loader = document.getElementById("loader");
loader.style.display = "block";
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
 loader.style.display = "none";
}else{
// get the store
const stores = await getStores()
mystore = await stores.find(storeItem=>storeItem.ShopName == userData.StoreName)
loader.style.display = "none";
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
  testimonials:   [
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
