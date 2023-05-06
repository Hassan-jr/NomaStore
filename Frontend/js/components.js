import { deleteSub, deleteStore, updateStore } from "./api/store.js";
import { getOneUserData } from "./api/user.js";

const nomaStoreId = "64450f72b3d8f9a409a26d49"
// **************************************** HEADER FOR HOME PAGE **********************
function getHeader(headerData){

  // Split the two titles into 2 each for good styling
  const words = headerData?.title1.split(' ');
  const half1 = Math.ceil(words.length / 2);
  const Title1firstHalf = words.slice(0, half1).join(' ');
  const title1secondHalf = words.slice(half1).join(' ');

  // split title2
  const words2 = headerData?.title2.split(' ');
  const half2 = Math.ceil(words2.length / 2);
  const Title2firstHalf = words2.slice(0, half2).join(' ');
  const title2secondHalf = words2.slice(half2).join(' ');

  // split description
  const words3 = headerData?.description.split(' ');
  const half3 = Math.ceil(words3.length / 2);
  const description1 = words3.slice(0, half3).join(' ');
  const description2 = words3.slice(half3).join(' ');

  return`
  <div class="header" style="background-image: url(${headerData?.backgroundIMG ? headerData?.imgURL : ''}); background-repeat: no-repeat; background-size: cover; background-position: center;">
       <!-- Titel -->
       <div class="header_left">
        <span class="main_title">
            <h1>${Title1firstHalf} <span class="blue">${title1secondHalf}</span>  </h1>
            <h1>${Title2firstHalf} <span class="blue">${title2secondHalf}</span> </h1>
        </span>
        <!-- DES -->
        <span class="header_desc">
            <p>${description1}</p>
            <p>${description2}</p>   
            <!-- <p> Find Everything You Need in One Place, from Fashion and Home Goods to Electronics and More!</p> -->
        </span>
        <!-- Button -->
        <span class="btn">
            <button class="header_btn">Get Started</button>
            <button class="header_btn">Shop Now</button>
        </span>
        
       </div>
       <!-- Image -->
       <div class="header_images">
        ${ !headerData?.backgroundIMG ? 
        `<img class="header_img" src=${headerData?.imgURL} alt=${headerData?.title1}>` : ''
          }
       </div>
    </div>
  `
}

// ****************************************************
function productCards(product, dashboard=false){
    return `
    <div>
    <div class="shopping-card"  >
    <div id=${product._id} onclick= ${!dashboard && "handleCardClick(event)"}>
      <a href="#" class="cardGlobal" >
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
         <p id=${product._id} class="editProduct">Edit</p>
         <p id=${product._id}  class="deleteProduct">Delete</p>
      </div> ` : ``
      }
      
    </div>

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


// ************************************** FEATURED PRODUCTS CARD FOR HOME PAGES *********************
function featuredProductsDataComponents(product){
    return`
    <div  class="img">
        <img src=${product.imgURL} alt="Features img 4">
        <div class="f-hover">${product.category}</div>
      </div>
    `
}


// ********************************* EDIT OR CREATE PRODUCT COMPONENT *****************************
function editCreateProductHTML(){
  return `
  <div class="container">
      <h1 id="editnewproducttitle">Edit | Create Product</h1>
      <form id="product-form">
        <div>
          <label for="category">Category:</label>
          <input type="text" id="category" name="category" required />
        </div>
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label for="price">Price:</label>
          <input type="number" id="price" name="price" step="0.01" required />
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <div>
          <label for="images">Images:</label>
          <div id="images-container">
            <!-- Images will be dynamically added here -->
          </div>
          <div class="addImageDiv">
            <button type="button" id="add-image-btn">Add Image</button>
            <input type="file" id="image-input" name="images" accept="image/*" multiple>
          </div>
          


        </div>
        <button class="submit" type="submit">Save Changes</button>
      </form>
    </div>
  `
}

