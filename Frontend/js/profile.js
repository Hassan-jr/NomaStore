

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
    Phone : "+254725151165",
    Address : "Chiromo",
    City : "Nairobi",
    Password: "123456"
 }
 
 const inputs = document.querySelectorAll('.profileinput');
 const editBtns = document.querySelectorAll('.edit-btn');
 const submitBtn = document.querySelector('#submit-btn');
 
 // Populate input fields with user data
 inputs[0].value = '';
 inputs[1].value = User.Firstname;
 inputs[2].value = User.Lastname;
 inputs[3].value = User.Phone;
 inputs[4].value = User.Address;
 inputs[5].value = User.City;
 inputs[6].value = User.Password;
 
 // Add event listener to edit buttons
 editBtns.forEach((btn) => {
   btn.addEventListener('click', () => {
     enableEdit(btn.previousElementSibling);
   });
 });
 
 // Function to enable editing of input fields
 function enableEdit(input) {
   input.disabled = false;
//    input.focus();
   submitBtn.style.display = 'block';
 }
 
 // Add event listener to form to check for changes
 const form = document.querySelector('.form-container');
 form.addEventListener('input', () => {
   submitBtn.style.display = 'block';
 });
 

 // Add event listener to submit button
submitBtn.addEventListener('click', () => {
    const data = {
      profileIMG: inputs[0].value,
      Firstname: inputs[1].value,
      Lastname: inputs[2].value,
      Phone: inputs[3].value,
      Address: inputs[4].value,
      City: inputs[5].value,
      Password: inputs[6].value,
    };
    
    console.log(data);
  });

}

export {
    profileHMTL,
    ProfileJS,
}