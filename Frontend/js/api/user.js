const uri = "http://localhost:4000/users"

// Get all products array
const getUsers = async()=>{
   const result =  fetch(uri)
    .then(res => res.json())
    .then(data => data)
    .catch(rejected => {
        console.log(rejected);
    }); 
    return result
}



// Update a product
const updateUser = async(id, data)=> {
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
const deletUser = async(id) =>{
  return fetch(`${uri}/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .catch(error => console.error(error));
}





export {getUsers,updateUser,deletUser}