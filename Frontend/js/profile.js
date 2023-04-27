
// Get the pathname of the current URL
var path = window.location.pathname;
// Extract the file name from the path
var pageName = path.split('/').pop();
console.log("Page is ", pageName);
const dashboardUrl = pageName === "index.html" ? "./pages/dashboard.html" : "./dashboard.html"
const createStoreUrl = pageName === "index.html" ? "./pages/createStore.html" : "./createStore.html"
const cartUrl =  pageName === "index.html" ? "./pages/cart.html" : "./cart.html"

const uri = "http://localhost:4000/users"
// Update a user
const updateUser = async(id, data)=> {
  return fetch(`${uri}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(async(response) => await response.json())
    .catch(error => console.log(error));
}

// Delete Account
async function deleteUser(userId) {
  await fetch(`${uri}/${userId}`, {
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


function profileHMTL(userData){
    return `
    <div class="form-container">
        <div class="form-field profileIMGSection">
          <img id="profile-img" class="profile-img" src=${userData?.profileIMG} alt="Profile Image">
          <div>
          <input class="profileinput" id="profile-img-input" type="file" accept="image/*" disabled>
          <button id="profile-img-btn" class="edit-btn" ><i class="fa fa-pencil" aria-hidden="true"></i></button>
          </div>
        </div>
        <label class="profileinputtitle" >First Name</label>
        <div class="form-field">
          <input class="profileinput" id="firstname-input" type="text"  disabled>
          <button id="firstname-btn" class="edit-btn" ><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        <label class="profileinputtitle" >Last Name</label>
        <div class="form-field">
          <input class="profileinput" id="lastname-input" type="text"  disabled>
          <button id="lastname-btn" class="edit-btn"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        <label class="profileinputtitle" >Email</label>
        <div class="form-field">
          <input class="profileinput" id="email-input" type="text"  disabled>
          <button id="email-btn" class="edit-btn"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        <label class="profileinputtitle" >Phone Number</label>
        <div class="form-field">
          <input class="profileinput" id="phone-input" type="text"  disabled>
          <button id="phone-btn" class="edit-btn" ><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        <label class="profileinputtitle" >Address</label>
        <div class="form-field">
          <input class="profileinput" id="address-input" type="text" disabled>
          <button id="address-btn" class="edit-btn" ><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        <label class="profileinputtitle" >City</label>
        <div class="form-field">
          <input class="profileinput" id="city-input" type="text" disabled>
          <button id="city-btn" class="edit-btn" ><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        <label class="profileinputtitle" >Password</label>
        <div class="form-field">
          <input class="profileinput" id="password-input" type="password"  disabled>
          <button id="password-btn" class="edit-btn" ><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        <button id="submit-btn" class="submit-btn" style="display:none">Save</button>
      </div>
      <hr>
      <div >
      <p  class="profilebottom"><a href=${cartUrl}> Go to Cart</a></p>
      ${userData.HasStore? `<p class="profilebottom"><a href=${dashboardUrl}>Go to Store</a></p>` : `<p class="profilebottom"><a href=${createStoreUrl}>Create Store</a></p>`}
      <p id="logout" class="profilebottom">Logout</p>
      <p id="deleteUser" class="profilebottom">Delete Account</p>
      </div>
    `
}

function ProfileJS(userData){
const User = {
    profileIMG: "https://www.hassanjr.com/static/media/profile.b5b3138ff8c65c7bdf84.png",
    Firstname : userData.Firstname,
    Lastname : userData.Lastname,
    Email: userData.Email,
    Phone : userData.Phone,
    Address : userData.Address,
    City : userData.City,
    Password: userData.Password
 }
 const inputs = document.querySelectorAll('.profileinput');
 const editBtns = document.querySelectorAll('.edit-btn');
 const submitBtn = document.querySelectorAll('#submit-btn');
 const logout = document.getElementById("logout")
 const deleteAccount = document.getElementById("deleteUser")

//  Logout
logout.addEventListener("click", ()=>{
  localStorage.removeItem('userID') 
  location.reload()
})

// Delete Account
deleteAccount.addEventListener("click", ()=>{
  deleteUser(userData._id)
})
 
 
 // Populate input fields with user data
 inputs[0].value = '';
 inputs[1].value = User.Firstname;
 inputs[2].value = User.Lastname;
 inputs[3].value = User.Email;
 inputs[4].value = User.Phone;
 inputs[5].value = User.Address;
 inputs[6].value = User.City;
 inputs[7].value = User.Password;
 if(inputs.length > 8){
 inputs[8].value = '';
 inputs[9].value = User.Firstname;
 inputs[10].value = User.Lastname;
 inputs[11].value = User.Email;
 inputs[12].value = User.Phone;
 inputs[13].value = User.Address;
 inputs[14].value = User.City;
 inputs[15].value = User.Password;
 }

 
 // Add event listener to edit buttons
 editBtns.forEach((btn) => {
   btn.addEventListener('click', () => {
     enableEdit(btn.previousElementSibling);
   });
 });

 
 
 // Function to enable editing of input fields
 function enableEdit(input) {
   input.disabled = false;
  //  input.focus();
   input.style.border =' 1px solid #f02d35'
   submitBtn[0].style.display = 'block';
// For the dashborad since we are calling it twice ( nav and dashboard)
   if(inputs.length >8){
     submitBtn[1].style.display = 'block';
   }
 }
 
 // Add event listener to form to check for changes
 const form = document.querySelector('.form-container');
 form.addEventListener('input', () => {
    submitBtn[0].style.display = 'block';
   // For the dashborad since we are calling it twice ( nav and dashboard)
   if(inputs.length > 8){
    submitBtn[1].style.display = 'block';
   }
 });
 

 // Add event listener to submit button
submitBtn[0].addEventListener('click', async() => {
    // Get the profileImage and read it
    let profileImageUpload = document.getElementById("profile-img-input").files[0];
    let profilePic
    const reader = new FileReader();

    let data;
    // send the data to the backend after sending it
    reader.onload = async(e) => {
      profilePic = e.target.result;
      
       data = {
        profileIMG: profilePic,
        Firstname: inputs[1].value,
        Lastname: inputs[2].value,
        Email : inputs[3].value,
        Phone: inputs[4].value,
        Address: inputs[5].value,
        City: inputs[6].value,
        Password: inputs[7].value,
      };
      await updateUser(userData._id, data)
      console.log("Updated user from image section",data);
  }
  data = {
    profileIMG: profilePic,
    Firstname: inputs[1].value,
    Lastname: inputs[2].value,
    Email : inputs[3].value,
    Phone: inputs[4].value,
    Address: inputs[5].value,
    City: inputs[6].value,
    Password: inputs[7].value,
  };
  profileImageUpload ? reader.readAsDataURL(profileImageUpload): updateUser(userData._id, data);  
  });

  // For the dashborad since we are calling it twice ( nav and dashboard)
  if(inputs.length > 8){
   submitBtn[1] && submitBtn[1].addEventListener('click', () => {
    // Get the profileImage and read it
    let profileImageUpload = document.querySelectorAll("#profile-img-input")[1].files[0];
    let profilePic
    const reader = new FileReader();
    
    let data;
    // send the data to the backend after sending it
    reader.onload = (e) => {
      profilePic = e.target.result;
      
      data = {
        profileIMG: profilePic,
        Firstname: inputs[9].value,
        Lastname: inputs[10].value,
        Email : inputs[11].value,
        Phone: inputs[12].value,
        Address: inputs[13].value,
        City: inputs[14].value,
        Password: inputs[15].value,
      };

      console.log(data); 
      // Send to the backend
  }

  // If no image
  data = {
    profileIMG: profilePic,
    Firstname: inputs[9].value,
    Lastname: inputs[10].value,
    Email : inputs[11].value,
    Phone: inputs[12].value,
    Address: inputs[13].value,
    City: inputs[14].value,
    Password: inputs[15].value,
  };
  
  profileImageUpload ? reader.readAsDataURL(profileImageUpload) :  updateUser(userData._id, data); // send to the backend here
   
  });
  }

}




export {
    profileHMTL,
    ProfileJS,
}