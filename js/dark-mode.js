const toggleSwitch = document.querySelector('.input');
const features = document.querySelector('.features');
const bt1 = document.querySelector('.bt-1');

// Check if local storage exists and set toggle switch state accordingly
if (localStorage.getItem('mode') === 'dark') {
  toggleSwitch.checked = true;
  document.body.classList.remove('dark-mode');
  features.classList.add('white-bg');
} else {
  toggleSwitch.checked = false;
  document.body.classList.add('dark-mode');
  features.classList.remove('white-bg');
  bt1.classList.remove('text-dark');
}

// Listen for toggle switch change event
toggleSwitch.addEventListener('change', function() {
  // Toggle dark mode class on body element
  document.body.classList.toggle('dark-mode');

  // Toggle white background class on features element
  features.classList.toggle('white-bg');
  bt1.classList.toggle('text-dark');


  // Set local storage to remember the state of the toggle switch
  if (toggleSwitch.checked) {
    localStorage.setItem('mode', 'dark'); 
  } else {
    localStorage.setItem('mode', 'light');
  }
});