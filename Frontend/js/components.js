// ****************************************************
function productCards(product, dashboard=false){
    return `
    <div class="shopping-card"  >
    <div id=${product._id} onclick= ${!dashboard && "handleCardClick(event)"}>
      <a href="#" class="card" >
        <img src="${product.images[0]}" alt="Product Image" class="product-image" >
        <div class="product-details">
          <p class="store-name"><span class="store_name2">${product.seller}</span></p>
          <p class="product-title" >${product.title}</p>
         <!-- <p class="card_dec">${product.description}</p> -->
          <div class="">
            <div>
              <h4 class="price">Price $${product.price}</h4>
            </div>
            
          </div>
        </div>
       </a>
    </div>

      <div class="bottom_ratings">
            <div class="product-rating ">
                <i class="material-icons ">star</i>
               <span class="product-rating-count">${product.rating}</span>
               <span class="product-total-rating-count">(${product.reviews})</span>
            </div>
            <button id=${product._id} class="btn-cart">+</button>
      </div>
      ${dashboard ?
      `<div class="product-btns">
         <p id=${product._id} onclick="EditProduct(event)" class="editProduct">Edit</p>
         <p id=${product._id} onclick="DeleteProduct(event)" class="deleteProduct">Delete</p>
      </div> ` : ``
      }
      
    </div>
    `
}

// ********************************** TESTIMONILAS ******************

function testimonialComponent(testimonial){
    return`
    <div class="testimonials">
    <img class="quotes" src=${`../assets/quotes.svg` || `../assets/quotes.svg`} alt="quotes">
    <p class="testimonials-feedback">${testimonial.feedback}</p>
    <div class="icons">
      <!-- ratings -->
      <i class="material-icons ">star</i>
      <i class="material-icons ">star</i>
      <i class="material-icons ">star</i>
      <i class="material-icons ">star</i>
      <i class="material-icons ">star</i>
    </div>
     <img class="testimonials-img" src=${testimonial.img} alt=${testimonial.name}>
     <p class="testimonials-name">${testimonial.name}</p>
  </div>
    `
}

function featuredProductsDataComponents(product){
    return`
    <div  class="img">
        <img src=${product.imgURL} alt="Features img 4">
        <div class="f-hover">${product.category}</div>
      </div>
    `
}


export {productCards,
    testimonialComponent,
    featuredProductsDataComponents
}