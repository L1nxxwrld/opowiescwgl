
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.pageYOffset > 0) {
      navbar.style.backgroundColor = 'rgba(46,48,53, 0.7)';
    } else {
      navbar.style.backgroundColor = 'rgba(28, 24, 37, 1)';
    }
  });


