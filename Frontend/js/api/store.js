const uri = "http://localhost:4000/stores"
//const uri = "https://nomastore.onrender.com/stores"


// Get all products array
const getStores = async()=>{
    const result =  await fetch(uri)
     .then(res => res.json())
     .then(data => data)
     .catch(rejected => {
         console.log(rejected);
     }); 
     return result
 }
 
//  Post ( Crete anew store)
const createStore = async (storeName, userID)=>{
    const data = {ShopName : storeName}

   fetch(`${uri}/${userID}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(async(response) => {
    if (response.ok) {
         window.location.href = './dashboard.html'; // Redirect to dashboard page

    } else {
      alert('A Store with That name already exists');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Sign up failed. Please try again.');
  });
}
// Put (Update Store)
// Update a product
const updateStore = async(id, data)=> {
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

// Add sub
const addSubs = async(id, data)=> {
  return fetch(`${uri}/subs/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .catch(error => console.error(error));
}

// Delete sub
async function deleteSub(storeID, data) {
  await fetch(`${uri}/subs/${storeID}`, {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    alert('Subscriber Deleted Successfuly');
    console.log(`Subscriber deleted successfully!`);
  })
  .catch(error => {
    console.error(`Error deleting Subscriber: ${error}`);
  });
}

// Delete Store
async function deleteStore(storeID) {
    await fetch(`${uri}/${storeID}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      alert('Store Deleted Successfuly');
      console.log(`User with ID ${userId} deleted successfully!`);
    })
    .catch(error => {
      console.error(`Error deleting user with ID ${userId}: ${error}`);
    });
  }

export {createStore, deleteStore, getStores, updateStore, addSubs,deleteSub}