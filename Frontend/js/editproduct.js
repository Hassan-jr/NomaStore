import { getProducts, updateProduct, addproduct } from "./api/products.js";
import { data2 } from "./data2.js";


async function editCreateProductFunction(id, seller) {
  // const urlParams = new URLSearchParams(window.location.search);
  // const id = urlParams.get("id");
  console.log("The id to be edited is", id);
let product;
if(id === "new"){
   product = {
    category: '',
    title: '',
    price: 0,
    images: [ ],
    description:'',
  };
}else{
  const allProducts = await getProducts()
  product = await allProducts.find((item) => item._id == id);
}


console.log("The product is ", product);

  // Get DOM elements
  const pageTitle = document.getElementById("editnewproducttitle")
  pageTitle.innerHTML = id === "new" ? `Add New Product` : `Edit Product (${id})`;
  const form = document.getElementById("product-form");
  const imagesContainer = document.getElementById("images-container");
  const addImageBtn = document.getElementById("add-image-btn");




  // Display product data on the form
  form.elements["category"].value = product.category;
  form.elements["title"].value = product.title;
  form.elements["price"].value = product.price.toFixed(2);
  form.elements["description"].value = product.description;
  let newimages; // track the total images

  function displayImages() {
    // Clear the images container before displaying the updated images
    imagesContainer.innerHTML = "";

    // Loop through the images array and display each image
    newimages = product.images;
    product.images.forEach((imgSrc) => {
      const imgWrapper = document.createElement("div");
      imgWrapper.classList.add("image-wrapper");

      // Create the image element and set its source
      const img = document.createElement("img");
      img.src = imgSrc;

      // Create the remove button for the image
      const removeBtn = document.createElement("button");
      removeBtn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
      removeBtn.classList.add("btn", "btn-danger");
      removeBtn.addEventListener("click", () => {
        // Remove the image from the images array and display the updated images
        const index = product.images.indexOf(imgSrc);
        product.images.splice(index, 1);
        displayImages();
      });

      // Add the image and remove button to the wrapper div and append it to the images container
      imgWrapper.appendChild(img);
      imgWrapper.appendChild(removeBtn);
      imagesContainer.appendChild(imgWrapper);
    });
  }

  displayImages();

  // Handle adding new images
  addImageBtn.addEventListener("click", () => {
    const fileInput = document.getElementById("image-input");
    const files = fileInput.files;

    // Loop through the selected files and add them to the images array
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        // Create a new image element and set its source to the uploaded file
        const img = document.createElement("img");
        img.src = e.target.result;

        // Add the image to the images array and display it on the page
        product.images.push(img.src);
        displayImages();
      };

      // Read the uploaded file as a data URL
      reader.readAsDataURL(file);
    }
  });

  // Handle form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let updatedProduct;
    if(id === "new"){
      updatedProduct = {
        category: form.elements["category"].value,
        title: form.elements["title"].value,
        price: parseFloat(form.elements["price"].value),
        images: newimages,
        description:  form.elements["description"].value,
        rating: "0.0",
        reviews: 0,
        seller: seller,
        brand : seller
      };
    }else{

     updatedProduct = {
      category: form.elements["category"].value,
      title: form.elements["title"].value,
      price: parseFloat(form.elements["price"].value),
      images: newimages,
      description: form.elements["description"].value,
    };
  }
     // Send updated product data to the backend
    console.log("The updated pRODUCT IS", updatedProduct);
    if(id === "new"){
      addproduct(updatedProduct)
    }else{
      updateProduct(id, updatedProduct)
    }

    id === "new" ? alert("Product Added successfully") : alert("Product Edited successfully");
    // reload the page after sending the data to the backend
    window.location.reload()
  });
}

export { editCreateProductFunction };
