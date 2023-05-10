window.addEventListener('scroll', function() {
  var navbar = document.querySelector('nav');
  if (window.pageYOffset > 0) {
    navbar.style.backgroundColor = 'rgba(19, 11, 44, 0.7)';
  } else {
    navbar.style.backgroundColor = 'rgba(5, 9, 39, 1)';
  }
});

const checkbox = document.querySelector('.hamburger input');
const overlay = document.querySelector('.overlay');

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    overlay.classList.add('visible');
  } else {
    overlay.classList.remove('visible');
  }
});

overlay.addEventListener('click', function() {
  checkbox.checked = false;
  overlay.classList.remove('visible');
});
