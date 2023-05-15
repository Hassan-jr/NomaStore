const uri = "http://localhost:4000/products"
//const uri = "https://nomastore.onrender.com/products"

// Get all products array
const getProducts = async()=>{
   const result =  fetch(uri)
    .then(res => res.json())
    .then(data => data)
    .catch(rejected => {
        console.log(rejected);
    }); 
    return result
}

// CREATE OR ADD PRODUCTS
const  addproduct = async(data) =>{
  return fetch(uri, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .catch(error => console.error(error));
}


// Update a product
const updateProduct = async(id, data)=> {
  return fetch(`${uri}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .catch(error => console.error(error));
}

// Delete Product
const deleteProduct = async(id) =>{
  return fetch(`${uri}/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .catch(error => console.error(error));
}



function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

export {getProducts,addproduct,updateProduct,deleteProduct,shuffle}