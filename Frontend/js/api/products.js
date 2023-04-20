const uri = "http://localhost:4000/products/"
const getProducts = async()=>{
   const result =  fetch(uri)
    .then(res => res.json())
    .then(data => data)
    .catch(rejected => {
        console.log(rejected);
    }); 
    return result
}

// getProducts()

export {getProducts}