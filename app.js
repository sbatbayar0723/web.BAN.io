const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  
  // replace this with your own authentication logic
  if (username === 'username' && password === 'password') {
    alert('Login successful!');
    loginForm.reset();
  } else {
    alert('Incorrect username or password!');
  }
});
