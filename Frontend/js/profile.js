

function profileHMTL(){
    return `
    <div class="form-container">
        <div class="form-field profileIMGSection">
          <img id="profile-img" class="profile-img" src="https://www.hassanjr.com/static/media/profile.b5b3138ff8c65c7bdf84.png" alt="Profile Image">
          <div>
          <input class="profileinput" id="profile-img-input" type="file" accept="image/*" disabled>
          <button id="profile-img-btn" class="edit-btn" ><i class="fa fa-pencil" aria-hidden="true"></i></button>
          </div>
        </div>
        <div class="form-field">
          <input class="profileinput" id="firstname-input" type="text"  disabled>
          <button id="firstname-btn" class="edit-btn" ><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        <div class="form-field">
          <input class="profileinput" id="lastname-input" type="text"  disabled>
          <button id="lastname-btn" class="edit-btn"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        <div class="form-field">
          <input class="profileinput" id="email-input" type="text"  disabled>
          <button id="email-btn" class="edit-btn"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        <div class="form-field">
          <input class="profileinput" id="phone-input" type="text"  disabled>
          <button id="phone-btn" class="edit-btn" ><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        <div class="form-field">
          <input class="profileinput" id="address-input" type="text" disabled>
          <button id="address-btn" class="edit-btn" ><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        <div class="form-field">
          <input class="profileinput" id="city-input" type="text" disabled>
          <button id="city-btn" class="edit-btn" ><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        <div class="form-field">
          <input class="profileinput" id="password-input" type="password"  disabled>
          <button id="password-btn" class="edit-btn" ><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        <button id="submit-btn" class="submit-btn" style="display:none">Save</button>
      </div>
    `
}

function ProfileJS(){
const User = {
    profileIMG: "https://www.hassanjr.com/static/media/profile.b5b3138ff8c65c7bdf84.png",
    Firstname : "Abdi",
    Lastname : "Hassan",
    Email: "abdiladifhassan115@gmail.com",
    Phone : "+254725151165",
    Address : "Chiromo",
    City : "Nairobi",
    Password: "123456"
 }
 const inputs = document.querySelectorAll('.profileinput');
 const editBtns = document.querySelectorAll('.edit-btn');
 const submitBtn = document.querySelectorAll('#submit-btn');
 
 
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
    reader.onload = (e) => {
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
      
      console.log(data);
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
  profileImageUpload ? reader.readAsDataURL(profileImageUpload): console.log(data);
    
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
  
  profileImageUpload ? reader.readAsDataURL(profileImageUpload) :  console.log(data); // send to the backend here
 
    
  });
  }

}




export {
    profileHMTL,
    ProfileJS,
}