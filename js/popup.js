const loaderOverlay = document.getElementById('loader-overlay');
const loader = document.getElementById('loader');

// show loader and loader-overlay
loaderOverlay.classList.add('show');
loader.classList.add('show');

// hide loader and loader-overlay after 5 seconds
setTimeout(function() {
  loaderOverlay.style.opacity = '0';
  loader.style.opacity = '0';
}, 2000);
setTimeout(function() {
  loaderOverlay.style.display = 'none';
  loader.style.display = 'none';
}, 2700);