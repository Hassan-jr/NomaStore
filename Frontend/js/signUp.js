
//   Sign up page
const form = document.querySelector('#signup-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  // Get form data
  const firstName = form.elements['first-name'].value;
  const lastName = form.elements['last-name'].value;
  const email = form.elements['email'].value;
  const phone = form.elements['phone'].value;
  const address = form.elements['address'].value;
  const city = form.elements['city'].value;
  const password = form.elements['password'].value;
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
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    password,
    confirmPassword,
  };
// post the data

//   fetch('/api/signup', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => {
//     if (response.ok) {
//       alert('Sign up successful!');
        //  form.reset(); // Reset form
        //  window.location.href = '/index.html'; // Redirect to home page

//     } else {
//       alert('Sign up failed. Please try again.');
//     }
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     alert('Sign up failed. Please try again.');
//   });
console.log(data);
});

// *************************************** loging ***********************
//   sign in 
const loginform = document.getElementById('login-form');

loginform.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const email = loginform.elements['email'].value;
  const password = loginform.elements['password'].value;

  // Send form data to backend
  const data = {
    email,
    password,
  };

//   fetch('/api/login', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => {
//     if (response.ok) {
//       alert('Login successful!');
//       window.location.href = '/index.html'; // Redirect to index page
//     } else {
//       alert('Login failed. Please try again.');
//     }
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     alert('Login failed. Please try again.');
//   });
console.log(data);
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