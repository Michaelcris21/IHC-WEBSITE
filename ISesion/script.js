const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');
console.log(togglePassword.className);

togglePassword.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePassword.classList.remove('bx-lock-open');
    togglePassword.classList.add('bx-lock');
  } else {
    passwordInput.type = 'password';
    togglePassword.classList.remove('bx-lock');
    togglePassword.classList.add('bx-lock-open');
  }
});


