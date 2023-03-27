const toggleSwitch = document.querySelector('.toggle-input');

// Check if local storage exists and set toggle switch state accordingly
if (localStorage.getItem('mode') === 'dark') {
  toggleSwitch.checked = true;
  document.body.classList.add('dark-mode');
} else {
  toggleSwitch.checked = false;
  document.body.classList.remove('dark-mode');
}

// Listen for toggle switch change event
toggleSwitch.addEventListener('change', function() {
  // Toggle dark mode class on body element
  document.body.classList.toggle('dark-mode');

  // Set local storage to remember the state of the toggle switch
  if (toggleSwitch.checked) {
    localStorage.setItem('mode', 'dark'); 
  } else {
    localStorage.setItem('mode', 'light');
  }
});
