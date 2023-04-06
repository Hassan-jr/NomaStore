// Get DOM elements
const form = document.getElementById('product-form');
const imagesContainer = document.getElementById('images-container');
const addImageBtn = document.getElementById('add-image-btn');

// Display the initial data
const product = {
  category: 'Laptops',
  title: 'TCL A30 Unlocked Smartphone with 5.5" HD+ Display',
  price: 99.99,
  images: [
    'https://m.media-amazon.com/images/I/41NCMKrEfQL._SL1500_.jpg',
    'https://m.media-amazon.com/images/I/41fmqrRCFkL._SL1500_.jpg',
    'https://m.media-amazon.com/images/I/31MTUiyWYnL._SL1500_.jpg',
    'https://m.media-amazon.com/images/I/51iDuHOxy-L._SL1500_.jpg',
    'https://m.media-amazon.com/images/I/51Yu8mQ411L._SL1500_.jpg',
    'https://m.media-amazon.com/images/I/41crbCM3GCL._SL1500_.jpg',
    'https://m.media-amazon.com/images/I/41blIx3IXpL._SL1500_.jpg',
  ],
  description:
    'About this item Compatible with the AT&T, T-Mobile and Verizon LTE networks. This device has been certified for use on the Verizon LTE network, if your device is not receiving messages or experiences an error when making phone calls on Verizon, your account may need to be provisioned to support “CDMA-less” devices. To do this, please contact Verizon’s technical support team or your account’s business representative for assistance. This device is not compatible with CDMA networks (such as, Sprint). Vivid Display: The 5.5" HD+ Display delivers a clear visual experience that is gentle on the eyes. TCL A30 smartphone brings you vivid and seamless visuals with a 91% (18:9) screen-to-body ratio. Face Unlock and Brilliant Cameras: The TCL A30 unlocked android smartphone can safeguard your privacy and safety with face unlock and pattern unlock. Besides, the face key unlock helps you conveniently unlock your phone at a glance. And the A30 unlocked smartphone can capture clear shots with decent a 8MP rear camera and a 5MP front facing camera. Keep More Things You Love: The TCL A30 Smartphone can keep more photos, videos, apps, and music with up to 32GB of internal memory, expandable up to an additional 512GB storage (microSD not included). MediaTek MT6762, Octa-core processor, and 3GB of RAM for a smooth performance. Reliable Battery: The mighty 3,000mAh battery can promise a normal use of all day time. Also, the unlocked android phone offers a long standby time (2G 560H / 3G 530H / 4G 260H) and long talking time (2G 30H / 3G 19H / 4G 15H).',
};

// Display product data on the form
form.elements['category'].value = product.category;
form.elements['title'].value = product.title;
form.elements['price'].value = product.price.toFixed(2);
// product.images.forEach((imgSrc) => {
// const img = document.createElement('img');
// img.setAttribute('src', imgSrc);
// img.classList.add('product-img');
// imagesContainer.appendChild(img);
// });
// Display images

function displayImages() {
    // Clear the images container before displaying the updated images
    imagesContainer.innerHTML = '';
  
    // Loop through the images array and display each image
    product.images.forEach((imgSrc) => {
      const imgWrapper = document.createElement('div');
      imgWrapper.classList.add('image-wrapper');
  
      // Create the image element and set its source
      const img = document.createElement('img');
      img.src = imgSrc;
  
      // Create the remove button for the image
      const removeBtn = document.createElement('button');
      removeBtn.innerText = 'Remove';
      removeBtn.classList.add('btn', 'btn-danger');
      removeBtn.addEventListener('click', () => {
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
  

product.images.forEach((imgSrc) => {
    displayImages()
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('image-wrapper');
  
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = product.title;
    imgWrapper.appendChild(img);
  
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.classList.add('btn', 'btn-danger', 'remove-image-btn');
    removeBtn.addEventListener('click', () => {
      imgWrapper.remove();
    });
    imgWrapper.appendChild(removeBtn);
  
    imagesContainer.appendChild(imgWrapper);
  });
  

// Handle adding new images
// addImageBtn.addEventListener('click', () => {
//     const fileInput = document.getElementById('image-input');
//     const files = fileInput.files;
    
//     // Loop through the selected files and add them to the images array
//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];
//       const reader = new FileReader();
  
//       reader.onload = (e) => {
//         // Create a new image element and set its source to the uploaded file
//         const img = document.createElement('img');
//         img.src = e.target.result;
//             console.log("IMAGE SRC", img.src);
//         // Add the image to the images array and display it on the page
//         product.images.push(img.src);
//         displayImages();
//       };
  
//       // Read the uploaded file as a data URL
//       reader.readAsDataURL(file);
//       console.log("IMAGE",  reader.readAsDataURL(file));
//     }

//     displayImages()
//   });

addImageBtn.addEventListener('click', () => {
    const fileInput = document.getElementById('image-input');
    const files = fileInput.files;
  
    // Loop through the selected files and add them to the images array
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        // Create a new image element and set its source to the uploaded file
        const img = document.createElement('img');
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
form.addEventListener('submit', (event) => {
event.preventDefault();
const updatedProduct = {
category: form.elements['category'].value,
title: form.elements['title'].value,
price: parseFloat(form.elements['price'].value),
images: [],
description: product.description,
};

const inputs = imagesContainer.querySelectorAll('input');
inputs.forEach((input) => {
const value = input.value.trim();
if (value !== '') {
updatedProduct.images.push(value);
}
});

console.log(updatedProduct);
// Send updated product data to the backend
// ...
});