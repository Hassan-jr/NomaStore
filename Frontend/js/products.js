// Make the nav bar responsive
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
 navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('toggle_nav');
  });

//   Products to be changed later
const products = [
  {
    name: "Nike Shoes",
    price: "Ksh:450",
    image: "../assets/sneaker.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
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


// fuction to generate the html file
function generateProductCard(product) {
  return `
    <div class="shopping-card">
      <a href="individualCard.html" class="card">
        <img src="${product.image}" alt="Product Image" class="product-image">
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
              ${product.ratings.map(rating => `<i class="material-icons ">${rating.rating}</i>`).join('')}
              <span class="product-rating-count">${product.totalRatings}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  `;
}

// Loops throug the product array to create a product for each item
function generateProductCards() {
  const productCardsContainer = document.getElementById('product-cards');
  let productCardsHTML = ''; // collects the html card to be displayed
  for (const product of products) {
    productCardsHTML += generateProductCard(product);
  }
  productCardsContainer.innerHTML = productCardsHTML;
}


generateProductCards();
