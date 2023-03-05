import { data } from "./data.js";
//   Products to be changed later
const products = [
  {
    name: "Nike Shoes",
    price: "Ksh:450",
    image: "../assets/sneaker.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  //  From here
    stars_5: 10,
    stars_4: 10,
    stars_3: 10,
    stars_2: 10,
    stars_1: 10,
    // here
    ratings: [
      { rating: "star" },
      { rating: "star"},
      { rating: "star" },
      { rating: "star"},
      { rating: "star_half" }
    ],
    totalRatings: "(120)",
    storeName: "Noma"
  },
  {
    name: "Nike Shoes",
    price: "Ksh:450",
    image: "../assets/sneaker.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    stars_5: 35,
    stars_4: 25,
    stars_3: 17,
    stars_2: 14,
    stars_1: 6,
    ratings: [
      { rating: "star" },
      { rating: "star"},
      { rating: "star" },
      { rating: "star"},
      { rating: "star_half" }
    ],
    totalRatings: "(120)",
    storeName: "Noma"
  },
  {
    name: "Nike Shoes",
    price: "Ksh:450",
    image: "../assets/sneaker.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    stars_5: 10,
    stars_4: 10,
    stars_3: 10,
    stars_2: 10,
    stars_1: 10,
    ratings: [
      { rating: "star" },
      { rating: "star"},
      { rating: "star" },
      { rating: "star"},
      { rating: "star_half" }
    ],
    totalRatings: "(120)",
    storeName: "Noma"
  },
  {
    name: "Nike Shoes",
    price: "Ksh:450",
    image: "../assets/sneaker.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    stars_5: 10,
    stars_4: 10,
    stars_3: 10,
    stars_2: 10,
    stars_1: 10,
    ratings: [
      { rating: "star" },
      { rating: "star"},
      { rating: "star" },
      { rating: "star"},
      { rating: "star_half" }
    ],
    totalRatings: "(120)",
    storeName: "Noma"
  },
  {
    name: "Nike Shoes",
    price: "Ksh:450",
    image: "../assets/sneaker.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    stars_5: 10,
    stars_4: 10,
    stars_3: 10,
    stars_2: 10,
    stars_1: 10,
    ratings: [
      { rating: "star" },
      { rating: "star"},
      { rating: "star" },
      { rating: "star"},
      { rating: "star_half" }
    ],
    totalRatings: "(120)",
    storeName: "Noma"
  },
  {
    name: "Nike Shoes",
    price: "Ksh:450",
    image: "../assets/sneaker.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    stars_5: 10,
    stars_4: 10,
    stars_3: 10,
    stars_2: 10,
    stars_1: 10,
    ratings: [
      { rating: "star" },
      { rating: "star"},
      { rating: "star" },
      { rating: "star"},
      { rating: "star_half" }
    ],
    totalRatings: "(120)",
    storeName: "Noma"
  },
  // add more products here
];
// rattings_2 : ((5*stars_5) + (4*stars_4)+(3*stars_3) + (2*stars_2) + (1*stars_1)/(stars_5 + stars_4 + stars_3 + stars_2 + stars_1)),
// totalRatings_2: ((stars_5 + stars_4 + stars_3 + stars_2 + stars_1)),
let rattings_2
let totalRatings_2
let pointsratting
const rate = [1,2,3,4,5]
// fuction to generate the html file
function generateProductCard(product) {
  return `
    <div class="shopping-card">
      <a href="individualCard.html" class="card">
        <img src="${product.imageurl}" alt="Product Image" class="product-image">
        <div class="product-details">
          <p class="store-name">Sold by: <span class="store_name2">${product.storeName}</span></p>
          <h2 class="product-name">${product.name}</h2>
          <p class="card_dec">${product.description}</p>
          <div class="line-break"></div>
          <div class="price_ratings">
            <div>
              <h3>${product.price}</h3>
            </div>
            <div class="product-rating">
               ${
                rattings_2 = ((5*product.stars_5) + (4*product.stars_4)+(3*product.stars_3) + (2*product.stars_2) + (1*product.stars_1))/(product.stars_5 + product.stars_4 + product.stars_3 + product.stars_2 + product.stars_1),
                console.log("rattings", rattings_2),
                pointsratting = Math.round(rattings_2),
                rate.map(i=> {
                  if(i<=rattings_2)
                    return `<i class="material-icons ">star</i>`
                  else if (pointsratting - rattings_2 != 0 )
                    return `<i class="material-icons ">star_half</i>`
                  else
                    return `<i class="material-icons ">star_outline</i>`
                 
                }).join('')
               }
              <span class="product-rating-count">${product.stars_5 + product.stars_4 + product.stars_3 + product.stars_2 + product.stars_1}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  `;
}

// product.ratings.map(rating => `<i class="material-icons ">${rating.rating}</i>`).join('')
// Loops throug the product array to create a product for each item
function generateProductCards() {
  const productCardsContainer = document.getElementById('product-cards');
  let productCardsHTML = ''; // collects the html card to be displayed
  for (const product of data) {
    productCardsHTML += generateProductCard(product);
  }
  productCardsContainer.innerHTML = productCardsHTML;
}


generateProductCards();
