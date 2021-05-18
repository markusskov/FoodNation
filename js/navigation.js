const hamburger = document.getElementById('hamburger');
const mobileContainer = document.querySelector('.mobile__container');

hamburger.addEventListener('click', function (event) {
  if (mobileContainer.style.display === 'none') {
    mobileContainer.style.display = 'flex';
  } else {
    mobileContainer.style.display = 'none';
  }
});
