const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');

let passwordVisible = false;

togglePassword.addEventListener('click', () => {
  passwordVisible = !passwordVisible;
  if (passwordVisible) {
    passwordInput.type = 'text';
    togglePassword.src = 'lock-open-alt-solid-24.png' // Ruta a tu imagen de ocultar contraseña
    togglePassword.alt = 'Ocultar Contraseña';
  } else {
    passwordInput.type = 'password';
    togglePassword.src = 'lock-alt-solid-24.png'; // Ruta a tu imagen de mostrar contraseña
    togglePassword.alt = 'Mostrar Contraseña';
  }
});