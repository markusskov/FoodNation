const form = document.querySelector('#contactForm');
const firstName = document.querySelector('#name');
const firstNameError = document.querySelector('#nameError');
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const subject = document.querySelector('#subject');
const subjectError = document.querySelector('#subjectError');
const message = document.querySelector('#message');
const messageError = document.querySelector('#messageError');

function validateForm() {
  event.preventDefault();

  if (checkLength(firstName.value, 5) === true) {
    firstNameError.style.display = 'none';
  } else {
    firstNameError.style.display = 'block';
  }

  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = 'none';
  } else {
    subjectError.style.display = 'block';
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = 'none';
  } else {
    emailError.style.display = 'block';
  }

  if (checkLength(message.value, 25) === true) {
    messageError.style.display = 'none';
  } else {
    messageError.style.display = 'block';
  }

  console.log('Test Form');
}

form.addEventListener('submit', validateForm);

function checkLength(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
