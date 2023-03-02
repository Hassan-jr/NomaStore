//  Responsive nav
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('toggle_nav');
  });

//   sign in 
const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const email = form.elements['email'].value;
  const password = form.elements['password'].value;

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
//       window.location.href = '/dashboard.html'; // Redirect to dashboard page
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
