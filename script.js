const toggleSwitch = document.querySelector('.toggle-input');

toggleSwitch.addEventListener('change', function() {
  document.body.classList.toggle('dark-mode');
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.pageYOffset > 0) {
      navbar.style.backgroundColor = '#2e3035';
    } else {
      navbar.style.backgroundColor = '#1c1825';
    }
  });