// ************************************* ORDERS COMPONENTS **********************************
function getOrdersHTML(data2,isInOrdersPage=false){
  return`
  <div class="orders-container">
                    <div class="orders-header">
                        <h1 class="recent-orders">Recent Orders</h1>
                        ${!isInOrdersPage ? '<button class="view">View All</button>' : ''}
                    </div>

                    <div class="orders-body">
                        <div class="orders-topic-heading">
                            <h3 class="t-op Products-title-orders">Products</h3>
                            <h3 class="t-op">Quantity</h3>
                            <h3 class="t-op">Total Price</h3>
                            <h3 class="t-op">Address</h3>
                            ${ isInOrdersPage ? `<h3 class="t-op">Delivered</h3>` : ""}
                            
                        </div>

                        <div id="items" class="items">
                            <!-- FEED THE ITEMS FROM JS FILE -->
                            ${data2.map((order, index) => {
                              const checked = order.delivered == true ? 'checked' : 'unchecked'
                              return  `
	                            <div  class="item1">
	                              <div class="item-product">
	                              	<img src=${order.images[0]} alt=${order.title}>
		                              <div>
		                             	<p class="item-product-title">${order.title}</p>
		                              <small>Price: $ ${order.price}</small><br>
	                            	</div>
	                              </div>
	                               <h3 class="t-op-nextlvl" >${order.qty}</h3>
	                               <h3 class="t-op-nextlvl" >$ ${(order.price * order.qty).toFixed(2)}</h3>
                                 <div class="userAddress">
                                 <p>${order.user?.Firstname} ${order.user?.Lastname}</p>
                                 <p>${order.user?.Email} </p>
                                 <p>${order.user?.Address} ${order.user?.City}</p>
                                 </div>
	                               ${ isInOrdersPage ? ` <label   class="switch">
                                  <input id="${index}" class="OrderStatus"  type="checkbox"  ${checked}>
                                  <span class="slider round"></span>
                                 </label>` : ""}
                                
                              </div>`
                                }).join('')}   
                        </div>
                    </div>
                </div>
  `
}

function updateOrdersState(data, id){
  console.log("Old order", data);
  const statusBtns = document.querySelectorAll(".OrderStatus")
  for(let j=0; j<statusBtns.length; j++){
    statusBtns[j].addEventListener("click", (e)=>{
      const orderInex = e.currentTarget.id
      const order = data[orderInex].delivered ? {...data[orderInex], delivered: !data[orderInex].delivered } : {...data[orderInex], delivered: true }
      data[orderInex] = order
      console.log("New Order", data);
      updateStore(id, {Orders: data})
      window.location.reload()
    })
  }
}

// ********************************************* Subscribers Page *************************
function subsHTML(subs){
  return `<div>
          <h1 class="recent-orders">Subscribers Page</h1>
        <div>
  ${
    subs.map(sub=>(`<div class="subs">
      <h3 class="sub">${sub}</h3>
      <i id=${sub} class="fa fa-times subIcon" aria-hidden="true"  title="Remove Subscriber"></i>
    </div>`)).join()
  }
  </div>
  </div>`
}
// ******************************************** Delete Subscriber ***********************
function delsub(){
  const delbtns = document.querySelectorAll(".subIcon")
  for(let i=0; i<delbtns.length; i++){
    delbtns[i].addEventListener("click", async(e)=>{
      const id= e.currentTarget.id
      const data = {
        subscriber : id
    }
    await deleteSub(nomaStoreId, data)
    window.location.reload()
    })
  }
}
// *************************************** User Profile Card *******************************
function getUserProfileCard(userData){
  return `<div class="userProfileCard">
  <div class="headerProfile">
      <img class="profilebackgroundIMG" src="https://media.istockphoto.com/id/1403278751/photo/abstract-particle-background.jpg?b=1&s=170667a&w=0&k=20&c=BdJSofDWBiySpZe_-SgecLnt9MB5ZBp1FtCIGaNASB8=" alt="background">
      <img class="userImageProfile" src=${userData.profileIMG} alt="user">
  </div>
  <div class="userDetails">
      <div class="details">
          <label>First Name</label>
          <p>${userData.Firstname}</p>
      </div>
      <div class="details">
          <label>Last Name</label>
          <p>${userData.Lastname}</p>
      </div>
      <div class="details">
          <label>Email</label>
          <p>${userData.Email}</p>
      </div>
  </div>
  <div class="userDetails">
      <div class="details">
          <label>Phone Number</label>
          <p>${userData.Phone}</p>
      </div>
      <div class="details">
          <label>Address</label>
          <p>${userData.Address}</p>
      </div>
      <div class="details">
          <label>City</label>
          <p>${userData.City}</p>
      </div>
  </div>

 </div>`
}

// *********************************************** Store HTML ***********************
function getStoreHtml(store){
 return  store.ShopName == "Noma" ? "" : `<div class="subs">
  <h3 class="sub">${store.ShopName}</h3>
  <i id=${store._id} class="fa fa-times delStore" aria-hidden="true"  title="Remove Subscriber"></i>
</div>`
}

// *************************************** Delte Store **************************
function delStore(){
  const delbtns = document.querySelectorAll(".delStore")
  for(let i=0; i<delbtns.length; i++){
    delbtns[i].addEventListener("click", async(e)=>{
      const id= e.currentTarget.id
      deleteStore(id)
      window.location.reload()
    })
  }
}

export {productCards,
    testimonialComponent,
    featuredProductsDataComponents,
    getHeader,
    editCreateProductHTML,
    getOrdersHTML,
    getUserProfileCard,
    subsHTML,
    delsub,
    getStoreHtml,
    delStore,
    updateOrdersState
}