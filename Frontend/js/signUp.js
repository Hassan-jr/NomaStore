//  Responsive nav
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('toggle_nav');
  });
  

//   Sign up page
const form = document.querySelector('#signup-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

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
