const toggleSwitch = document.querySelector('.toggle-input');
const html = document.querySelector('html');

// Check local storage for the user's preferred mode
const currentMode = localStorage.getItem('mode');
if (currentMode === 'dark') {
  html.classList.add('dark-mode');
  toggleSwitch.checked = true;
}

// Add event listener to toggle switch to update local storage and apply styling
toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    html.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark');
  } else {
    html.classList.remove('dark-mode');
    localStorage.setItem('mode', 'light');
  }
});

// Change styling on page load based on local storage preference
window.addEventListener('load', function() {
  const currentMode = localStorage.getItem('mode');
  if (currentMode === 'dark') {
    html.classList.add('dark-mode');
    toggleSwitch.checked = true;
  }
});

// Change styling when the page is resized
window.addEventListener('resize', function() {
  const currentMode = localStorage.getItem('mode');
  if (currentMode === 'dark') {
    html.classList.add('dark-mode');
    toggleSwitch.checked = true;
  } else {
    html.classList.remove('dark-mode');
    toggleSwitch.checked = false;
  }
});

// Change styling when the page is scrolled
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('nav');
  const currentMode = localStorage.getItem('mode');
  if (currentMode === 'dark') {
    navbar.style.backgroundColor = 'rgba(46,48,53, 0.7)';
  } else {
    navbar.style.backgroundColor = 'rgba(28, 24, 37, 1)';
  }
});
