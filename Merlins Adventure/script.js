// gallery js

let slideIndex = 1;

function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slides[slideIndex - 1].style.display = 'block';
}

// burger menu toggle js

// document.getElementById('burger-icon').addEventListener('click', function() {
//   document.querySelector('nav').classList.toggle('show');
// }); 

document.addEventListener('DOMContentLoaded', function() {
  var burgerIcon = document.getElementById('burger-icon');
  var nav = document.querySelector('nav');
  var navItems = document.querySelectorAll('nav ul li');

  if (burgerIcon && nav && navItems) {
    burgerIcon.addEventListener('click', function() {
      nav.classList.toggle('show');
    });

    // Close the menu if a nav item is clicked
    navItems.forEach(function(item) {
      item.addEventListener('click', function() {
        nav.classList.remove('show');
      });
    });
  }
});

document.getElementById('close-icon').addEventListener('click', function() {
  var nav = document.querySelector('nav');
  nav.classList.remove('show');

  // Wait for the closing animation to complete before hiding the menu
  setTimeout(function() {
    nav.style.transition = 'left 0.5s ease'; // Set transition for ease effect
    nav.style.left = '';
  }, 300);
});