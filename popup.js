const popupContainer = document.getElementById('popup-container');
const popup = popupContainer.querySelector('.popup');
const progressBar = popupContainer.querySelector('.progress-bar');

function showPopup() {
    popupContainer.style.display = 'block';
    setTimeout(() => {
      popup.classList.add('show');
    }, 100);
    setTimeout(hidePopup, 5000);
  }
  
  function hidePopup() {
    popup.classList.remove('show');
    setTimeout(() => {
      popupContainer.style.display = 'none';
    }, 500);
  }

function updateProgressBar() {
  let currentTime = 0;
  let intervalId = setInterval(() => {
    currentTime += 1000;
    const progress = (currentTime / 5000) * 250;
    progressBar.style.width = `${progress}%`;
    if (currentTime >= 5000) {
      clearInterval(intervalId);
    }
  }, 1000);
}

showPopup();
updateProgressBar();
