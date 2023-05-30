// local host uri 
//const uri = "http://localhost:4000/users"

// deployes
const uri = "https://nomastore.onrender.com/users"


//   Sign up page
const form = document.querySelector('#signup-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  // Get form data
  const Firstname = form.elements['first-name'].value;
  const Lastname = form.elements['last-name'].value;
  const Email = form.elements['email'].value;
  const Phone = form.elements['phone'].value;
  const Address = form.elements['address'].value;
  const City = form.elements['city'].value;
  const Password = form.elements['password'].value;
  const confirmPassword = form.elements['confirm-password'].value;

// Check if password and confirm password fields match
const passwordInput = form.elements['password'];
const confirmPasswordInput = form.elements['confirm-password'];

if (passwordInput.value !== confirmPasswordInput.value) {
  alert('Passwords do not match!');
  return;
}
  // Send form data to backend
  const data = {
    profileIMG : "",
    Firstname,
    Lastname,
    Email,
    Phone,
    Address,
    City,
    Password,
  };
// post the data

   fetch(uri, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(async(response) => {
    if (response.ok) {
      // alert('Sign up successful!');
         form.reset(); // Reset form
         localStorage.setItem('userID', JSON.stringify(await response.json()));
         window.location.href = '../index.html'; // Redirect to home page

    } else {
      alert('Sign up failed. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Sign up failed. Please try again.');
  });
 console.log(data);
});





// *************************************** loging ***********************
//   login
const loginform = document.getElementById('login-form');

loginform.addEventListener('submit', async(event) => {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const Email = loginform.elements['email'].value;
  const Password = loginform.elements['password'].value;

  // Send form data to backend
  const data = {
    Email,
    Password,
  };

   fetch(`${uri}/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(async(response) => {
    if (response.ok) {
      localStorage.setItem('userID', JSON.stringify(await response.json()));
      // console.log(await response.json());
      window.location.href = '../index.html'; // Redirect to index page
    } else {
      alert('Invalid Email or Password');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Login failed. Please try again.');
  });
});

// **************************************************************
let signup = document.querySelector(".signup");

let login = document.querySelector(".login");

let slider = document.querySelector(".slider");

let formSection = document.querySelector(".form-section");
 

signup.addEventListener("click", () => {

    slider.classList.add("moveslider");

    formSection.classList.add("form-section-move");
});
 

login.addEventListener("click", () => {

    slider.classList.remove("moveslider");

    formSection.classList.remove("form-section-move");
});