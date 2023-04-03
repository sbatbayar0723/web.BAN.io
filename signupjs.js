const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }
  if (emailInput.value.trim() === '') {
    alert('Please enter your email.');
    emailInput.focus();
    return;
  }
  if (passwordInput.value.trim() === '') {
    alert('Please enter your password.');
    passwordInput.focus();
    return;
  }
  if (confirmPasswordInput.value.trim() === '') {
    alert('Please confirm your password.');
    confirmPasswordInput.focus();
    return;
  }
  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match. Please try again.');
    passwordInput.value = '';
    confirmPasswordInput.value = '';
    passwordInput.focus();
    return;
  }
});
  // If form is valid, you could send the data to a server here.
