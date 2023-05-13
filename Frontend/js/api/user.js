//const uri = "http://localhost:4000/users"
const uri = "https://nomastore.onrender.com/users"


// Get all products array
const getUsers = async()=>{
   const result =  await fetch(uri)
    .then(res => res.json())
    .then(data => data)
    .catch(rejected => {
        console.log(rejected);
    }); 
    return result
}

// get a single user
const getOneUserData = async(userID)=>{
  const result = userID && await fetch(`${uri}/${userID}`)
   .then(res => res.json())
   .then(data => data)
   .catch(rejected => {
     console.log(rejected);
   }); 
   return result
}



// Update a product
const updateUser = async(id, data)=> {
   return id && await fetch(`${uri}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .catch(error => console.log(error));
}

// Delete Product
const deletUser = async(id) =>{
  console.log("Deleting", id);
 return await fetch(`${uri}/${id}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    alert('Account Deleted Successfuly');
    localStorage.removeItem('userID') 
    console.log(`User with ID ${userId} deleted successfully!`);
  })
  .catch(error => {
    console.error(`Error deleting user with ID ${userId}: ${error}`);
  });
}





export {getUsers,updateUser,deletUser, getOneUserData}