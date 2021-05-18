const hamburger = document.getElementById('hamburger');
const mobileContainer = document.querySelector('.mobile__container');

hamburger.addEventListener('click', function (event) {
  if (mobileContainer.style.display === 'flex') {
    mobileContainer.style.display = 'none';
  } else {
    mobileContainer.style.display = 'flex';
  }
});
