// Make the nav bar responsive
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
 navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('toggle_nav');
  });

//   Chnage the header
const headerTitel = document.getElementsByTagName('iframe')
console.log(headerTitel);